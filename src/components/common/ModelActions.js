import React from 'react';
import {Text, Modal, View} from 'react-native';
import PropTypes from 'prop-types';

const ModelActions = props => {
  const {isVisible} = props;
  return (
    <Modal
      animationType="slide"
      supportedOrientations={['portrait', 'landscape']}
      transparent
      visible={isVisible}>
      <View>
        <Text>hello world</Text>
      </View>
    </Modal>
  );
};

ModelActions.propTypes = {
  isVisible: PropTypes.string.isRequired,
};

ModelActions.defaultProps = {};
export default ModelActions;
