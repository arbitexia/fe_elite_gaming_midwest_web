import React from 'react';
import { IMaskInput } from 'react-imask';
import { PhoneMaskProps } from '@/types/object';

export const PhoneMask = React.forwardRef<HTMLElement, PhoneMaskProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref as any}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);
