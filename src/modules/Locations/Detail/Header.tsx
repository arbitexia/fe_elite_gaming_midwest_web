import { UIFlexWrapBox, UIImage } from '@/components/UI';
import { Divider, Typography } from '@mui/material';

export const LocationDetailHeader = ({ name }: { name: string }) => {
  return (
    <>
      <UIFlexWrapBox sx={{ mt: '35px', alignItems: 'center', gap: '12px' }}>
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
          {name}
        </Typography>
      </UIFlexWrapBox>
      <Divider
        sx={{
          mt: '20px',
          borderColor: 'rgba(137, 200, 198, 0.5)',
        }}
      />
    </>
  );
};
