import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet,View, Text, Image, Button, TouchableOpacity  } from 'react-native'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Navbar/>
          <ScrollView  style={styles.contentContainer}> 
          <View style={styles.content}>
        <Text style={styles.heading}>
          Kodlama, pek çok olasılığı içinde barındıran bir dünya. Başlamak için tek gereken ise merak ve öğrenme dürtüsü.
        </Text>
        <View style={styles.row}>
          <Image source={{ uri: "https://tobeto.com/_next/static/media/ca-1.cf0e22ca.png" }} style={styles.image} />
          <Text style={styles.text}>
            Dünya çapında milyonlarca insanın günümüz dijital dünyasında başarılı olmak için ihtiyaç duyduğu becerileri eğlenceli bir şekilde edinmelerine olanak sağlayan Codecademy içerikleri şimdi Tobeto deneyimi ile sana daha yakın!
          </Text>
        </View>
        <Button title="Hemen abone ol!" onPress={() => {}} />
      </View>
      <Image source={{ uri: "https://tobeto.com/_next/static/media/cacode.e3ffebc4.gif" }} style={styles.fullWidthImage} />
      <View style={styles.footerContent}>
        <Text style={styles.footerHeading}>
          Şimdi Codecademy'nin zengin kataloğu ile:
        </Text>
        <Text style={styles.footerText}>
          Gerçek zamanlı, kendi hızında kod yaz, anında geri bildirim al, etkileşimle yaparak öğren. Öğrenme deneyimine destek için makaleler, videolar ve projelerden faydalan.
        </Text>
        <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Hemen abone ol!</Text>
        </TouchableOpacity>
      </View>
          </ScrollView>
        <Footer/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#9933FC",
  },
  contentContainer:{
    backgroundColor: "#181717"
  },
  textColor:{
    color: "#fff",
  },
  content: {
    padding: 20,
  },
  heading: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: "#fff",
    fontSize: 30
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20 
  },
  button: {
    backgroundColor: "#7A29CC", // Mor rengi buton için
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    color: "#fff",
    fontSize: 15
  },
  fullWidthImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20
  },
  footerContent: {
    backgroundColor: '#11162F',
    padding: 20,
  },
  footerHeading: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerText: {
    color: '#fff',
    marginBottom: 10,
  },
})

export default HomeScreen