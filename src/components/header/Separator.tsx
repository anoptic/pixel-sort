import { styled } from '../../../stitches.config';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$secondary',
  margin: '0 4px',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: 24, width: 1 },
});

export const Separator = StyledSeparator;