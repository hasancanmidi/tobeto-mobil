import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.navbar}>
      <Image source={require("../../assets/Tebeto-logo-yatay-beyaz.png")} style={styles.logo}/>
        <TouchableOpacity style={styles.menuToggle} onPress={() => setMenuVisible(!menuVisible)}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => {
          setMenuVisible(!menuVisible);
        }}
      >
         <TouchableOpacity 
          style={styles.modalOverlay} 
          onPressOut={() => setMenuVisible(false)}
          activeOpacity={1}
        ></TouchableOpacity>
        <View style={styles.modalView}>
            <Text style={styles.menuItem}>Biz Kimiz?</Text>
            <Text style={styles.menuItem}>Neler Sunuyoruz?</Text>
            <Text style={styles.menuItem}>Katalog</Text>
            <Text style={styles.menuItem}>Codecademy</Text>
            <Text style={styles.menuItem}>Tobeto'da Bu Ay</Text>
            <Text style={styles.menuItem}>Kategoriler</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.menuItem}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.menuItem}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
      </Modal>
      <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          styles.menuItem,
          { backgroundColor: pressed ? '#54117A' : 'transparent' }
        ]}
      >
        {({ pressed }) => (
          <Text style={{ color: pressed ? '#fff' : '#54117A' }}>
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#9933FC',
    padding: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 24,
  },
  menuItem:{
    fontSize: 16,
    marginBottom: 7,
  },
  logo: {
    width: 100,
    height: 40,
    padding: 0,
    margin: 0,
    resizeMode: "contain",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı saydam arka plan
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Navbar;
