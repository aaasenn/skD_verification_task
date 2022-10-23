interface ITheme {
  colors: {
    [key: string]: {
      [key: string]: string
    }
  },
}

export const theme: ITheme = {
  colors: {
    primary: {
      main: '#0086A8',
      darker: '#007693',
      dark: '#00657E',
      font: '#FFFFFF',
    },
    disabled: {
      main: '#E3E3E3',
      font: '#828282'
    },
    danger: {
      main: '#EB5E55',
    },
    global: {
      white: '#FFFFFF',
      fontBlack: '#353238',
    }
  },
}