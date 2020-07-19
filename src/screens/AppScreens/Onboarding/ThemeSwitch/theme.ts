import {ThemeColors} from "react-navigation";

export const themes = {
    RED: 'linear-gradient(315deg, #FB5151 0%, #DE5959 0%, #E02020 100%)',
    GREEN: 'linear-gradient(138.99deg, #9BD419 0%, #D1F188 100%)',
    BLUE: 'linear-gradient(135deg, #2B69EE 0%, #789EEF 100%)',
    ORANGE: 'linear-gradient(137.55deg, #F58015 0%, #FFA049 100%)',
    PURPLE: 'linear-gradient(144.26deg, #9161E1 0%, #BCA2E7 100%)',
    YELLOW: 'linear-gradient(144.26deg, #FDD12B 0%, #FED693 100%)',
};

export const themeColors = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
    ORANGE: 'orange',
    PURPLE: 'purple',
    YELLOW: 'yellow',
};

const themeAssets = {
    THEME_YELLOW: 'theme-yellow',
    THEME_RED: 'theme-red',
    THEME_BLUE: 'theme-blue',
    THEME_ORANGE: 'theme-orange',
    THEME_PURPLE: 'theme-purple',
    THEME_GREEN: 'theme-green',
};

export function getImagePath(selectedTheme: string, fileName: string) {
    switch (selectedTheme) {
        case themes.RED:
            return `${themeAssets.THEME_RED}/${fileName}`;
        case themes.GREEN:
            return `${themeAssets.THEME_GREEN}/${fileName}`;
        case themes.BLUE:
            return `${themeAssets.THEME_BLUE}/${fileName}`;
        case themes.ORANGE:
            return `${themeAssets.THEME_ORANGE}/${fileName}`;
        case themes.PURPLE:
            return `${themeAssets.THEME_PURPLE}/${fileName}`;
        case themes.YELLOW:
            return `${themeAssets.THEME_YELLOW}/${fileName}`;
        default:
            break;
    }
}

export interface IThemeStyles {
    name: string,
    themeColor: string,
    buttonBackRoundColor: string,
    tertiaryColor: string,
    fontColor: string
}

export const themeStyles: IThemeStyles[] = [
    {
        name: themeColors.YELLOW,
        themeColor: '#FDD12B',
        fontColor: '#424242',
        buttonBackRoundColor: '#F58015',
        tertiaryColor: '#9161E1'
    },
    {
        name: themeColors.PURPLE,
        themeColor: 'purple',
        fontColor: '#FFFFFF',
        buttonBackRoundColor: '#9BD419',
        tertiaryColor: '#FDD12B'
    }, {
        name: themeColors.ORANGE,
        themeColor: 'orange',
        fontColor: '#424242',
        buttonBackRoundColor: '#FDD12B',
        tertiaryColor: '#E02020'
    }, {
        name: themeColors.RED,
        themeColor: 'red',
        fontColor: '#FFFFFF',
        buttonBackRoundColor: '#FDD12B',
        tertiaryColor: '#9BD419'
    }, {
        name: themeColors.GREEN,
        themeColor: '#9BD419',
        fontColor: '#424242',
        buttonBackRoundColor: '#2B69EE',
        tertiaryColor: '#9161E1'
    },
    {
        name: themeColors.BLUE,
        themeColor: '#2B69EE',
        fontColor: '#FFFFFF',
        buttonBackRoundColor: '#FDD12B',
        tertiaryColor: '#9BD419'
    },
];

export function getSelectedTheme(selectedColor: string): IThemeStyles {
    let selectedTheme = {
        name: themeColors.YELLOW,
        themeColor: 'linear-gradient(144.26deg, #FDD12B 0%, #FED693 100%)',
        fontColor: '#424242',
        buttonBackRoundColor: '#F58015',
        tertiaryColor: '#9161E1'
    };
    themeStyles.map((theme: IThemeStyles) => {
        if (theme.name === selectedColor) {
            selectedTheme = theme;
        }
    })

    return selectedTheme;
}
