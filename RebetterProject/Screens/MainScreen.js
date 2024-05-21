import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {colors} from '../theme';

const MainScreen = ({navigation: {navigate}}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>RE:BETTER</Text>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.palette.White,
    paddingHorizontal: '5%',
  },

  Title: {
    fontSize: 36,
    marginTop: '5%',
    color: colors.palette.Green,
    fontFamily: 'Poppins-Bold',
  },
});
