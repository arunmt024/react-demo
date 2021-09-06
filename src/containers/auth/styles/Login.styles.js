import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
 import { colors ,appFonts} from '@themes';
import { normalizeImage } from '@themes/styleConfig'
const win = Dimensions.get('window');
const ratio = win.height/320; //541 is actual image width

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',

  },

  logoContainer: {
    width: normalizeImage(60),
    height: normalizeImage(60),
    borderRadius: 220 / 2,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: win.height / 16,
  },
  sampleText: {
    padding:16,
    fontSize: 16,
    color:colors.colorRed,
    //fontWeight:'800',
    fontSize:24,
    fontFamily:appFonts.InconsolataBold
  },
  
});
