import { keyframes } from '@stitches/react';
import { css, styled } from '@styles/stitches.config';

export const TableRoot = styled('table', {
  boxSizing: 'border-box',
  maxWidth: '$full',
  minWidth: '$full',
  height: 'fit-content',
  borderCollapse: 'collapse',
  fontSize: '$m',
  position: 'relative',
});

export const Thead = styled('thead', {
  boxSizing: 'border-box',
});

export const Tbody = styled('tbody', {
  boxSizing: 'border-box',
  tr: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '$hoverGray',
    },
  },
});

export const Tr = styled('tr', {
  boxSizing: 'border-box',
  variants: {
    selected: {
      true: {
        backgroundColor: '$hoverGray',
      },
    },
  },
});

const shadow = keyframes({
  '0%': {
    boxShadow: 'none',
  },
  '5%': {
    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 10px 16px 2px',
  },
  '100%': {
    boxShadow: 'rgba(0, 0, 0, 0.08) 0px 10px 16px 2px',
  },
});

const cellStyles = css({
  variants: {
    sticky: {
      true: {
        position: 'sticky',
        left: 0,
        textAlign: 'left',

        '&::after': {
          content: '',
          display: 'block',
          top: 0,
          left: 0,
          width: '$full',
          height: '$full',
          background: 'white',
          position: 'absolute',
          zIndex: -1,
          ['animation-timeline']: 'scroll(inline)',
          animation: `auto linear 0s 1 normal none running ${shadow}`,
        },
      },
    },
  },
});

export const Th = styled('th', {
  boxSizing: 'border-box',
  verticalAlign: 'top',
  py: 0,
  textAlign: 'left',
  boxShadow: '$border',
  fontSize: '$sm',
  ...cellStyles,
});

export const Td = styled('td', {
  boxSizing: 'border-box',
  boxShadow: '$border',
  verticalAlign: 'top',
  py: 0,
  ...cellStyles,
});
