import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { UIHoverButton } from '@/components/UI';
import { StyledRewardCardBox, StyledRewardImageBox } from './ui';
import { RewardType, UserType } from '@/types';
import { RewardDetailDialog } from './Dialog';
import { useAuth, usePoint, useTransaction } from '@/hooks';
import { TransactionStatus, TransactionType } from '@/types/transaction.type';

export interface RewardCardProps {
  item: RewardType.Data;
}

export const RewardCard = ({ item }: RewardCardProps) => {
  const router = useRouter();
  const { points } = usePoint();
  const { me } = useAuth({});
  const { onCreateTransaction } = useTransaction();

  const [openDetail, setOpenDetail] = useState(false);

  const handleDetailClick = () => {
    setOpenDetail(true);
  };

  const handleExchangeOffer = async () => {
    const filteredPoints = points.find(
      (p) => p?.userLocation?.locationId === item?.locationId
    );
    const amount = item?.product?.point ?? 0;
    const thePoint = filteredPoints?.point ?? 0;
    if (thePoint >= amount) {
      const dataToSave: TransactionType.Body = {
        input: {
          userId: Number((me as UserType.User)?.id) ?? 0,
          rewardId: item?.id ?? 0,
          locationId: item?.locationId ?? 0,
          pointId: filteredPoints?.id ?? 0,
          status: TransactionStatus.WAITING,
          type: 'POINT',
          amount,
          balance: Number(thePoint) - Number(amount),
        },
      };
      await onCreateTransaction(dataToSave);
      router.push('/rewards');
    }
  };

  return (
    <StyledRewardCardBox>
      <StyledRewardImageBox sx={{ flexGrow: 0 }}>
        <Box
          component="img"
          src={
            item.product.gallery && item.product.gallery.length > 0
              ? item.product.gallery[0].asset?.url
              : '/images/noImage.jpg'
          }
          width={90}
          height={95}
        />
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
          {item.product.name}
        </Typography>

        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '21px',
            color: 'rgba(255, 255, 255, 0.57)',
          }}
        >
          {item.location?.name}
        </Typography>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '21px',
            color: 'rgba(255, 255, 255, 0.57)',
          }}
        >
          {`${item.location?.address?.address1 ?? ''} ${
            item.location?.address?.address2 ?? ''
          } ${item.location?.address?.city ?? ''} ${
            item.location?.address?.state ?? ''
          } ${item.location?.address?.zipcode ?? ''}`}
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
        onExchangeOffer={handleExchangeOffer}
      />
    </StyledRewardCardBox>
  );
};
