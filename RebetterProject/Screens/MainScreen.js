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

const MainScreen = ({navigation: {navigate}}) => {
  const mainBarItems = [
    {id: 1, text: '판매할 배터리 등록 하기', screen: 'Register'},
    {id: 2, text: '중고 배터리 거래하기', screen: 'Deal'},
    {id: 3, text: '주변 충전소 & 폐차장 찾기', screen: 'Search'},
  ];

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Text style={styles.Title}>RE:BETTER</Text>
        <Image
          style={styles.Mypage}
          source={require('../Assets/icons/mypage.png')}
        />
      </View>
      <Text style={styles.HelloText}>
        안녕하세요,{'\n'}
        채영님!
      </Text>
      <View style={styles.ImageContainer}>
        <ImageBackground
          source={require('../Assets/icons/mainBox.png')}
          style={styles.MainBox}
          resizeMode="cover">
          <Text style={styles.BoxText}>전기차 사용자를 위한 RE:BETTER</Text>
          <Text style={styles.BoxText2}>
            채영님의 마이카{'\n'}현재 배터리 잔량은 76% 입니다!
          </Text>
          <TouchableOpacity
            onPress={() => navigate('HomeStack', {screen: 'MyCar'})}>
            <Text style={styles.BoxText3}>마이카 더 보기</Text>
          </TouchableOpacity>
        </ImageBackground>
        {mainBarItems.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigate('HomeStack', {screen: item.screen})}
            style={styles.MainBarItemContainer}>
            <ImageBackground
              source={require('../Assets/icons/mainBar.png')}
              style={styles.MainBar}
              resizeMode="cover">
              <Text style={styles.MainBarText}>{item.text}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MainScreen;

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

  HelloText: {
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    color: colors.text,
    textAlign: 'left',
  },

  ImageContainer: {
    marginTop: 15,
    alignItems: 'center',
  },

  MainBox: {
    width: 319,
    height: 180,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '5%',
  },

  BoxText: {
    color: colors.text,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
  },
  BoxText2: {
    color: colors.palette.Gray,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
  },
  BoxText3: {
    color: colors.palette.Red,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  MainBarItemContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  MainBar: {
    width: 319,
    height: 60,
    marginBottom: 10,
    padding: '5%',
  },
  MainBarText: {
    color: colors.text,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});
