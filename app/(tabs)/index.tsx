import {FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '@/components/Layout/Header';
import { Fontisto } from '@expo/vector-icons';
import Category from '@/components/Category';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import data from '../../data/data.json';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens']; 

export default function HomeScreen() {
  const [products, setProducts] = useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleLiked = (item: { id: number; }) => {
    const newProducts = products.map((prod)=>{
      if(prod.id === item.id){
        return {
          ...prod, 
          isLiked: true
        }
      }
      return prod;
    });
    setProducts(newProducts);
  }

  return (
    <>
      <LinearGradient
        // Button Linear Gradient
        colors={['#FDF0F3', '#FFFBFC']}
        style={styles.container}>
        <Header />

        <FlatList 
          numColumns={2}
          data={products} 
          renderItem={({item, index}) => 
            <ProductCard item={item} key={index} handleLiked={handleLiked}/>
          }
          contentContainerStyle={{ paddingBottom: 150 }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
            <Text style={styles.matchText}>Match Your Style</Text>
            {/* Search input */}
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name='search' size={16} color={"#C0C0C0"}/>
              </View>
              <TextInput style={styles.textInput} placeholder='Search'/>
            </View>

              {/* Category Section */}
              <FlatList 
                data={categories} 
                renderItem={({item,index}) => (
                  <Category
                    item={item}
                    key={index}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                )} 
                keyExtractor={(item) => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </>
          }
        />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  matchText: {
    fontSize: 26,
    color: '#000000',
    marginTop: 25,
    fontWeight: '700',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
  }
});
