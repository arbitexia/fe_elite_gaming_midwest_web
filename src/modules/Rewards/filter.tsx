import { UIFlexWrapBox, UIImage } from '@/components/UI';
import { usePoint } from '@/hooks';
import { Box, Typography } from '@mui/material';

const RewardsFilterBox = () => {
  const { onGetPointCount } = usePoint();
  return (
    <UIFlexWrapBox sx={{ mt: '26px', justifyContent: 'end' }}>
      <Box
        sx={{
          display: 'flex',
          color: '#FFFFFF',
          fontSize: '18px',
          fontWeight: '600px',
          lineHeight: '27px',
          gap: '12px',
        }}
      >
        <UIImage src={'images/icons/points-color.svg'} width={29} height={23} />
        <Typography>My Points : {onGetPointCount()}</Typography>
      </Box>
    </UIFlexWrapBox>
  );
};

export default RewardsFilterBox;
