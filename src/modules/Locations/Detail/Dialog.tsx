import { Dialog, IconButton, DialogContent } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { RewardDetailCard } from '@/modules/Rewards/Detail/DetailCard';
import { RewardItemType } from '@/types';

export interface RewardDetailDialogProps {
  open: boolean;
  onClose: () => void;
  item: RewardItemType;
}

export const RewardDetailDialog = ({
  open,
  onClose,
  item,
}: RewardDetailDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '.MuiDialog-paper': {
          // background: '#000',
          padding: '0px',
          maxWidth: '1100px',
          maxHeight: '500px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '2px solid rgba(137, 200, 198, 0.2)',
          overflow: 'hidden',
          backdropFilter: 'blur(20px)',
          borderRadius: '30px',
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ width: '1100px', height: '500px' }}>
        <RewardDetailCard rewardItem={item} />
      </DialogContent>
    </Dialog>
  );
};
