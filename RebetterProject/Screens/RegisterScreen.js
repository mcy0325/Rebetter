import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {colors} from '../theme';

const RegisterScreen = ({navigation: {navigate}}) => {
  const handleRegister = async () => {
    navigate('Deal');
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Text style={styles.Title}>RE:BETTER</Text>
        <Image
          style={styles.Mypage}
          source={require('../Assets/icons/mypage.png')}
        />
      </View>
      <View>
        <Text style={styles.Font}>차 종</Text>
        <TextInput style={styles.Input} />
      </View>
      <View>
        <Text style={styles.Font}>배터리 규격</Text>
        <TextInput style={styles.Input} />
      </View>
      <View>
        <Text style={styles.Font}>배터리 성능</Text>
        <TextInput style={styles.Input} />
      </View>
      <View>
        <Text style={styles.Font}>배터리 가격</Text>
        <TextInput style={styles.Input} />
      </View>
      <View>
        <Text style={styles.Font}>증빙 자료 첨부하기</Text>
        <TextInput style={styles.Input} />
      </View>
      <TouchableOpacity style={styles.GreenButton} onPress={handleRegister}>
        <Text style={styles.ButtonFont}>등록하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

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

  Font: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    marginBottom: '3%',
    color: colors.palette.Black,
  },
  Input: {
    borderWidth: 1,
    borderColor: colors.palette.Black,
    borderRadius: 16,
    padding: 15,
    marginBottom: '3%',
    height: 55,
  },
  GreenButton: {
    backgroundColor: colors.palette.Green,
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    padding: 15,
    marginTop: '2%',
    borderRadius: 16,
  },
  ButtonFont: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.palette.White,
  },
});
