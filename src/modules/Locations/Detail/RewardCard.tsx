import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { UIImage, UIHoverButton } from '@/components/UI';
import { StyledRewardCardBox, StyledRewardImageBox } from './ui';
import { RewardItemType } from '@/types';
import { RewardDetailDialog } from './Dialog';

export interface RewardCardProps {
  item: RewardItemType;
}

export const RewardCard = ({ item }: RewardCardProps) => {
  const [openDetail, setOpenDetail] = useState(false);
  const handleDetailClick = () => {
    setOpenDetail(true);
  };
  return (
    <StyledRewardCardBox>
      <StyledRewardImageBox sx={{ flexGrow: 0 }}>
        <UIImage src={item.url[0]} width={90} height={95} />
      </StyledRewardImageBox>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#FFFFFF',
          }}
        >
          {item.name}
        </Typography>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '21px',
            color: 'rgba(255, 255, 255, 0.57)',
          }}
        >
          {item.location}
        </Typography>
      </Box>
      <UIHoverButton
        sx={{
          width: '100px',
          height: '42px',
          flexGrow: 0,
          borderRadius: '8px',
        }}
        onClick={handleDetailClick}
      >
        Details
      </UIHoverButton>
      <RewardDetailDialog
        open={openDetail}
        onClose={() => setOpenDetail(false)}
        item={item}
      />
    </StyledRewardCardBox>
  );
};
