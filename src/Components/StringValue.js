import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Style/styles.js';
import disabledStyles from '../Style/disabledStyles.js';

export default class DatePicker extends React.Component{

    render() {
        const {title, description, initialValue, blockIcon, iconColor, blockAction} = this.props;
          return (
            <TouchableOpacity style = {styles.settingComponent} onPress = {blockAction}>
              <Ionicons name={blockIcon} size={30} color={iconColor} />
              <View style={styles.settingBlock}>
                <View style={styles.settingFirstLine}>
                  <Text
                    style={disabledStyles.settingTitle}
                    numberOfLines={1}>
                      {title}
                  </Text>
                  <View
                    style={styles.settingValue}>
                      {initialValue}
                  </View>
                </View>
                <Text
                  style={disabledStyles.settingSecondLine}
                  numberOfLines={2}
                >
                  {description}
                </Text>
              </View>
            </TouchableOpacity>
          );
    }
}

DatePicker.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    blockIcon: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    initialValue: PropTypes.string.isRequired,
    blockAction: PropTypes.func.isRequired,
  };
