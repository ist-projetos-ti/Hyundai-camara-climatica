import { keyframes } from 'styled-components';

const themeDefaults = {
  colors: {
    primary: '#0B98A3',
    darkPrimary: '#0A8C8C',
    secondary: '#0D9F64',
    lightSecondary: '#AFD198',

    graphTemp1: '#5537BB',
    graphTemp2: '#606EED',
    graphHumity1: '#4CBBA0',
    graphHumity2: '#278288',

    shadedOverlay: '#094A4FB3',
    shadeMobile: '#0C7C85D9',

    black: '#000000',
    white: '#FFFFFF',
    warmGray: '#DED7D6',
    warmGrayBackground: '#F2EFEF',
    warmGrayMinus1: '#757575',
    warmGrayMinus2: '#968282',
    warmGrayMinus3: '#4D3938',
    lightGray: '#E6E6E6',
    gray: '#8B8B8B',
    darkGray: '#3A3B3B',
    softBlue: '#BDCDDA',
    softBlueBackground: '#EFF3F6',
    softBluePlus1: '#DDE7ED',
    softBlueMinus1: '#56729F',
    softBlueMinus2: '#343B55',

    sageGreen: '#BFCFBE',
    sageGreenBackground: '#F6F8F6',
    sageGreenPlus1: '#E5ECE5',
    sageGreenMinus1: '#53846A',
    sageGreenMinus2: '#1D4941',
    green: '#4DE5A8',
    petroleumGreen: '#0A8C8C',

    background: '#ffffff',
    backgroundPrimary: '#2A9DF4',
    backgroundDisabled: '#F8F8F8',
    backgroundDisabledHighlight: '#0FFFFF',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#6F778230',

    according: '#53846A',
    alert: '#FFA000',
    danger: '#F64B4B',
    lightDanger: '#FF204E',
    inactive: '#D0D0D0D0',

    loginInputColor: '#393939',
    loginPlaceholderColor: '#9D9D9D',
    addButton: '#0D9F64',
  },
  shadows: {
    outer: '2px 2px 2px 0px #00000026',
    inner: 'inset 2px 2px 2px 0px #00000026',
  },
  filters: {
    hover: 'brightness(0.95)',
    active: 'brightness(0.6)',
    disabled: 'brightness(1.2)',
    disabledChart: 'grayscale(1)',
  },
  fontFamily: "'Roboto', sans-serif",
  ChakraPetch: "'Chakra Petch', sans-serif",
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  },
  animations: {
    appearFromBottom: keyframes`
    from {
      opacity: 0;
      transform: translateY(100px)
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  `,
  },
};

export default themeDefaults;
