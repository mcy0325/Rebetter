export const palette = {
  Green: '#34C79B',
  GreenLight: '#D6F4EB',
  GreenBright: '#00EDC3',

  Black: '#0A0909',

  Red: '#EC7669',
  RedBright: '#FF6C6C',

  Yellow: '#FFC045',

  Gray: '#9B9B9B',
  GrayLight: '#F8F8F6',

  White: '#FFFFFF',
} as const;

export const colors = {
  palette,

  text: palette.Black,

  background: palette.White,
};
