import type { NextPage } from 'next';
import { Box, Typography } from '@mui/material';
import { HomeLayout } from '@/layouts';

const Home: NextPage = () => {
  return (
    <HomeLayout bg={'black'}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h3">Main Web View</Typography>
      </Box>
    </HomeLayout>
  );
};

export default Home;
