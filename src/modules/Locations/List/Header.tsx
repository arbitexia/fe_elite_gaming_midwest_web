import { UIFlexSpaceBox, UIFlexWrapBox, UIImage } from '@/components/UI';
import { StyledSearchTextField } from './ui';
import { Divider, Typography, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useTranslation } from 'next-export-i18n';

interface LocationsHeaderProps {
  searchValue: string;
  onValueChange: (value: string) => void;
}

export const LocationsHeader = ({
  searchValue,
  onValueChange,
}: LocationsHeaderProps) => {
  const { t } = useTranslation();
  return (
    <>
      <UIFlexSpaceBox sx={{ mt: '35px' }}>
        <UIFlexWrapBox sx={{ alignItems: 'center', gap: '12px' }}>
          <UIImage src="images/icons/pin.svg" width={25} height={25} />
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '36px',
              lineHeight: '54px',
              alignItems: 'center',
              color: '#89C8C6',
            }}
          >
            {t('header.locations')}
          </Typography>
        </UIFlexWrapBox>
        <StyledSearchTextField
          placeholder={t('common.search')}
          size="small"
          sx={{
            '.MuiOutlinedInput-root': { width: '160px' },
            '.Mui-focused': { width: '250px' },
            input: { color: '#b7b7b7' },
          }}
          value={searchValue}
          onChange={(e) => onValueChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#B7B7B7' }} />
              </InputAdornment>
            ),
          }}
        />
      </UIFlexSpaceBox>
      <Divider
        sx={{
          mt: '20px',
          borderColor: 'rgba(137, 200, 198, 0.5)',
        }}
      />
    </>
  );
};
