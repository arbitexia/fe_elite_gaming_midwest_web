import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import {
  UIContainer,
  UIFlexCenterBox,
  UIFlexColumnBox,
  UIImage,
} from '@/components/UI';
import { DashboardLayout } from '@/layouts';
import { PointsContent } from '@/modules/Point';
import { usePoint, useAuth, useLocation } from '@/hooks';
import { GetPointParam, PointType, UserType } from '@/types';

const MyPoints = () => {
  const { points, onGetPoints } = usePoint();
  const { locations, onGetLocations } = useLocation();
  const { me } = useAuth({});
  const [userPoints, setUserPoint] = useState<PointType[]>();

  useEffect(() => {
    if (!me) return;
    const loadData = async () => {
      const param: GetPointParam = {
        userId: (me as UserType.User).id,
      };
      await onGetPoints(param);
      await onGetLocations({ filterBy: { search: '' } });
    };
    loadData();
  }, [me]);

  useEffect(() => {
    if (locations) {
      const filteredPoint = locations
        .filter(
          (location) =>
            !points.some(
              (point) => location.id === point.userLocation?.locationId
            )
        )
        ?.map((obj) => {
          return {
            id: 0,
            userLocationId: 0,
            userLocation: {
              id: 0,
              userId: Number((me as UserType.User)?.id) ?? 0,
              locationId: obj.id,
              location: obj,
              createdAt: obj.createdAt,
            },
            point: 0,
            createdAt: obj.createdAt,
          };
        });

      setUserPoint([...points, ...filteredPoint]);
    }
  }, [locations]);

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
            {userPoints && <PointsContent points={userPoints} />}
          </UIFlexColumnBox>
        </Box>
      </UIContainer>
    </DashboardLayout>
  );
};

export default MyPoints;
