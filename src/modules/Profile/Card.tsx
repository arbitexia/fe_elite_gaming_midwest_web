import { useRouter } from 'next/router';
import { UIFlexWrapBox, UIFlexCenterBox } from '@/components/UI';
import { Box, Avatar } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import {
  StyledProfileValue,
  StyledProfileLabel,
  StyledProfileButton,
} from './ui';
import { UserType } from '@/types';
import { format } from 'date-fns';
import { formatPhoneNumber } from '@/libs/data-helper';
import { useSelectedLanguage, useTranslation } from 'next-export-i18n';

type ProfileCardProps = {
  profile: UserType.User;
};
export const ProfileCard = ({ profile }: ProfileCardProps) => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const handleEdit = () => {
    router.push({
      pathname: '/profile',
      query: {
        ...(lang === 'es' && { lang }),
        type: 'edit',
      },
    });
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
        {t('common.edit')}
      </StyledProfileButton>
      <UIFlexCenterBox sx={{ width: '40%', height: '100%' }}>
        <Box sx={{ height: '350px' }}>
          {profile?.avatar?.url ? (
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
              src={profile.avatar?.url}
            />
          ) : (
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
          )}
        </Box>
      </UIFlexCenterBox>
      <UIFlexWrapBox sx={{ gap: '80px', height: '100%', alignItems: 'center' }}>
        <Box>
          <StyledProfileLabel>{t('common.full-name')}</StyledProfileLabel>
          <StyledProfileLabel>{t('common.phone-number')}</StyledProfileLabel>
          <StyledProfileLabel>{t('common.email')}</StyledProfileLabel>
          <StyledProfileLabel>{t('common.birthday')}</StyledProfileLabel>
        </Box>
        <Box>
          <StyledProfileValue>{`${profile?.firstName ?? ''} ${
            profile?.lastName ?? ''
          }`}</StyledProfileValue>
          <StyledProfileValue>
            {formatPhoneNumber(profile.phone)}
          </StyledProfileValue>
          <StyledProfileValue>{profile.email}</StyledProfileValue>
          {/* <StyledProfileValue>{profile.firstLogin}</StyledProfileValue> */}
          <StyledProfileValue>
            {format(new Date(profile.birthday), 'yyyy-MM-dd')}
          </StyledProfileValue>
        </Box>
      </UIFlexWrapBox>
    </UIFlexWrapBox>
  );
};
