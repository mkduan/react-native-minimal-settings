import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, StatusBar } from 'react-native';

let statusBarHeight =  StatusBar.currentHeight;

export default class SettingTitle extends React.Component{
    render() {
      const {title, titleBackgroundColor, titleColor} = this.props;

      return (<View style = {{ paddingTop: statusBarHeight+10, backgroundColor: titleBackgroundColor, justifyContent: 'flex-end'}}>
        <Text style= {{left: 20, bottom: 10, color: titleColor, fontSize: 30}}>
          {title}
        </Text>
      </View>
      );
    }
  }

    SettingTitle.propTypes = {
      title: PropTypes.string.isRequired,
      titleBackgroundColor: PropTypes.string.isRequired,
      titleColor: PropTypes.string.isRequired,
    }
