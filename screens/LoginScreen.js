import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          onBlur={handleBlur}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.register}>Kayıt Ol Sayfasına Git</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.register}>Anasayfaya Git</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9933FC",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 2, // Logo konteyneri için daha fazla alan
    justifyContent: "flex-end",
    alignItems: "end",
  },
  logo: {
    width: 200,
    height: 140,
    padding: 0,
    margin: 0,
    resizeMode: "contain",
  },
  inputContainer: {
    flex: 3, // Input konteyneri için daha fazla alan
    width: "80%",
  },
  input: {
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
  register: {
    color: "#FFF", 
    marginTop: 20 ,
    justifyContent: "center",
    alignSelf: "center",
  }
});
