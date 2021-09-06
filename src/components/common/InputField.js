import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  inputStyleDefault: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    height: 48,
  },
  buttonDefaultTextStyle: {},
});

const InputField = props => {
  const {text, placeHolder, inputStyle, defaultValue, onChange} = props;
  return (
    <TextInput
      placeholder={placeHolder}
      style={inputStyle}
      onChangeText={onChange}
    />
  );
};

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  inputStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
};

InputField.defaultProps = {
  inputStyle: styles.inputStyleDefault,
};
export default InputField;
