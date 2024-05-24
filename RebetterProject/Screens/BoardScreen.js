import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {colors} from '../theme';

const dummyPosts = [
  {
    id: '1',
    title: '자동차 급발진 의심 미스테리',
    content: '자동차가 오늘 갑자기 급발진을 했는데...',
  },
  {
    id: '2',
    title: '전기차 이제 감전까지 되나요 에휴',
    content: '아니 오늘 갑자기 전기차 감전...',
  },
  {
    id: '3',
    title: '전기차 처음 샀습니다 ㅎㅎ',
    content: '설레는 마음으로 오늘 처음 전기차를...',
  },
  {
    id: '4',
    title: '차 바꾸려는데',
    content: '전기차로 바꾸신 분 있나요? 후기를...',
  },
  {
    id: '5',
    title: '전기차 어떻게 관리하시나요?',
    content: '전기차 처음 사봐서 어떻게 관리하는지...',
  },
  {
    id: '6',
    title: '6월 수입차 판매량 순위',
    content: '심심해서 검색해보다가 찾았는데...',
  },
];

const BoardScreen = ({navigation: {navigate}}) => {
  const [searchQuery, setSearchQuery] = useState('');

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
        placeholder="게시물 검색"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={dummyPosts}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContentContainer}
        renderItem={({item}) => (
          <View style={styles.postItem}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postContent}>{item.content}</Text>
          </View>
        )}
      />
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
  flatListContentContainer: {
    paddingHorizontal: '1%',
  },
  postItem: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  postContent: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Poppins-Light',
  },
});
