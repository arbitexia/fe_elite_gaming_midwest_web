import { UIFlexSpaceBox, UIFlexWrapBox, UIImage } from '@/components/UI';
import { StyledSearchTextField } from './ui';
import { Divider, Typography, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export const LocationsHeader = () => {
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
            Locations
          </Typography>
        </UIFlexWrapBox>
        <StyledSearchTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#B7B7B7' }} />
              </InputAdornment>
            ),
          }}
          placeholder="Search"
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
