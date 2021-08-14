import React from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Input} from '../../components';
import {Firebase} from '../../config';
import {colors, storeData, useForm} from '../../utils';

export default function Login({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const handleClickLogin = () => {
    setIsLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        setIsLoading(false);

        Firebase.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err.message);
      });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Selamat Datang Kembali</Text>
          <Gap height={32} />
          <Text style={styles.desc}>Silahkan masukkan email dan password</Text>
          <Gap height={32} />
          <Input
            label="Email"
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={32} />
          <Input
            label="Kata Sandi"
            secureTextEntry
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={50} />
          <Button
            title={isLoading ? 'Loading' : 'Masuk'}
            disable={isLoading}
            type={isLoading ? 'secondary' : null}
            onPress={handleClickLogin}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.black,
    flex: 1,
    paddingTop: 40,
  },
  container: {
    backgroundColor: colors.container,
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text.primary,
    width: 250,
    lineHeight: 50,
  },
  desc: {
    fontSize: 18,
    color: colors.text.secondary,
    lineHeight: 35,
  },
});
