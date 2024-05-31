import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  Modal,
} from 'react-native';
import {colors} from '../theme';

const DealScreen = ({navigation: {navigate}}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);

  const dealData = [
    {
      id: '1',
      name: '현대자동차 G80',
      Message: '담당자: Loopy',
    },
    {
      id: '2',
      name: 'KIA EV6',
      Message: '담당자: Ryctim',
    },
  ];

  const filteredData = dealData.filter(post =>
    post.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleOpenModal = deal => {
    setSelectedDeal(deal);
    setModalVisible(true);
  };

  const handleChat = async () => {
    navigate('ChatStack', {screen: 'Chat'});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.chatItem}>
      <View style={styles.itemLeft}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.Message}>{item.Message}</Text>
      </View>
      <View style={styles.itemRight}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOpenModal(item)}>
          <Text style={styles.buttonText}>상세 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleChat}>
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
        placeholder="차 종으로 검색"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatList}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>차 종: {selectedDeal?.name}</Text>
          <Text style={styles.modalText}>배터리 규격: ??? </Text>
          <Text style={styles.modalText}>배터리 성능: ??? </Text>
          <Text style={styles.modalText}>배터리 가격: ??? </Text>
          <Text style={styles.modalText}>거래소: ???폐차장 </Text>

          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!isModalVisible)}>
            <Text style={styles.buttonText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  modalView: {
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  buttonClose: {
    marginTop: 10,
    width: '20%',
    backgroundColor: colors.palette.Green,
    alignItems: 'center',
  },
});
