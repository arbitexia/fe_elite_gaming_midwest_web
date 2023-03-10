import React from 'react';
import { UIFlexSpaceBox } from '@/components/UI';
import { ListItem, ListItemText, Typography, Divider } from '@mui/material';
import { LocationItemDataProps } from '@/types';

export interface LocationItemProps {
  data: LocationItemDataProps;
  key: string
};

const LocationItem = ({ data }: LocationItemProps) => {
  return (
    <>
      <ListItem
        sx={{
          padding: 0,
          width: '100%',
        }}
      >
        <ListItemText
          primary={data.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: '20px',
                }}
              >
                {data.address1} <br />
                {data.address2}
              </Typography>
              <UIFlexSpaceBox>
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '12px',
                    lineHeight: '18px',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {data.distance} mi
                </Typography>
                <Typography
                  onClick={() => {
                    console.log('direction');
                  }}
                  sx={{
                    marginRight: '10px',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '21px',
                    textDecorationLine: 'underline',
                    color: 'rgba(0, 138, 131, 0.6)',
                    cursor: 'pointer',
                  }}
                >
                  Directions
                </Typography>
              </UIFlexSpaceBox>
            </React.Fragment>
          }
          sx={{
            '.MuiListItemText-primary': {
              fontWeight: '600',
              fontSize: '16px',
              lineHeight: '24px',
              alignItems: 'center',
              color: '#FFFFFF',
            },
          }}
        />
      </ListItem>
      <Divider sx={{ my: '20px', borderColor: 'rgba(137, 200, 198, 0.15)' }} />
    </>
  );
};

export default LocationItem;
