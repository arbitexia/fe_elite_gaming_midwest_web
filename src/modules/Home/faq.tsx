import React from 'react';
import { UIFlexWrapBox, UIContainer } from '@/components/UI';
import { Box, Typography } from '@mui/material';
import FaqItem from './faqItem';
import { faqData } from '@/_mock/Home';

const FaqContent = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '800px',
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(166.33% 97.17% at 85.18% 5.81%, rgba(0, 255, 148, 0.1) 0%, rgba(255, 255, 255, 0.002) 100%), radial-gradient(97.73% 173.91% at -3.15% 77.15%, rgba(14, 71, 112, 0.2) 0%, rgba(24, 77, 89, 0.2) 23.15%, rgba(17, 54, 81, 0) 100%), #001817',
          opacity: 0.4,
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%',
          background: 'black',
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          height: '150px',
        }}
      />
      <UIContainer>
        <Box sx={{ padding: '90px 165px' }}>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '36px',
              lineHeight: '80px',
              textAlign: 'center',
              color: '#FFFFFF',
              zIndex: 1,
            }}
          >
            Freqfently Asked Questions
          </Typography>
          <UIFlexWrapBox sx={{ mt: '70px', gap: '15px' }}>
            {faqData.map((item, index) => {
              return (
                <FaqItem
                  key={index}
                  expanded={expanded}
                  handleChange={handleChange}
                  title={item.title}
                  detail={item.detail}
                  index={index}
                />
              );
            })}
          </UIFlexWrapBox>
        </Box>
      </UIContainer>
    </Box>
  );
};

export default FaqContent;
