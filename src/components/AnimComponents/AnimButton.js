import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
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

class AnimButton extends Component {
  constructor(props) {
    super(props);

    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  componentWillUpdate() {
    this.props.isLoginStatus !== true ? this.handleUpdate() : null;
  }
  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: 0,
    }).start();
  }

  handleUpdate() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
    }).start();
  }
  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
    }).start();
  }

  render() {
    const animatedStyle = {
      transform: [{scale: this.animatedValue}],
    };
    const {text, buttonTextStyles, buttonStyle, onPress} = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          alert('clicked');
        }}
        onPressIn={this.handlePressIn}
        onPress={onPress}
        activeOpacity={0.8}>
        <Animated.View style={[buttonStyle, animatedStyle]}>
          <Text style={buttonTextStyles}>{text}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

AnimButton.propTypes = {
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

AnimButton.defaultProps = {
  buttonStyle: styles.buttonDefaultStyle,
  buttonTextStyles: styles.buttonDefaultTextStyle,
};
export default AnimButton;
