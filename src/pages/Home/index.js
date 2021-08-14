import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, getData} from '../../utils';

export default function Home({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.image};
      setProfile(data);
    });
  }, [setProfile]);

  console.log(profile);

  if (profile.photo === '') {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text>Home Psdadage</Text>
        <Text>{profile.fullName}</Text>
        <Image
          source={profile.photo}
          style={{width: 300, height: 300, backgroundColor: 'red'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 30,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
});
