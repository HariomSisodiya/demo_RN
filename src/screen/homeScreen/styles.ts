import {StyleSheet} from 'react-native';
import {colors} from '../../utils/asyncStorage/constants/colors';

export const homeScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headingText: {
      color: colors.textThemeColor,
      fontSize: 22,
      fontWeight: '800',
    },
  });
