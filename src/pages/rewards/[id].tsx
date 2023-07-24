import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DashboardLayout } from '@/layouts';
import { UIContainer, UIFlexWrapBox } from '@/components/UI';
import { RewardsHeader, RewardsFilterBox } from '@/modules/Rewards';
import { RewardType, TransactionType, UserCouponType, UserType } from '@/types';
import { Divider } from '@mui/material';
import { RewardDetailCard } from '@/modules/Rewards/Detail/DetailCard';
import { useAuth, usePoint, useReward, useTransaction } from '@/hooks';
import { TransactionStatus } from '@/types/transaction.type';
import { useLanguageQuery, useTranslation } from 'next-export-i18n';

const RewardsById = () => {
  const { t } = useTranslation();
  const { query } = useLanguageQuery();
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
    const filteredUserPoints = points.find(
      (p) => p?.userLocation?.locationId === rewardItem?.locationId
    );
    const rewardPoint = rewardItem?.point ?? 0;
    const rewardCoupon = rewardItem?.coupon ?? 0;
    const userPoint = filteredUserPoints?.point ?? 0;
    const userCoupon =
      me?.userCoupons
        ?.filter((c) => c.status === 1)
        ?.map((obj) => obj.amount)
        ?.reduce((a, b) => a + b, 0) ?? 0;
    if (userPoint >= rewardPoint) {
      const dataToSave: TransactionType.Body = {
        input: {
          userId: Number((me as UserType.User)?.id) ?? 0,
          rewardId: rewardItem?.id ?? 0,
          locationId: rewardItem?.locationId ?? 0,
          pointId: filteredUserPoints?.id ?? 0,
          status: TransactionStatus.WAITING,
          type: 'POINT',
          amount: rewardPoint,
          balance: Number(userPoint) - Number(rewardPoint),
        },
      };
      await onCreateTransaction(dataToSave);
    } else if (userCoupon >= rewardCoupon) {
      const dataToSave: TransactionType.Body = {
        input: {
          userId: Number((me as UserType.User)?.id) ?? 0,
          rewardId: rewardItem?.id ?? 0,
          locationId: rewardItem?.locationId ?? 0,
          pointId: 0,
          status: TransactionStatus.WAITING,
          type: 'COUPON',
          amount: rewardCoupon,
          balance: Number(userCoupon) - Number(rewardCoupon),
          userCouponCodes: filterCouponCodes(
            me?.userCoupons ?? [],
            Number(rewardCoupon)
          ),
        },
      };
      await onCreateTransaction(dataToSave);
    }
    router.push({
      pathname: '/rewards',
      query: {
        ...(query && query.lang === 'es' && query),
      },
    });
  };

  const filterCouponCodes = (coupons: UserCouponType[], targetSum: number) => {
    let currentSum = 0;
    let filteredCodes = [];
    for (const coupon of coupons) {
      currentSum += coupon.amount;
      if (currentSum <= targetSum) {
        filteredCodes.push(coupon.code);
      } else {
        break;
      }
    }
    return filteredCodes;
  };
  return (
    <DashboardLayout
      title={rewardItem ? rewardItem.product.name : t('common.rewards')}
    >
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
              userPoint={
                points.find(
                  (p) => p?.userLocation?.locationId === rewardItem.locationId
                )?.point ?? 0
              }
              userCoupon={(me as UserType.User)?.coupon ?? 0}
              onExchange={handleExchangeOffer}
            />
          </UIFlexWrapBox>
        )}
      </UIContainer>
    </DashboardLayout>
  );
};

export default RewardsById;
