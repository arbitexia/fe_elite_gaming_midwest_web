import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DashboardLayout } from '@/layouts';
import { UIContainer, UIFlexWrapBox } from '@/components/UI';
import { RewardsHeader, RewardsFilterBox } from '@/modules/Rewards';
import { RewardType, TransactionType, UserType } from '@/types';
import { Divider } from '@mui/material';
import { RewardDetailCard } from '@/modules/Rewards/Detail/DetailCard';
import { useAuth, usePoint, useReward, useTransaction } from '@/hooks';
import { TransactionStatus } from '@/types/transaction.type';

const RewardsById = () => {
  const router = useRouter();
  const { id } = router.query;
  const { me } = useAuth({});
  const { rewards } = useReward();
  const { points } = usePoint();
  const { onCreateTransaction } = useTransaction();

  const [rewardItem, setRewardItem] = useState<RewardType.Data>();

  useEffect(() => {
    setRewardItem(rewards.find((item) => item.id === parseInt(id as string)));
  }, [id]);

  const handleExchangeOffer = async () => {
    const filteredPoints = points.find(
      (p) => p?.userLocation?.locationId === rewardItem?.locationId
    );
    const amount = rewardItem?.product?.point ?? 0;
    const thePoint = filteredPoints?.point ?? 0;
    if (thePoint >= amount) {
      const dataToSave: TransactionType.Body = {
        input: {
          userId: Number((me as UserType.User)?.id) ?? 0,
          rewardId: rewardItem?.id ?? 0,
          locationId: rewardItem?.locationId ?? 0,
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
    <DashboardLayout title={rewardItem ? rewardItem.product.name : 'Rewards'}>
      <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
        <RewardsHeader />
        <Divider
          sx={{
            mt: '26px',
            borderColor: 'rgba(137, 200, 198, 0.5)',
          }}
        />
        <RewardsFilterBox />
        {rewardItem && (
          <UIFlexWrapBox
            sx={{
              mt: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(137, 200, 198, 0.2)',
              backdropFilter: 'blur(20px)',
              borderRadius: '30px',
              padding: '25px 30px',
            }}
          >
            <RewardDetailCard
              rewardItem={rewardItem}
              myPoint={
                points.find(
                  (p) => p?.userLocation?.locationId === rewardItem.locationId
                )?.point ?? 0
              }
              onExchange={handleExchangeOffer}
            />
          </UIFlexWrapBox>
        )}
      </UIContainer>
    </DashboardLayout>
  );
};

export default RewardsById;
