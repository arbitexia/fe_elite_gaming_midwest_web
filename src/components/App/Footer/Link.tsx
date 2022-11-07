import Link from 'next/link';
import { Typography } from '@mui/material';

export interface FooterLinkProps {
  label: string;
  href: string;
}

const FooterLink = ({ label, href }: FooterLinkProps) => {
  return (
    <Typography
      sx={{
        a: {
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '38px',
          color: 'rgba(137, 200, 198, 0.5)',
          textDecoration: 'none',
        },
      }}
    >
      <Link href={href}>{label}</Link>
    </Typography>
  );
};

export default FooterLink;
