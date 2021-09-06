import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {colors} from '@themes';
const styles = StyleSheet.create({
  buttonDefaultStyle: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.colorBorderFont,
  },
  buttonDefaultTextStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: '800',
  },
});

const Button = props => {
  const {text, buttonTextStyles, buttonStyle, onPress} = props;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} activeOpacity={0.8}>
      <Text style={buttonTextStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonTextStyles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  buttonStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  buttonStyle: styles.buttonDefaultStyle,
  buttonTextStyles: styles.buttonDefaultTextStyle,
};
export default Button;
