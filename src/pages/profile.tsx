import { useRouter } from 'next/router';
import { UIContainer } from '@/components/UI';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Box } from '@mui/material';
import { ProfileCard, ProfileHeader, ProfileEdit } from '@/modules/Profile';

const ProfilePage = () => {
  const router = useRouter();
  const { type } = router.query;
  return (
    <DashboardLayout title="Profile">
      <UIContainer>
        <Box sx={{ px: '165px' }}>
          <ProfileHeader />
          {type === 'edit' ? <ProfileEdit /> : <ProfileCard />}
        </Box>
      </UIContainer>
    </DashboardLayout>
  );
};

export default ProfilePage;
