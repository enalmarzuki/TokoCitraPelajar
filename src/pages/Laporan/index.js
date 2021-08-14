import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';

export default function Laporan() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text>Laporan Page</Text>
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
