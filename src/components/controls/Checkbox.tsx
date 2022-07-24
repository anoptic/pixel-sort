import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: '$c5',
  width: 18,
  height: 18,
  marginRight: 8,
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 0 0 1px ${blackA.blackA8}`,
  // borderColor: blackA.blackA12,
  // '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: 'black',
});

export const Checkbox = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;

const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: 16,
})

export const Label = StyledLabel;