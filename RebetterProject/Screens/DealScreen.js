import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import {colors} from '../theme';

const DealScreen = ({navigation: {navigate}}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const dealData = [
    {
      id: '1',
      name: '현대자동차 G80',
      Message: 'Loppy | 2024. 04. 16.',
    },
    {
      id: '2',
      name: 'KIA EV6',
      Message: 'Ryctim | 2024. 03. 25.',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.itemLeft}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.Message}>{item.Message}</Text>
      </View>
      <View style={styles.itemRight}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>상세 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>채팅하기</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Text style={styles.Title}>RE:BETTER</Text>
        <Image
          style={styles.Mypage}
          source={require('../Assets/icons/mypage.png')}
        />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="중고 배터리 검색"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={dealData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

export default DealScreen;

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
  searchInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  chatList: {
    marginTop: '1%',
  },
  chatItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  Message: {
    color: '#666',
    fontFamily: 'Poppins-Light',
  },
  itemLeft: {
    flex: 1,
  },

  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    marginLeft: 10,
    backgroundColor: colors.palette.Green,
    padding: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
});
