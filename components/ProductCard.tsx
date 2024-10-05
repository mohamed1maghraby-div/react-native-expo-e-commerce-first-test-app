import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const ProductCard = ({item, handleLiked} : {item: any, handleLiked: any}) => {
    // const [isLiked, setIsLiked] = useState(false);
    const router = useRouter();

    const navigateToProductDetails = (item) => {
        router.push({
          pathname: '/ProductDetails',
          params: { item: JSON.stringify(item) },
        });
    };

  return (
    <TouchableOpacity onPress={() => {
        navigateToProductDetails(item)
    }}
    style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.coverImage} />
        <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity 
            onPress={()=> {
                handleLiked(item);
            }} 
            style={styles.likeContainer}
        >
            {item?.isLiked ? <AntDesign name='heart' size={20} color={"#E55B5B"}/> : <AntDesign name='hearto' size={20} color={"#E55B5B"}/>}
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        position: "relative"
    },
    coverImage: {
        height: 256,
        width: "90%",
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        color: "#444444",
        fontWeight: "600"
    },
    price: {
        fontSize: 18,
        color: "#9c9c9c",
        fontWeight: "600"
    },
    content: {
        paddingLeft: 15,
    },
    likeContainer: {
        height: 34,
        width: 34,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17,
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 999,
    }
})