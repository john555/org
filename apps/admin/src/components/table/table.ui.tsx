import { styled } from '@styles/stitches.config';

export const TableRoot = styled('table', {
  boxSizing: 'border-box',
  maxWidth: '$full',
  width: '$full',
  height: 'fit-content',
  borderCollapse: 'collapse',
  fontSize: '$m',
});

export const Thead = styled('thead', {
  boxSizing: 'border-box',
});

export const Tbody = styled('tbody', {
  boxSizing: 'border-box',
});

export const Tr = styled('tr', {
  boxSizing: 'border-box',
});

export const Th = styled('th', {
  boxSizing: 'border-box',
  verticalAlign: 'top',
  py: '$2',
  textAlign: 'left',
  boxShadow: '$border',
  fontSize: '$sm',
});

export const Td = styled('td', {
  boxSizing: 'border-box',
  boxShadow: '$border',
  verticalAlign: 'top',
  py: '$2',
});
