import { useState } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  SxProps,
  Typography,
} from '@mui/material';
import { UIImage } from '@/components/UI';
import { languageMenuItems } from '@/constants';
import { useSelectedLanguage, LanguageSwitcher } from 'next-export-i18n';
import { Theme } from '@emotion/react';

type AppLanguageSelectorProps = {
  sx?: SxProps<Theme>;
};
const AppLanguageSelector = ({ sx }: AppLanguageSelectorProps) => {
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(
    null
  );
  const { lang } = useSelectedLanguage();
  const isLanguageMenuOpen = Boolean(anchorElLanguage);
  console.log(sx);
  return (
    <Box sx={{ mt: '4px', mx: '24px', ...sx }}>
      <Button
        disableElevation
        onClick={(e) => {
          setAnchorElLanguage(e.currentTarget);
        }}
        startIcon={
          <UIImage src={`images/icons/${lang}.svg`} width={24} height={24} />
        }
      >
        <Typography
          sx={{
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '21px',
            color: '#83A9A8',
            textTransform: 'none',
          }}
        >
          {lang === 'en' ? 'English' : 'Español'}
        </Typography>
      </Button>
      <Menu
        PaperProps={{
          elevation: 0,
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        anchorEl={anchorElLanguage}
        open={isLanguageMenuOpen}
        onClose={() => {
          setAnchorElLanguage(null);
        }}
        onClick={() => {
          setAnchorElLanguage(null);
        }}
      >
        {languageMenuItems.map((languageItem, index) => (
          <LanguageSwitcher key={index} lang={languageItem.key}>
            <MenuItem>
              <Box sx={{ borderRadius: '50%' }}>
                <UIImage src={languageItem.icon} width={24} height={24} />
              </Box>
              <Typography
                sx={{
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '21px',
                  color: '#83A9A8',
                  textTransform: 'none',
                  marginLeft: '8px',
                }}
              >
                {languageItem.text}
              </Typography>
            </MenuItem>
          </LanguageSwitcher>
        ))}
      </Menu>
    </Box>
  );
};

export default AppLanguageSelector;
