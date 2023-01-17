import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProductScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Product</Text>
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

export default ProductScreen;
