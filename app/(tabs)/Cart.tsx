import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '@/components/Layout/Header'
import CartItem from '@/components/CartItem'
import { CartContext } from '@/context/CartContext'

const Cart = () => {

  const {carts, totalPrice, deleteItemFromCart} = useContext(CartContext);
  
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#FDF0F3", "#FFFBFC"]}
      style={styles.container}
    >
      <View style={styles.headerContainer}></View>
      <Header isCart={true} />

      <FlatList
        data={carts}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ 
          paddingBottom: 100
         }}
        ListFooterComponent={
          <>
            <View style={styles.priceContianer}>
              <View style={styles.priceAndTitle}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.text}>${totalPrice}</Text>
              </View>
              <View style={styles.priceAndTitle}>
                <Text style={styles.text}>Shipping:</Text>
                <Text style={styles.text}>$0.0</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.priceAndTitle}>
              <Text style={styles.text}>Grand Total:</Text>
              <Text
                style={[styles.text, { color: "black", fontWeight: "700" }]}
              >
                ${totalPrice}
              </Text>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <CartItem item={item} deleteItemFromCart={deleteItemFromCart}/>
        )}
      />

      <TouchableOpacity style={styles.checkoutContainer}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default Cart

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 15,
  },
  priceContianer: {
    marginTop: 40
  },
  priceAndTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10
  },
  text: {
    color: "#757575",
    fontSize: 16,
  },
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginVertical: 10,
  },
  checkoutContainer: {
    backgroundColor: "#E96E6E",
    width: '100%',
    marginVertical: 10,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    padding: 10
  }
})