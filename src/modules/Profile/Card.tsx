import { useRouter } from 'next/router';
import { UIFlexWrapBox, UIFlexCenterBox } from '@/components/UI';
import { Box, Avatar } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import {
  StyledProfileValue,
  StyledProfileLabel,
  StyledProfileButton,
} from './ui';
import { profileData } from '@/_mock/profile';

export const ProfileCard = () => {
  const router = useRouter();
  const handleEdit = () => {
    router.push('/profile?type=edit');
  };
  return (
    <UIFlexWrapBox
      sx={{
        my: '40px',
        width: '100%',
        height: '550px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '2px solid rgba(137, 200, 198, 0.2)',
        backdropFilter: 'blur(20px)',
        borderRadius: '30px',
        position: 'relative',
      }}
    >
      <StyledProfileButton startIcon={<EditIcon />} onClick={handleEdit}>
        Edit
      </StyledProfileButton>
      <UIFlexCenterBox sx={{ width: '40%', height: '100%' }}>
        <Box sx={{ height: '350px' }}>
          <Avatar
            variant="rounded"
            sx={{
              bgcolor: 'light-gray',
              height: '300px',
              width: '300px',
              position: 'relative',
              opacity: '1',
              borderRadius: '20px',
            }}
            // src={}
          />
        </Box>
      </UIFlexCenterBox>
      <UIFlexWrapBox sx={{ gap: '80px', height: '100%', alignItems: 'center' }}>
        <Box>
          <StyledProfileLabel>Full Name</StyledProfileLabel>
          <StyledProfileLabel>Phone number</StyledProfileLabel>
          <StyledProfileLabel>Email</StyledProfileLabel>
          <StyledProfileLabel>Location</StyledProfileLabel>
          <StyledProfileLabel>Birthday</StyledProfileLabel>
        </Box>
        <Box>
          <StyledProfileValue>{profileData.fullName}</StyledProfileValue>
          <StyledProfileValue>{profileData.phonenumber}</StyledProfileValue>
          <StyledProfileValue>{profileData.email}</StyledProfileValue>
          <StyledProfileValue>{profileData.location}</StyledProfileValue>
          <StyledProfileValue>{profileData.birthday}</StyledProfileValue>
        </Box>
      </UIFlexWrapBox>
    </UIFlexWrapBox>
  );
};
