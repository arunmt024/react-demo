import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '@themes';
const styles = StyleSheet.create({
  buttonDefaultStyle: {},
  buttonDefaultTextStyle: {
    color: colors.colorBorderFont,
  },
});

const LinkButton = props => {
  const {text, buttonTextStyles, LinkbuttonStyle, onPress} = props;
  return (
    <TouchableOpacity
      style={LinkbuttonStyle}
      onPress={onPress}
      activeOpacity={0.9}>
      <Text style={buttonTextStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

LinkButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonTextStyles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  LinkbuttonStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  text: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
  LinkbuttonStyle: styles.buttonDefaultStyle,
  buttonTextStyles: styles.buttonDefaultTextStyle,
};
export default LinkButton;
