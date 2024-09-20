export const colors = {
  backgroundColor: '#fefbfa',
  backgroundColorLight: '#fefbfa',
  backgroundColorDark: '#000000',
  textThemeColor: '#000000',
  textThemeColorLight: '#000000',
  textThemeColorDark: '#fefbfa',
};

export const setThemeColors = (theme: string = 'light') => {
  switch (theme) {
    case 'light':
      colors.backgroundColor = colors.backgroundColorLight;
      colors.textThemeColor = colors.textThemeColorLight;

      break;
    case 'dark':
      colors.backgroundColor = colors.backgroundColorDark;
      colors.textThemeColor = colors.textThemeColorDark;

      break;

    default:
      colors.backgroundColor = colors.backgroundColorLight;
      colors.textThemeColor = colors.textThemeColorLight;
      break;
  }
};
