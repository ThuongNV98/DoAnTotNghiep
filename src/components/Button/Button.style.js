import {StyleSheet} from 'react-native';
import Styles from '../../assets/styles';
const styles = StyleSheet.create({
  btnComon: {
    backgroundColor: Styles.Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: Styles.Size.rW300,
    height: Styles.Size.rH50,
  },
  txtComon: {
    fontSize: Styles.FontSize.fS18,
    fontWeight: Styles.FontSize.FW_BOLD,
    color: Styles.Colors.WHITE,
  },
  btnLarge: {},
  btnTxtLarge: {},
  btnMedium: {},
  btnTxtMedium: {},
  btnSmall: {},
  btnTxtSmall: {},
});

export default styles;
