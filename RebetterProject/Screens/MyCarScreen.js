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

const MyCarScreen = ({navigation: {navigate}}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Text style={styles.Title}>RE:BETTER</Text>
        <Image
          style={styles.Mypage}
          source={require('../Assets/icons/mypage.png')}
        />
      </View>
      <Text>
        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18}}>채영</Text>
        <Text style={{fontFamily: 'Poppins-Light', fontSize: 18}}>
          {' '}
          님의 마이카 배터리 잔량
        </Text>
      </Text>
      <View style={{alignItems: 'center', padding: '3%'}}>
        <ImageBackground
          style={styles.Car}
          source={require('../Assets/icons/car.png')}
          resizeMode="cover">
          <Text
            style={{
              marginTop: 4,
              marginLeft: 21,
              fontFamily: 'Poppins-Light',
              fontSize: 13,
            }}>
            완속 충전 시{'\n'}배터리 수명을 줄일 수 있습니다.
          </Text>
        </ImageBackground>
      </View>
      <Text>
        <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16}}>채영</Text>
        <Text style={{fontFamily: 'Poppins-Light', fontSize: 16}}>
          {' '}
          님의 마이카 배터리 최대 성능(SoH)
        </Text>
      </Text>
      <View style={{alignItems: 'center', padding: '2%'}}>
        <ImageBackground
          style={styles.Soh}
          source={require('../Assets/icons/soh.png')}
          resizeMode="cover">
          <Text
            style={{
              marginTop: 15,
              marginLeft: 15,
              fontFamily: 'Poppins-Medeium',
              fontSize: 14,
            }}>
            주행 거리 대비(%)
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default MyCarScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: '5%',
  },

  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
  },

  Title: {
    fontSize: 36,
    color: colors.palette.Green,
    fontFamily: 'Poppins-Bold',
  },

  Mypage: {
    width: 31,
    height: 31,
    marginBottom: 10,
    marginLeft: 155,
  },

  Car: {
    width: 228,
    height: 331,
  },
  Soh: {
    width: 370,
    height: 165,
  },
});
