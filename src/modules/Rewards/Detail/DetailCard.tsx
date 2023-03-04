import { UIFlexWrapBox } from '@/components/UI';
import { RewardItemType } from '@/types';
import { Box, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { RewardsInfoBox } from './DetailInfo';

export interface RewardDetailCardProps {
  rewardItem: RewardItemType;
}

export const RewardDetailCard = ({ rewardItem }: RewardDetailCardProps) => {
  return (
    <UIFlexWrapBox
      sx={{
        gap: '90px',
      }}
    >
      <Box sx={{ width: '477px' }}>
        <Carousel navButtonsAlwaysVisible sx={{ height: '450px' }}>
          {rewardItem.url.map((url, index) => {
            return (
              <Box
                component="img"
                src={`/${url}`}
                alt={'carousel'}
                key={index}
                sx={{
                  width: '477px',
                  height: '415px',
                  objectFit: 'contain',
                  borderRadius: '12px',
                }}
              />
            );
          })}
        </Carousel>
      </Box>
      <Box mt="35px">
        <RewardsInfoBox rewardItem={rewardItem} myPoint={29000} />
        <Button
          sx={{
            mt: '40px',
            background:
              'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
            border: '1px solid rgba(191, 215, 225, 0.05)',
            borderRadius: '12px',
            fontWeight: '500',
            fontSize: '24px',
            lineHeight: '36px',
            color: '#FFFFFF',
            width: '310px',
            height: '68px',
            textTransform: 'none',
          }}
        >
          Exchange Offer
        </Button>
      </Box>
    </UIFlexWrapBox>
  );
};
