import { UIFlexWrapBox, UIImage, UIContainer } from '@/components/UI';
import { Box, Typography } from '@mui/material';
import {
  StyledContactTextField,
  StyledContactTextArea,
  StyledContactButton,
} from './ui';

const ContactContent = () => {
  return (
    <UIContainer>
      <Box
        sx={{
          padding: '60px 165px',
          width: '100%',
          height: '700px',
        }}
      >
        <UIFlexWrapBox sx={{ gap: 0 }}>
          <Box width="50%">
            <UIImage src={'images/contact.svg'} width={445} height={445} />
          </Box>
          <Box width="50%">
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '36px',
                lineHeight: '50px',
                color: '#FFFFFF',
              }}
            >
              More questions on Elite’s exclusive rewards program?
            </Typography>
            <UIFlexWrapBox sx={{ gap: '15px', my: '50px' }}>
              <StyledContactTextField placeholder="Your Email" />
              <StyledContactTextField placeholder="Name" />
              <StyledContactTextArea
                placeholder="Description"
                multiline
                rows={5}
              />
            </UIFlexWrapBox>
            <StyledContactButton>Get in Touch</StyledContactButton>
          </Box>
        </UIFlexWrapBox>
      </Box>
    </UIContainer>
  );
};

export default ContactContent;
