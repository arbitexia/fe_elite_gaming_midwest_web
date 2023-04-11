import { styled, Button, SvgIcon, Typography } from '@mui/material';
// type UINavButtonProp = {
//   btnType: string;
// };

export const UIDefaultButton = styled(Button)({
  width: '260px',
  height: '68px',
  background: 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
  boxShadow: '0px 6.3px 8.19px rgba(0, 0, 0, 0.21)',
  borderRadius: '12px',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '30px',
  textTransform: 'none',
  color: '#FFFFFF',
});

export const UIHoverButton = styled(Button)({
  background: 'rgba(137, 200, 198, 0.2)',
  color: '#83A9A8',
  border: '1px solid rgba(191, 215, 225, 0.05)',
  borderRadius: '20px',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  textTransform: 'none',
  '&:hover': {
    color: '#FFFFFF',
    background: 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
  },
  '&:disabled': {
    color: '#83A9A8',
    background: 'rgba(137, 200, 198, 0.2)',
  },
});

type UIActionButtonProps = {
  handleClick(event: React.MouseEvent<HTMLButtonElement>): void;
  icon: React.ReactNode | React.ReactNode[];
  color: string;
  title?: string;
  size?: number;
};

export const UIActionButton = ({
  handleClick,
  icon,
  color,
  title,
  size,
}: UIActionButtonProps) => {
  return (
    <Button onClick={handleClick} sx={{ marginLeft: 3, textTransform: 'none' }}>
      <SvgIcon
        sx={{ color: { color }, width: size ?? '17px', height: size ?? '17px' }}
      >
        {icon}
      </SvgIcon>
      {title && (
        <Typography
          sx={{
            color: { color },
            fontSize: '13px',
            fontWeight: 700,
            marginLeft: '8px',
            lineHeight: '14px',
          }}
        >
          {title}
        </Typography>
      )}
    </Button>
  );
};
