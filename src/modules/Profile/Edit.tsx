import { useState, useEffect } from 'react';
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
  StyledProfileTextField,
} from './ui';
import { UpdateUserParam, UserType } from '@/types';
import { useFormik } from 'formik';
import { convertMBtoBytes, formatPhoneNumber } from '@/libs/data-helper';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Moment } from 'moment';
import { useAppToast } from '@/providers';
import { AssetType } from '@/types';
import { useAsset } from '@/hooks';

type profileEditProps = {
  profile: UserType.User;
  onEdit: (value: UpdateUserParam) => void;
};
export const ProfileEdit = ({ profile, onEdit }: profileEditProps) => {
  const appToast = useAppToast();
  const { onCreateAsset } = useAsset();

  const [selectedFile, setSelectedFile] = useState<string>();

  const profileFormik = useFormik({
    initialValues: profile,
    onSubmit: async (values) => {
      if (handleFormikChange('email', values?.email ?? '')) return;
      const dataToSave: UpdateUserParam = {
        userId: Number(profile.id),
        input: {
          id: Number(profile.id),
          firstName: values.firstName,
          lastName: values.lastName,
          userName: `${values.firstName}${values.lastName}`,
          email: values.email,
          phone: values.phone,
          address: values.address,
          birthday: values.birthday,
          status: profile.status,
        },
      };
      onEdit(dataToSave);
    },
  });

  const handleFormikChange = (name: string, value: string, isBlur = false) => {
    let error = '';
    if (name === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!value) {
        error = 'Email is required';
      } else if (!regex.test(value)) {
        error = 'Invalid Email';
      }
    }
    if (error) appToast({ severity: 'error', message: error, isBlur });
    return error;
  };

  const onAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // setShowImageError(false);
    const reader = new FileReader();
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;
    // Restrict user to upload file less than 3.1MB
    if (file.size > convertMBtoBytes(3.1)) {
      appToast('error', 'File size is too large');
      return;
    }
    reader.onloadend = async () => {
      const asset: AssetType.Asset = await onCreateAsset(file);
      // onUpdateGallery(activeStep, asset);
      setSelectedFile(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Box component="form" onSubmit={profileFormik.handleSubmit}>
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
        <StyledProfileButton startIcon={<EditIcon />} type="submit">
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
            <label htmlFor="photo-upload" style={{ position: 'relative' }}>
              {selectedFile ? (
                <Box
                  component="img"
                  sx={{
                    height: '300px',
                    width: '300px',
                    position: 'relative',
                    background: 'rgba(196, 196, 196, 0.5)',
                    borderRadius: '20px',
                  }}
                  alt="profile"
                  src={selectedFile}
                />
              ) : (
                <>
                  <Avatar
                    sx={{
                      height: '300px',
                      width: '300px',
                      position: 'relative',
                      background: 'rgba(196, 196, 196, 0.5)',
                      borderRadius: '20px',
                    }}
                    alt={'avatar'}
                  />

                  <Typography
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '32%',
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
                </>
              )}

              <input
                id="photo-upload"
                onChange={onAvatarChange}
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
        <UIFlexWrapBox
          sx={{ gap: '80px', height: '100%', alignItems: 'center' }}
        >
          <Box>
            <StyledProfileEditLabel>Full Name</StyledProfileEditLabel>
            <StyledProfileEditLabel>Last Name</StyledProfileEditLabel>
            <StyledProfileEditLabel>Phone number</StyledProfileEditLabel>
            <StyledProfileEditLabel>Email</StyledProfileEditLabel>
            <StyledProfileEditLabel>Birthday</StyledProfileEditLabel>
          </Box>
          <Box sx={{ width: '270px' }}>
            <StyledProfileTextField
              name="firstName"
              value={profileFormik.values.firstName}
              onChange={profileFormik.handleChange}
            />
            <StyledProfileTextField
              name="lastName"
              value={profileFormik.values.lastName}
              onChange={profileFormik.handleChange}
            />
            <StyledProfileTextField
              name="phone"
              value={formatPhoneNumber(profileFormik.values.phone)}
              onChange={profileFormik.handleChange}
              disabled
            />
            <StyledProfileTextField
              name="email"
              value={profileFormik.values.email}
              onChange={profileFormik.handleChange}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <MobileDatePicker
                inputFormat="MM/DD/YYYY"
                value={profileFormik.values.birthday}
                onChange={(value: Moment | null) => {
                  profileFormik.setFieldValue(
                    'birthday',
                    value ? value.format('MM/DD/YYYY') : ''
                  );
                }}
                renderInput={(params) => {
                  return (
                    <StyledProfileTextField
                      {...params}
                      placeholder="Birthday"
                    />
                  );
                }}
              />
            </LocalizationProvider>
          </Box>
        </UIFlexWrapBox>
      </UIFlexWrapBox>
    </Box>
  );
};
