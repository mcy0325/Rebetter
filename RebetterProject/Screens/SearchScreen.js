import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {
  NaverMapView,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map';
import {colors} from '../theme';
import axios from 'axios';

const CLIENT_ID = 'ei8ubth3k8';
const CLIENT_SECRET = 'Wj9j6vKCVRstYCPPa7XcybKrddfX2tsnPRU5mOCW';

const SearchScreen = ({navigation: {navigate}}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [markers, setMarkers] = useState([]);
  const [camera, setCamera] = useState({
    latitude: 37.5992142,
    longitude: 126.8652116,
    zoom: 14,
  });

  const searchLocation = async () => {
    try {
      const response = await axios.get(
        'https://naveropenapi.apigw.gov-ntruss.com/map-geocode/v2/geocode',
        {
          params: {
            query: searchQuery,
          },
          headers: {
            'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
            'X-NCP-APIGW-API-KEY': CLIENT_SECRET,
          },
        },
      );

      const locations = response.data.addresses.map(address => ({
        name: address.roadAddress,
        latitude: parseFloat(address.y),
        longitude: parseFloat(address.x),
        detail: address,
      }));

      setMarkers(locations);
      if (locations.length > 0) {
        setCamera({
          latitude: locations[0].latitude,
          longitude: locations[0].longitude,
          zoom: 14,
        });
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch location data');
    }
  };

  return (
    <View style={{flex: 1}}>
      <NaverMapView style={{flex: 1}} camera={camera}>
        {markers.map((marker, index) => (
          <NaverMapMarkerOverlay
            key={index}
            latitude={marker.latitude}
            longitude={marker.longitude}
            caption={{text: marker.name}}
            onTap={() =>
              console.log(`${marker.name} marker tapped!`, marker.detail)
            }
          />
        ))}
      </NaverMapView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="주소 검색"
        />
        <TouchableOpacity style={styles.button} onPress={searchLocation}>
          <Text style={styles.buttonText}>검색</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    marginLeft: 10,
    backgroundColor: colors.palette.Green,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SearchScreen;
