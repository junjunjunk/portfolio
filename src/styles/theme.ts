// NOTE: 本来はDefaultThemeをベースとしたいがstyled-componentsのバグで応急処置をとっている
//       https://github.com/styled-components/styled-components-website/issues/392
// import { DefaultTheme } from 'styled-components';
// export const theme: DefaultTheme = {
import { createMuiTheme } from '@material-ui/core';

// styled-components
export const styledComponentsTheme = {
  color: {
    text: '#212121',
    background: '#EFF2F5',
    primary: '#1E81D0',
  },
};
export type StyledComponentsThemeType = typeof styledComponentsTheme;

// material-ui

export const primaryPalatte = {
  light: '#65AEFF',
  main: '#1E81D0',
  dark: '#00539F',
  contrastText: '#FFFFFF',
};

// --font-base: -apple-system,"BlinkMacSystemFont","Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif,"Segoe UI Emoji";
//     --font-code: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,monospace,"Segoe UI Emoji";
//     --font-alphabet-only: "Inter","BlinkMacSystemFont",Arial,sans-serif;

export const muiTheme = createMuiTheme({
  palette: {
    primary: primaryPalatte,
  },

  shape: {
    borderRadius: 0,
  },

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'ヒラギノ角ゴシック',
      '"ヒラギノ角ゴ ProN"',
      '"Hiragino Kaku Gothic ProN"',
      '"Hiragino Sans"',
      'Meiryo',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    fontSize: 12,
    h3: {
      fontSize: 32,
      fontFamily: [
        'ヒラギノ角ゴシック',
        '"ヒラギノ角ゴ ProN"',
        'Inter',
        '"Hiragino Kaku Gothic ProN"',
        '"Hiragino Sans"',
        'Roboto',
        '--apple-system',
      ].join(','),
    },
  },

  props: {
    MuiTextField: {
      variant: 'outlined',
      size: 'small',
      autoComplete: 'on',
      fullWidth: true,
    },
    MuiTypography: {
      variant: 'body2',
    },
  },
});