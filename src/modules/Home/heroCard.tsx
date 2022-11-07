import { Typography } from '@mui/material';
import { UIFlexCenterBox, UIFlexWrapBox, UIImage } from '@/components/UI';

export type HeroCardProps = {
  data: {
    image: string;
    title: string;
    description: string;
  };
};

const HeroCard = ({ data }: HeroCardProps) => {
  return (
    <UIFlexWrapBox
      sx={{
        padding: 3,
        width: '350px',
        height: '370px',
        background: 'rgba(72, 124, 118, 0.14)',
        border: '2px solid rgba(137, 200, 198, 0.05)',
        backdropFilter: 'blur(20px)',
        borderRadius: '30px',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 0,
      }}
    >
      <UIFlexCenterBox
        sx={{
          mt: '25px',
          width: '104px',
          height: '104px',
          background: 'rgba(137, 200, 198, 0.1)',
          borderRadius: '30px',
        }}
      >
        <UIImage src={data.image} width={44} height={44} />
      </UIFlexCenterBox>
      <Typography
        sx={{
          mt: '40px',
          fontWeight: '600',
          fontSize: '20px',
          lineHeight: '30px',
          color: '#FFFFFF',
        }}
      >
        {data.title}
      </Typography>
      <Typography
        sx={{
          mt: '25px',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '28px',
          textAlign: 'center',
          color: 'rgba(137, 200, 198, 0.8)',
        }}
      >
        {data.description}
      </Typography>
    </UIFlexWrapBox>
  );
};

export default HeroCard;
