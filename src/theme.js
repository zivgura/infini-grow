import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    colors: {
        gray: '#7E7E7E',
        lightGray: '#99A4C2',
        grayBlue: '#707EA7',
        black: '#000000',
        deepBlue: '#182033',
        blue: '#222A41',
        darkBlue: '#2A3558',
        red: '#EE2032',
        lightRed: '#FDE8EA',
        white: '#fff'
    },
    palette: {
        primary: {
            main: '#FAFAFC'
        }
    },
    backgrounds: {
        main: '#B2BBD520',
        secondary: '#F5F6FA',
    },
    borders: {
        main: '#B2BBD580'
    },
    shadows: {
        main: '0px 1px 2px 0px #E6E8F0'
    },
    gradients: {
        main: 'linear-gradient(360deg, #FAFAFC 0%, #FFFFFF 100%)',
        secondary: 'linear-gradient(90deg, #ffffff 70%, #f0f0f0 100%)'
    }
})

export const getInputStyle = (color) => ({
    color: color,
    fontFamily: '"Avenir Next",serif',
    fontWeight: 500
})
