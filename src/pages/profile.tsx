import { useRouter } from 'next/router';
import { UIContainer } from '@/components/UI';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Box } from '@mui/material';
import { ProfileCard, ProfileHeader, ProfileEdit } from '@/modules/Profile';
import { useAsset, useAuth, useTransaction } from '@/hooks';
import { TransactionType, UpdateUserParam, UserType } from '@/types';
import { useSelectedLanguage, useTranslation } from 'next-export-i18n';
import { TransactionStatus } from '@/constants';

const ProfilePage = () => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const { type } = router.query;
  const { me, onUpdateProfile } = useAuth({});
  const { onCreateAsset } = useAsset();
  const { onRequestCouponTransaction } = useTransaction();
  const handleEdit = async (value: UpdateUserParam) => {
    try {
      if (value?.profileFile) {
        const assetData = await onCreateAsset(value.profileFile);
        await onUpdateProfile({
          ...value,
          input: { ...value.input, avatar: assetData },
        });
      } else {
        await onUpdateProfile(value);
      }
      router.push({
        pathname: '/profile',
        query: {
          ...(lang === 'es' && { lang }),
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestCoupon = async () => {
    const dataToSave: TransactionType.CouponBody = {
      input: {
        userId: Number((me as UserType.User)?.id) ?? 0,
        status: TransactionStatus.WAITING,
        type: 'COUPON',
        amount: 10,
      },
    };
    await onRequestCouponTransaction(dataToSave);
  };

  return (
    <DashboardLayout title={t('common.profile')}>
      <UIContainer>
        <Box sx={{ px: '165px' }}>
          <ProfileHeader />
          {type === 'edit' ? (
            <ProfileEdit profile={me as UserType.User} onEdit={handleEdit} />
          ) : (
            <ProfileCard
              profile={me as UserType.User}
              onRequestCoupon={handleRequestCoupon}
            />
          )}
        </Box>
      </UIContainer>
    </DashboardLayout>
  );
};

export default ProfilePage;
