import type { NextPage } from 'next';
import { Box } from '@mui/material';
import { HomeLayout } from '@/layouts';
import {
  HeroContent,
  LearnContent,
  CheckInContent,
  LocationContent,
  FaqContent,
  ContactContent,
} from '@/modules/Home';

const Home: NextPage = () => {
  return (
    <HomeLayout bg={'black'}>
      <Box>
        <HeroContent />
        <LearnContent />
        <CheckInContent />
        <LocationContent />
        <FaqContent />
        <ContactContent />
      </Box>
    </HomeLayout>
  );
};

export default Home;
