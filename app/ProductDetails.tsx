import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '@/components/Layout/Header'
import { useGlobalSearchParams, useNavigation, useRouter } from 'expo-router';
import { CartContext } from '@/context/CartContext';
const iamgeUrl = 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png';

const sizes = ['S', 'M', 'L', 'XL'];

const colorsArray = [
  '#91A1B0',
  '#B11D1D',
  '#1F44A3',
  '#9F632A',
  '#1D752B',
  '#000000',
];

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const {addToCart} = useContext(CartContext);
  const { item } = useGlobalSearchParams();
  const parsedItem = item ? JSON.parse(item) : null;
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleAddToCart =(parsedItem: any) => {
    parsedItem.size = selectedSize;
    parsedItem.color = selectedColor;
    addToCart(parsedItem);
    navigation.navigate('Cart');
  }

  return (
    <LinearGradient
        // Button Linear Gradient
        colors={['#FDF0F3', '#FFFBFC']}
        style={styles.container}>

          <View style={styles.headerContainer}>
            <Header />
          </View>
          <Image source={{ uri: parsedItem.image }} style={styles.coverImage}/>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{parsedItem.title}</Text>
            <Text style={[styles.title, styles.price]}>${parsedItem.price}</Text>
          </View>

          {/* Size container */}
            <Text style={[styles.title, styles.sizeText]}>Size:</Text>
          <View style={styles.sizeContainer}>
            {sizes.map((size,index)=>{
              return(
                <TouchableOpacity 
                  key={index}
                  style={styles.sizeValueContianer} 
                  onPress={()=> {
                    setSelectedSize(size)
                  }}
                >
                  <Text style={[styles.sizeValue, selectedSize===size && {color: "#E55B5B"} ]}>{size}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          <Text style={[styles.title, styles.colorText]}>Colors</Text>
          <View style={styles.colorContainer}>
            {
              colorsArray.map((color, index)=>{
                return(
                  <TouchableOpacity 
                    key={index}
                    onPress={()=>{
                      setSelectedColor(color)
                    }}
                    style={[
                      styles.circleBorder, 
                      selectedColor === color && {
                        borderColor: color,
                        borderWidth: 2,
                      }
                    ]}
                  >
                    <View style={[styles.circle, {backgroundColor: color}]} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
          {/* bottom container */}
          <TouchableOpacity style={styles.button} onPress={()=>{
            handleAddToCart(parsedItem);
          }}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
    </LinearGradient>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
  },
  coverImage: {
    width: '100%',
    height: 420,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '500'
  },
  price: {
    color: '#4D4C4C',
  },
  sizeContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  sizeText: {
    marginHorizontal: 20,
  },
  sizeValueContianer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  colorText: {
    marginHorizontal: 20,
    marginTop: 10
  },
  colorContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center'
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 20,
  },
  circleBorder: {
    marginHorizontal: 5,
    height: 48,
    width: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#E96E6E',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
})