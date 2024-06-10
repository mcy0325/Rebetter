import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {colors} from '../theme';

const ChatListScreen = ({navigation: {navigate}}) => {
  const chatData = [
    {
      id: '1',
      name: 'Woo',
      lastMessage: '최근 메시지 내용',
      time: '오전 10:30',
    },
    {
      id: '2',
      name: 'Yaan',
      lastMessage: '최근 메시지 내용',
      time: '오후 1:45',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.chatItem}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
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
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

export default ChatListScreen;

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
  chatList: {
    marginTop: '5%',
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
    fontWeight: 'bold',
  },
  lastMessage: {
    color: '#666',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});
