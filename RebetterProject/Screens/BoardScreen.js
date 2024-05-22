import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {colors} from '../theme';

const BoardScreen = ({navigation: {navigate}}) => {
  return (
    <View style={styles.Container}>
      <Text>보드다 이놈아</Text>
    </View>
  );
};

export default BoardScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: '5%',
  },
});
