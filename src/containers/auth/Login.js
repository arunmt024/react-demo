import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Loader} from '@components';
import styles from './styles/Login.styles';
import {images, colors, appFonts} from '@themes';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '@redux/actions';
import {connect} from 'react-redux';
class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getEmployees();
  }
  renderContent() {
    return (
      <View>
        <Text style={styles.sampleText}>
          Hello welcome to the Google Screen
        </Text>
        <Image source={images.iconGoogle} style={styles.logoContainer} />
      </View>
    );
  }

  render() {
    const {isloading} = this.props;
    return (
      <View style={styles.container}>
        <Loader isloading={isloading} />

        {this.renderContent()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.loginReducer.employees,
    isloading: state.loginReducer.isLoading,
  };
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
