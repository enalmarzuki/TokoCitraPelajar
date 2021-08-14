import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ICHome, ICHomeActive} from '../../../assets';
import {colors} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <ICHomeActive /> : <ICHome />;
    }
    if (title === 'Penjualan') {
      return active ? <ICHomeActive /> : <ICHome />;
    }
    if (title === 'Laporan') {
      return active ? <ICHomeActive /> : <ICHome />;
    }
    return <ICHome />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.active : colors.text.inActive,
    marginTop: 4,
  }),
});
