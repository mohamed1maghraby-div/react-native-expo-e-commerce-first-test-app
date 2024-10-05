import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router';

const Header = ({isCart}: {isCart: boolean}) => {

const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity 
            onPress={()=>{ router.push("/(tabs)/") }} 
            style={styles.appIconContainer}>
            {
                isCart ? 
                (<Ionicons name={"chevron-back"} size={24} color={"#E96E6E"}/>) : 
                (<Image source={require("../../assets/images/apps.png")} style={styles.appIcon}/>)
            }
        </TouchableOpacity>
        { isCart && <Text style={styles.myCart}>My Cart</Text> }
      <Image source={require("../../assets/images/Ellipse2.png")} style={styles.Ellipse}/>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    appIconContainer: {
        backgroundColor: "#FFFFFF",
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center"
    },
    appIcon: {
        height: 28,
        width: 28,
    },
    Ellipse: {
        height: 44,
        width: 44,
        borderRadius: 22,
    },
    myCart: {
        fontSize: 28,
        color: "black",
    }
})