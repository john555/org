import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  html: {
    WebkitTextSizeAdjust: '100%',
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    lineHeight: 1.5,
    tabSize: 4,
    scrollBehavior: 'smooth',
  },
  body: { fontFamily: 'inherit', lineHeight: 'inherit', margin: '0' },
  'h1, h2, p, pre': { margin: '0' },
  '*, ::before, ::after': {
    boxSizing: 'border-box',
    borderWidth: '0',
    borderStyle: 'solid',
    borderColor: 'currentColor',
  },
  'h1, h2': { fontSize: 'inherit', fontWeight: 'inherit' },
  a: { color: 'inherit', textDecoration: 'inherit' },
  pre: {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,     Liberation Mono, Courier New, monospace',
    backgroundColor: 'rgba(55, 65, 81, 1)',
    borderRadius: '0.25rem',
    color: 'rgba(229, 231, 235, 1)',
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
