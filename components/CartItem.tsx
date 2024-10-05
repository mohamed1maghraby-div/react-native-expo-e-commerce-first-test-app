import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

const imageUrl = 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png'; 


interface Item {
    id: number;
    image: string;
    title: string;
    price: number;
    size?: string; // Optional
    color?: string; // Optional
}


const CartItem: React.FC<{ item: Item }> = ({ item, deleteItemFromCart }) => {

  return (
    <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.coverImage}/>
        <View style={styles.cardContent}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.circleSizeContainer}>
                <View style={[styles.circle, {backgroundColor: item?.color}]}/>
                <View style={styles.sizeCircle}>
                    <Text style={styles.sizeText}>{item?.size}</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity onPress={() => deleteItemFromCart(item)}>
            <FontAwesome6 name={"trash"} color={"#F68CB5"} size={22}/>
        </TouchableOpacity>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    coverImage: {
        height: 125,
        width: "25%",
        borderRadius: 20
    },
    cardContent: {
        flex: 1,
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        color: "#444444",
        fontWeight: "500"
    },
    price: {
        color: "#797979",
        marginVertical: 10,
        fontSize: 18,
    },
    circleSizeContainer:{
        flexDirection: 'row',
    },
    circle: {
        height: 32,
        width: 32,
        borderRadius: 16,
    },
    sizeCircle: {
        backgroundColor: "white",
        height: 32,
        width: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    sizeText: {
        fontSize: 18,
        fontWeight: '500',
    }
})