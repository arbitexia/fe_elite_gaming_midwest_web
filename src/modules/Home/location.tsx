import React, { useState, useEffect, useRef } from 'react';
import {
  UIFlexWrapBox,
  UIDefaultTextField,
  UIFlexSpaceBox,
  UIContainer,
} from '@/components/UI';
import { Box, Typography, List } from '@mui/material';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { locationData } from '@/_mock/Home';
import LocationItem from './LocationItem';

const accessToken =
  'pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg';

const LocationContent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState<mapboxgl.Map>();

  const mapNode = useRef(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
      const node = mapNode.current;
      if (typeof window === 'undefined' || node === null) return;
      const mapboxMap = new mapboxgl.Map({
        container: node,
        accessToken: accessToken,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [pos.coords.longitude, pos.coords.latitude],
        zoom: 9,
      });
      mapboxMap.on('load', () => {
        const markerIcon = document.createElement('div');
        markerIcon.className = 'location-marker';
        markerIcon.style.backgroundImage = 'url("/images/icons/en.svg")';
        markerIcon.style.width = '30px';
        markerIcon.style.height = '30px';
        new mapboxgl.Marker(markerIcon)
          .setLngLat({ lng: pos.coords.longitude, lat: pos.coords.latitude })
          .addTo(mapboxMap);
      });
      setMap(mapboxMap);

      return () => {
        mapboxMap.remove();
      };
    });
  }, []);
  return (
    <UIContainer>
      <Box sx={{ padding: '120px 260px' }}>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '36px',
            lineHeight: '80px',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Elite Games Locations
        </Typography>
        <UIFlexSpaceBox
          sx={{
            height: '640px',
            mt: '50px',
            background: 'rgba(72, 124, 118, 0.14)',
            backgroundImage: 'url("/images/location.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
            border: '2px solid rgba(137, 200, 198, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '30px',
            padding: '55px',
          }}
        >
          <Box sx={{ width: '48%', height: '100%' }}>
            <UIFlexWrapBox
              sx={{
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <Typography
                sx={{
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#B7B7B7',
                }}
              >
                Your Location
              </Typography>
              <UIDefaultTextField
                placeholder="Location"
                value={'Effingham, IL, USA'}
                sx={{
                  width: 'calc(100% - 125px)',
                  height: '42px',
                  '.MuiOutlinedInput-input': {
                    fontSize: '16px',
                    lineHeight: '24px',
                  },
                }}
              />
            </UIFlexWrapBox>
            <List
              sx={{
                width: '100%',
                maxHeight: '410px',
                overflow: 'auto',
                mt: '65px',
              }}
            >
              {locationData.map((item, index) => {
                return <LocationItem key={index} data={item} />;
              })}
            </List>
          </Box>
          <Box ref={mapNode} sx={{ width: '48%', height: '100%' }}></Box>
        </UIFlexSpaceBox>
      </Box>
    </UIContainer>
  );
};

export default LocationContent;
