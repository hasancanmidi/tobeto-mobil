import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Keyboard,
} from "react-native";

const RegisterScreen = () => {
        const navigation = useNavigation();
        const [firstName, setfirstName] = useState("");
        const [lastName, setlastName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [phoneNumber, setphoneNumber] = useState("");

        const handleBlur = () => {
            Keyboard.dismiss(); // Klavyeyi kapat
          };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/Tebeto-logo-yatay-beyaz.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.inputContainer}>
      <TextInput
            style={styles.input}
            placeholder="Adınız"
            keyboardType="default"
            autoCapitalize="none"
            value={firstName}
            onChangeText={setfirstName}
            onBlur={handleBlur}
        />
        <TextInput
            style={styles.input}
            placeholder="Soy Adınız"
            keyboardType="default"
            autoCapitalize="none"
            value={lastName}
            onChangeText={setlastName}
            onBlur={handleBlur}
        />
        <TextInput
            style={styles.input}
            placeholder="Telefon Numaranız"
            keyboardType="phone-pad"
            autoCapitalize="none"
            value={lastName}
            onChangeText={setlastName}
            onBlur={handleBlur}
        />
        <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            onBlur={handleBlur}
        />
        <TextInput
            style={styles.input}
            placeholder="Şifre"
            keyboardType="password"
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            onBlur={handleBlur}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.login}>Giriş Yap Sayfası</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.login}>Anasayfaya Git</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#9933FC",
        justifyContent: "center",
        alignItems: "center"
    },
    logoContainer: {
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "end"
    },
    logo: {
        width: 200,
        height: 150,
        padding: 0,
        margin:0,
        resizeMode: "contain"
    },
    inputContainer: {
        flex: 4,
        width: "80%",
    },
    input:{
        backgroundColor: "#fff",
        width: "100%",
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "#540b9e",
        width: "50%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
        alignSelf: "center",
      },
      buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    login:{
        color: "#FFF", 
        marginTop: 20 ,
        justifyContent: "center",
        alignSelf: "center",
    }
})

export default RegisterScreen