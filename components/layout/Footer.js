import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Bize Ulaşın</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#9933FC',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
});

export default Footer;
