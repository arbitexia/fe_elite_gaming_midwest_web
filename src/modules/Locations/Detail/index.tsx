import React, { useState, useEffect, useRef } from 'react';
import { UIFlexColumnBox, UIFlexWrapBox } from '@/components/UI';
import { RewardType } from '@/types';
import { Box, Typography } from '@mui/material';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { RewardCard } from './RewardCard';
import { StyledLocationCardBox } from './ui';
import Carousel from 'react-material-ui-carousel';
import { useTranslation } from 'next-export-i18n';

const accessToken =
  'pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg';

export interface LocationsDetailProps {
  rewardItem: RewardType.DataList;
}

export const LocationsDetail = ({ rewardItem }: LocationsDetailProps) => {
  const { t } = useTranslation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState<mapboxgl.Map>();

  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === 'undefined' || node === null) return;
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: accessToken,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [rewardItem.coords?.lng ?? 0, rewardItem.coords?.lat ?? 0],
      zoom: 15,
    });
    mapboxMap.on('load', () => {
      const markerIcon = document.createElement('div');
      markerIcon.className = 'location-marker';
      markerIcon.style.backgroundImage = 'url("/images/icons/pin.svg")';
      markerIcon.style.width = '25px';
      markerIcon.style.height = '25px';
      new mapboxgl.Marker(markerIcon)
        .setLngLat({
          lng: rewardItem.coords?.lng ?? 0,
          lat: rewardItem.coords?.lat ?? 0,
        })
        .addTo(mapboxMap);
    });
    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);
  return (
    <UIFlexWrapBox sx={{ justifyContent: 'space-between' }} py="45px">
      <Box width="48%">
        <Typography
          sx={{
            mb: '30px',
            fontSize: '18px',
            lineHeight: '27px',
            fontWeight: 500,
            color: '#89C8C6',
            span: { color: 'rgba(137, 200, 198, 0.5)', fontWeight: 600 },
          }}
        >
          <span>{t('common.location')}: </span>
          {`${rewardItem.address?.address1 ?? ''} ${
            rewardItem.address?.address2 ?? ''
          } ${rewardItem.address?.city ?? ''} ${
            rewardItem.address?.state ?? ''
          } ${rewardItem.address?.zipcode ?? ''}`}
        </Typography>
        <StyledLocationCardBox>
          <Box>
            <Carousel
              navButtonsAlwaysVisible
              sx={{ minHeight: '320px', maxHeight: '400px' }}
            >
              {rewardItem.gallery && rewardItem.gallery.length > 0 ? (
                rewardItem.gallery?.map((gallery, index) => {
                  return (
                    <Box
                      component="img"
                      src={`${gallery.asset?.url}`}
                      alt={'carousel'}
                      key={index}
                      sx={{
                        width: '100%',
                        height: '320px',
                        objectFit: 'contain',
                        borderRadius: '12px',
                      }}
                    />
                  );
                })
              ) : (
                <Box
                  component="img"
                  src={'/images/noImage.jpg'}
                  alt={'carousel'}
                  sx={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                  }}
                />
              )}
            </Carousel>
          </Box>
          <Typography
            sx={{
              fontSize: '18px',
              lineHeight: '27px',
              fontWeight: 600,
              color: 'rgba(137, 200, 198, 0.5)',
            }}
          >
            {t('common.map')}
          </Typography>
          <Box
            ref={mapNode}
            sx={{
              width: '100%',
              height: '295px',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          ></Box>
        </StyledLocationCardBox>
      </Box>
      <Box
        sx={{
          height: '884px',
          width: '0px',
          borderLeft: '1px solid rgba(137, 200, 198, 0.2)',
        }}
      />
      <Box width="48%">
        <Typography
          sx={{
            mb: '30px',
            fontSize: '18px',
            lineHeight: '27px',
            fontWeight: 500,
            color: 'rgba(137, 200, 198, 0.5)',
          }}
        >
          {t('common.rewards')}
        </Typography>
        <UIFlexColumnBox
          sx={{
            gap: '15px',
            width: '100%',
            height: '827px',
            justifyContent: 'flex-start',
            overflow: 'auto',
          }}
        >
          {rewardItem.reward?.map((item, index) => {
            return <RewardCard item={item} key={index} />;
          })}
        </UIFlexColumnBox>
      </Box>
    </UIFlexWrapBox>
  );
};
