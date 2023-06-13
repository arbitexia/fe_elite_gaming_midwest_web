import { useRouter } from 'next/router';
import { UIContainer } from '@/components/UI';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Box } from '@mui/material';
import { ProfileCard, ProfileHeader, ProfileEdit } from '@/modules/Profile';
import { useAsset, useAuth } from '@/hooks';
import { UpdateUserParam, UserType } from '@/types';
import { useSelectedLanguage, useTranslation } from 'next-export-i18n';

const ProfilePage = () => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const { type } = router.query;
  const { me, onUpdateProfile } = useAuth({});
  const { onCreateAsset } = useAsset();

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
  return (
    <DashboardLayout title={t('common.profile')}>
      <UIContainer>
        <Box sx={{ px: '165px' }}>
          <ProfileHeader />
          {type === 'edit' ? (
            <ProfileEdit profile={me as UserType.User} onEdit={handleEdit} />
          ) : (
            <ProfileCard profile={me as UserType.User} />
          )}
        </Box>
      </UIContainer>
    </DashboardLayout>
  );
};

export default ProfilePage;
