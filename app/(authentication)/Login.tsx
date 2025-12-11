// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export class Login extends Component {
//   render() {
//     return (
//       <View className='bg-blue-500 bg-opacity-50 w-20 h-20'>
//         <Text > textInComponent </Text>
//       </View>
//     )
//   }
// }
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import SignupPopup from "./Signup";
interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function LoginPopup({ visible, onClose }: Props) {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(visible);
  const navigation = useNavigation<any>();
  return (
    <Modal visible={visible} transparent animationType="fade">
      <BlurView intensity={70} tint="dark" style={styles.blur}>
        <BlurView intensity={50} tint="systemChromeMaterialLight" style={styles.modalBox}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="#fff"
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#fff"
          />

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} onPress={onClose}>
            <Text style={styles.loginText}>Cancel</Text>
          </TouchableOpacity>
          <View>

          <TouchableOpacity onPress={() => setShowSignup(true)}>
            <Text style={{ marginTop: 15, color: "#fff" }}>Don't have an account ? Signup</Text>
          </TouchableOpacity>
          <SignupPopup visible={showSignup} onClose={() => {setShowSignup(false),setShowLogin(false)}} /> 
          {/* <LoginPopup visible={showLogin} onClose={() => {setShowLogin(false)}} />  */}
          </View>
          
        </BlurView>
      </BlurView>
    </Modal>
  );
}




const styles = StyleSheet.create({
  blur: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "25%",
    height: "55%",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 12,
  },
  loginBtn: {
    backgroundColor: "#ff3385",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 18,
  },
  loginText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  
});
// onPress={() => setShowLogin(true)}