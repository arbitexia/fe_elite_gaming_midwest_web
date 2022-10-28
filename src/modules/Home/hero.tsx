import { UIImage } from '@/components/UI';
import { Box, Typography, Button } from '@mui/material';

const HeroContent = () => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(image.png), url(IrM.png)',
      }}
    ></Box>
  );
};

export default HeroContent;
