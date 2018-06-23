import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Style/styles.js';

export default class StringCategory extends React.Component{

    render() {
        const {title, description, initialValue, blockIcon, iconColor, blockAction} = this.props;
          return (
            <TouchableOpacity style = {styles.settingComponent} onPress = {blockAction}>
              <Ionicons name={blockIcon} size={30} color={iconColor} />
              <View style={styles.settingBlock}>
                <View style={styles.settingFirstLine}>
                  <Text
                    style={styles.settingTitle}
                    numberOfLines={1}>
                      {title}
                  </Text>
                  <View
                    style={styles.settingValue}>
                      <Text>
                        {initialValue}
                      </Text>
                  </View>
                </View>
                <Text
                  style={styles.settingSecondLine}
                  numberOfLines={2}
                >
                  {description}
                </Text>
              </View>
            </TouchableOpacity>
          );
    }
}

StringCategory.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    blockIcon: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    initialValue: PropTypes.any.isRequired,
    blockAction: PropTypes.func.isRequired,
  };
