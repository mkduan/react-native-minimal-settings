import React from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

let { width } = Dimensions.get('window');

export default DividingLine = (props) => {
   return (
      <View style={{marginLeft: 10, marginRight: 10, width: width-20, height: 2, backgroundColor: props.lineColor, borderRadius:10,}} />
   );
}

DividingLine.propTypes = {
  lineColor: PropTypes.string.isRequired,
}
