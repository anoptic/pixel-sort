import { styled } from "../../../stitches.config";
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as LabelPrimitive from '@radix-ui/react-label';

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: '$secondary',
  width: 18,
  height: 18,
  borderRadius: '50%',
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: '$primary',
  },
});

export const RadioGroup = RadioGroupPrimitive.Root;
export const RadioGroupRadio = StyledRadio;
export const RadioGroupIndicator = StyledIndicator;

const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: 16,
  marginLeft: 8,
});

export const Label = StyledLabel;