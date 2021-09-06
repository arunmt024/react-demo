import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {colors, images} from '@themes';
import {Actions} from 'react-native-router-flux';
const FlatRow = props => (
  <View style={styles.headerView}>
    <View style={styles.rowContainer}>
      <View style={styles.coverPhotoContainer}>
        <Image source={images.imgLoginBack} style={styles.coverPhoto} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>This is My pdf file</Text>
        <Text>Education</Text>
      </View>

      <View style={styles.downloadIcon}>
        <Icon name="download" size={24} color={colors.colorBorderFont} />
      </View>
    </View>

    <View style={styles.rowContainer}>
      <TouchableOpacity
        style={styles.detailContainer}
        onPress={() => {
          Actions.Uploader();
        }}>
        <Text style={styles.heading}>Uploaded By</Text>
        <Text>Hitendra subhash Savkare</Text>
      </TouchableOpacity>

      <View style={[styles.detailContainer, {marginLeft: 4}]}>
        <Text style={styles.heading}>Uploaded Date</Text>
        <Text>10-20-2018</Text>
      </View>

      <View style={[styles.detailContainer3]}>
        <Text style={styles.heading}>Total Downloads</Text>
        <Text>10-20-2018</Text>
      </View>
    </View>
  </View>
);
export default FlatRow;

const styles = StyleSheet.create({
  headerView: {
    borderWidth: 1,
    borderColor: colors.colorBorderFont,
    borderRadius: 8,
    marginTop: 4,
    marginBottom: 4,
    padding: 4,
    marginLeft: 8,
    marginRight: 8,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  coverPhotoContainer: {
    flex: 0.5,
  },
  coverPhoto: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: 16,
  },
  titleText: {
    color: colors.fontColor,
    fontSize: 14,
    fontWeight: '600',
  },
  downloadIcon: {
    justifyContent: 'center',
    marginRight: 4,
  },
  detailContainer: {
    flex: 1,
    marginTop: 8,
    flexWrap: 'wrap',
  },
  detailContainer2: {
    flex: 1,
    marginTop: 8,
    alignItems: 'center',
  },
  detailContainer3: {
    flex: 1,
    marginTop: 8,
  },
  heading: {
    color: colors.fontColor,
    fontSize: 14,
  },
});
