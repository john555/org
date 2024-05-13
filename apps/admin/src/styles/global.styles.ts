import { globalCss } from '@styles/stitches.config';

export const globalStyles = globalCss({
  html: {
    WebkitTextSizeAdjust: '100%',
    fontFamily: '$sans',
    lineHeight: 1.5,
    tabSize: 4,
    scrollBehavior: 'smooth',
  },
  body: { fontFamily: 'inherit', lineHeight: 'inherit', margin: '0' },
  'h1, h2, h3, p, pre': { margin: '0' },
  '*, ::before, ::after': {
    boxSizing: 'border-box',
    borderWidth: '0',
    borderStyle: 'solid',
    borderColor: 'currentColor',
  },
  'h1, h2, h3': { fontSize: 'inherit', fontWeight: 'inherit' },
  a: { color: 'inherit', textDecoration: 'inherit' },
  pre: {
    fontFamily: '$mono',
    borderRadius: '0.25rem',
    overflow: 'scroll',
    padding: '0.5rem 0.75rem',
  },
  svg: {
    display: 'block',
    verticalAlign: 'middle',
    shapeRendering: 'auto',
    textRendering: 'optimizeLegibility',
  },
});
