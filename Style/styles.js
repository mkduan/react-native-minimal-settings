'use strict';
import { StyleSheet, Dimensions } from 'react-native';


let { width, height } = Dimensions.get('window');

var styles = StyleSheet.create({
    settingBlock: {
      height: 60,
      width: width-60,
      marginLeft:10,
      flexDirection: 'column',
      marginTop: 10,
    },
    settingFirstLine: {
      height: 20,
      width: width-60,
      flexDirection: 'row'
    },
    settingTitle: {
      height: 20,
      width: (width-60)*(4/5),
      fontSize: 17,
      fontWeight: 'normal'
    },
    settingValue: {
      height: 20,
      width: (width-60)*(1/5),
    },
    settingSecondLine: {
      height:40,
      marginTop:2,
      width:width-60,
    },
    settingHeader: {
      height: 20,
      width: width,
      marginTop: 10,
    },
    settingHeaderTitle: {
      height: 20,
      width: width-10,
      fontSize: 17,
      fontWeight: 'normal',
      marginLeft: 10,      
    },
    settingLine: {
      marginLeft: 10,
      marginRight: 10,
      width: width-20, 
      height: 2, 
      backgroundColor: 'rgba(128, 128, 128, 0.5)',
      borderRadius:10,
    },
    settingComponent: {
      height: 60, 
      width: width-20, 
      marginLeft:10, 
      marginRight:10, 
      flexDirection: 'row', 
      alignItems: 'center'
    },
});
export default styles;
