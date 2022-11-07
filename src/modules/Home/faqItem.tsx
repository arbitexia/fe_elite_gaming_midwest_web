import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

export interface FaqItemProps {
  expanded: string | false;
  handleChange: (panel: string, isExpanded: boolean) => void;
  title: string;
  detail: string;
  index: number;
}

const FaqItem = ({
  expanded,
  handleChange,
  title,
  detail,
  index,
}: FaqItemProps) => {
  return (
    <Accordion
      disableGutters
      expanded={expanded === `panel${index}`}
      onChange={(_, isExpanded) => handleChange(`panel${index}`, isExpanded)}
      sx={{
        width: '48%',
        background: 'rgba(137, 200, 198, 0.15)',
        borderRadius: '8px',
      }}
    >
      <AccordionSummary
        expandIcon={
          expanded === `panel${index}` ? (
            <RemoveIcon
              sx={{
                color: '#37D099',
              }}
            />
          ) : (
            <AddIcon
              sx={{
                color: 'rgba(137, 200, 198, 0.5)',
              }}
            />
          )
        }
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '20px',
            color: expanded === `panel${index}` ? '#FFFFFF' : '#89C8C6',
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Divider sx={{ borderColor: 'rgba(137, 200, 198, 0.15)' }} />
        <Typography
          sx={{
            mt: '15px',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '28px',
            color: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          {detail}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqItem;
