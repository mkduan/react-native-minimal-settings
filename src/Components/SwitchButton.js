import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, Switch, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Style/styles.js';
import disabledStyles from '../Style/disabledStyles.js';

let {width, height } = Dimensions.get('window');

export default class SwitchButton extends React.Component{
    render() {
        const {title, description, toggleSwitch, switchValue, blockIcon, iconColor} = this.props;

        if (this.props.isDisabled) {
          return (
            <View style = {styles.settingComponent}>
              <Ionicons name={blockIcon} size={30} color={'rgba(128, 128, 128, 0.5)'} />
              <View style={styles.settingBlock}>
                <View style={styles.settingFirstLine}>
                  <Text
                    style={disabledStyles.settingTitle}
                    numberOfLines={1}>
                      {title}
                  </Text>
                  <View
                    style={styles.settingValue}>
                      <Switch
                        onValueChange = {toggleSwitch}
                        value = {switchValue}
                        disabled = {this.props.isDisabled}
                      />
                  </View>
                </View>
                <Text
                  style={disabledStyles.settingSecondLine}
                  numberOfLines={2}
                >
                  {description}
                </Text>
              </View>
            </View>
          );
        }

        return (
          <View style = {styles.settingComponent}>
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
                    <Switch
                      onValueChange = {toggleSwitch}
                      value = {switchValue}
                    />
                </View>
              </View>
            <Text
              style={styles.settingSecondLine}
              numberOfLines={2}
            >
              {description}
            </Text>
          </View>
          </View>
        );
    }
}

SwitchButton.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    toggleSwitch: PropTypes.func.isRequired,
    switchValue: PropTypes.bool.isRequired,
    blockIcon: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
  };
