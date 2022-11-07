// import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  UIFlexWrapBox,
  UIFlexCenterBox,
  UIFlexColumnBox,
} from '@/components/UI';
import { Box, Avatar, Typography } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import {
  StyledProfileEditLabel,
  StyledProfileButton,
  StyledProfileTextArea,
  StyledProfileTextField,
} from './ui';
import { profileData } from '@/_mock/profile';

export const ProfileEdit = () => {
  // const [showLoader, setShowLoader] = useState(false);
  // const [progress, setProgress] = useState(10);
  const router = useRouter();
  const handleEdit = () => {
    router.push('/profile');
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
        Save
      </StyledProfileButton>
      <UIFlexCenterBox sx={{ width: '40%', height: '100%' }}>
        <UIFlexColumnBox
          sx={{
            height: '350px',
            '& input': {
              display: 'none',
            },
          }}
        >
          <label htmlFor="photo-upload">
            <Avatar
              variant="rounded"
              sx={{
                height: '300px',
                width: '300px',
                position: 'relative',
                background: 'rgba(196, 196, 196, 0.5)',
                borderRadius: '20px',
              }}
              // src={}
            >
              <Typography
                sx={{
                  width: '100px',
                  height: '22px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '4px',
                  fontWeight: '500',
                  fontSize: '12px',
                  lineHeight: '22px',
                  textAlign: 'center',
                  color: '#8C8787',
                }}
              >
                Edit Photo
              </Typography>
            </Avatar>
            {/* {showLoader ? <UIAssetProgress value={progress} /> : null} */}
            <input
              id="photo-upload"
              // onChange={onAvatarChange}
              type="file"
              accept="image/png, image/gif, image/jpeg"
            />
          </label>
          <Typography
            sx={{
              mt: '15px',
              maxWidth: '200px',
              fontWeight: '400',
              fontSize: '12px',
              lineHeight: '15px',
              textAlign: 'center',
              letterSpacing: '0.1px',
              color: '#667180',
            }}
          >
            Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
          </Typography>
        </UIFlexColumnBox>
      </UIFlexCenterBox>
      <UIFlexWrapBox sx={{ gap: '80px', height: '100%', alignItems: 'center' }}>
        <Box>
          <StyledProfileEditLabel>Full Name</StyledProfileEditLabel>
          <StyledProfileEditLabel>Phone number</StyledProfileEditLabel>
          <StyledProfileEditLabel>Email</StyledProfileEditLabel>
          <StyledProfileEditLabel>Location</StyledProfileEditLabel>
          <StyledProfileEditLabel>Birthday</StyledProfileEditLabel>
        </Box>
        <Box sx={{ width: '270px' }}>
          <StyledProfileTextField value={profileData.fullName} />
          <StyledProfileTextField value={profileData.phonenumber} />
          <StyledProfileTextField value={profileData.email} />
          <StyledProfileTextArea
            multiline
            rows={2}
            value={profileData.location}
          />
          <StyledProfileTextField value={profileData.birthday} />
        </Box>
      </UIFlexWrapBox>
    </UIFlexWrapBox>
  );
};
