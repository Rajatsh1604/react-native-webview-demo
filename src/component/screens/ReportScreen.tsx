import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ReportScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Report Screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default ReportScreen;
