import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '@themes';
const Header = () => (
  <View style={styles.headerView}>
    <View style={styles.leftIconContainer}>
      <TouchableOpacity activeOpacity={0.8}>
        <Icon name="bars" size={24} color={'white'} />
      </TouchableOpacity>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.titletext}>Home</Text>
    </View>

    <View>
      <TouchableOpacity style={styles.rightIconContainer} activeOpacity={0.8}>
        <Icon name="search" size={24} color={'white'} />
      </TouchableOpacity>
    </View>
  </View>
);
export default Header;

const styles = StyleSheet.create({
  headerView: {
    height: 56,
    backgroundColor: colors.colorBorderFont,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconContainer: {
    marginLeft: 8,
    //flex:0.4
  },
  titleContainer: {
    flex: 2,
    marginLeft: 32,
  },
  titletext: {
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
  },
  rightIconContainer: {
    marginRight: 8,
    flex: 0.5,
  },
});
