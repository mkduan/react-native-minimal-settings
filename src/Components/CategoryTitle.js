import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import styles from '../Style/styles.js';

export default class CategoryTitle extends React.Component{
    render() {
        const{title} = this.props;

        return (
            <View style = {styles.settingHeader}>
                <Text style = {styles.settingHeaderTitle}>
                    {title}
                </Text>
            </View>
        );
    }
}

// TODO: Color of the text because they might have different background color
CategoryTitle.propTypes = {
    title: PropTypes.string.isRequired,
};
