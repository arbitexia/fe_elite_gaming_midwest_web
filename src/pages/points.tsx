import { Typography, Box } from '@mui/material';
import {
  UIContainer,
  UIFlexCenterBox,
  UIFlexColumnBox,
  UIImage,
} from '@/components/UI';
import { DashboardLayout } from '@/layouts';
import { PointsMain } from '@/modules/Point';

const MyPoints = () => {
  return (
    <DashboardLayout title="My Points">
      <UIContainer sx={{ maxHeight: 'calc(100vh - 86px)' }}>
        <Box sx={{ padding: '100px' }}>
          <UIFlexCenterBox>
            <UIImage
              src="images/icons/points-color.svg"
              width={35}
              height={30}
            />
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '36px',
                lineHeight: '54px',
                alignItems: 'center',
                textAlign: 'center',
                color: '#89C8C6',
              }}
            >
              My Points
            </Typography>
          </UIFlexCenterBox>
          <UIFlexColumnBox
            sx={{
              mt: '100px',
              gap: '10vh',
              height: 'calc(100% - 122px)',
            }}
          >
            <PointsMain />
          </UIFlexColumnBox>
        </Box>
      </UIContainer>
    </DashboardLayout>
  );
};

export default MyPoints;
