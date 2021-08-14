import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts} from '../../../utils';

const Button = ({type, title, onPress, icon, disable}) => {
  return (
    <TouchableOpacity
      style={styles.container(type)}
      onPress={onPress}
      disabled={disable}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? '#eeeeee' : '#F96400',
    paddingVertical: 20,
    borderRadius: 3,
  }),
  text: type => ({
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: type === 'secondary' ? 'gray' : 'white',
  }),
});
