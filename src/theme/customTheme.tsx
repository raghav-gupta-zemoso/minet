import {
    createTheme,
    PaletteColorOptions,
    PaletteColor,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface PaletteOptions {
        alpha700: PaletteColorOptions
        alpha500: PaletteColorOptions
        gammagreywhite: PaletteColorOptions
        gamma500: PaletteColorOptions
        gamma300: PaletteColorOptions
        gamma100: PaletteColorOptions
        
    }

    interface Palette {
        alpha700: PaletteColor
        alpha500: PaletteColor
        gammagreywhite: PaletteColor
        gamma500: PaletteColor
        gamma300: PaletteColor
        gamma100: PaletteColor
        
    }

    interface TypographyVariants {
        caption1: React.CSSProperties
        caption2: React.CSSProperties
        alphah6:React.CSSProperties
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        caption1?: React.CSSProperties
        caption2?: React.CSSProperties
        alphah6?:React.CSSProperties
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        alpha700: true
        alpha500: true
        gammagreywhite:true
        gamma500:true
        gamma300:true
        gamma100:true
        
    }
    interface ButtonClasses {
        textText1: string
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        caption1: true
        caption2: true
        alphah6:true;
    }
}

declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
        alpha600: true
        alpha500: true
        gammagreywhite:true
        gamma300:true
        gamma500:true
        gamma100:true
       
    }
}

const theme = createTheme({
    palette: {
        alpha700: {
            main: '#002EB7',
        },
        alpha500: {
            main: '#0052FF',
        },
        gammagreywhite:{
            main: '#FFFFFF',
        },
        gamma500:{
            main:'#4B4B60',
        },
        gamma300:{
            main:'#FFA74F',
        },
        gamma100:{
            main:'#E8E8F7'
        }  
    },

    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        h1: {
            fontSize: '32px',
            lineHeight: '48px',
            fontWeight: '600',
            textTransform: 'none',
        },
        h2: {
            fontSize: '20px',
            lineHeight: '30px',
            fontWeight: '500',
            textTransform: 'none',
        },
        subtitle1: {
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: '500',
            textTransform: 'none',
        },
        subtitle2: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '500',
            textTransform: 'none',
        },
        alphah6:{
            fontWeight:'400px',
            lineHeight:'34px',
            fontSize:'24px'

        },
        body1: {
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: '500',
            textTransform: 'none',
        },
        body2: {
            fontSize: '14px',
            lineHeight: '22px',
            fontWeight: '500',
            textTransform: 'none',
        },
        caption1: {
            fontFamily: ['Montserrat', 'sans-serif','Graphik'].join(','),
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: '500',
            textTransform: 'none',
        },
        caption2: {
            fontFamily: ['Montserrat', 'sans-serif','Graphik'].join(','),
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '500',
            textTransform: 'none',
        },
    },
    
})


    


export default theme

