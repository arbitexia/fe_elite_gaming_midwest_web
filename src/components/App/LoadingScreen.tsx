import { Box } from '@mui/material';
import { CircularProgress } from '@mui/material';

const LoadingScreen = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingScreen;
