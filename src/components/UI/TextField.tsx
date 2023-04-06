import { styled, TextField, MenuItem } from '@mui/material';

export const UIDefaultTextField = styled(TextField)({
  width: 380,
  background: 'rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(114, 239, 232, 0.2)',
  borderRadius: '12px',
  height: '68px',
  justifyContent: 'center',
  '.MuiTextField-root': {
    '&:focus-visible': {
      outline: 'none',
    },
  },
  '.MuiOutlinedInput-input': {
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '27px',
    border: 'none',
    outline: 'none',
    color: 'white',
    '::placeholder': {
      color: '#83A9A8',
    },
    '&:focus-visible': {
      border: 'none',
    },
  },

  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },

  '.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});

export type UISelectBoxProps = {
  items: { value: string; label: string }[];
  onSelectChange: (value: string) => void;
};

export const UISelectBox = ({ items, onSelectChange }: UISelectBoxProps) => {
  return (
    <UIDefaultTextField
      id="input-with-icon-textfield"
      placeholder="Search"
      select
      defaultValue={0}
      onChange={(e) => onSelectChange(e.target.value)}
      sx={{
        '.MuiOutlinedInput-input': {
          '::placeholder': { color: 'white' },
        },
        background: 'rgba(193, 191, 225, 0.26)',
        width: '190px',
        height: '42px',
        border: '1px solid rgba(137, 200, 198, 0.15)',
        borderRadius: '20px',
      }}
    >
      {items.map((item) => {
        return (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        );
      })}
    </UIDefaultTextField>
  );
};
