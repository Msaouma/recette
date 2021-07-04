import React, { useState, useEffect} from 'react';
import { View, FlatList,Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import DetailsRecettes from './DetailsRecettes';

// const data = [
//     {
//        "id":716426,
//        "image":"https://spoonacular.com/recipeImages/716426-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Cauliflower, Brown Rice, and Vegetable Fried Rice"
//     },
//     {
//        "id":715594,
//        "image":"https://spoonacular.com/recipeImages/715594-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Homemade Garlic and Basil French Fries"
//     },
//     {
//        "id":715497,
//        "image":"https://spoonacular.com/recipeImages/715497-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Berry Banana Breakfast Smoothie"
//     },
//     {
//        "id":644387,
//        "image":"https://spoonacular.com/recipeImages/644387-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Garlicky Kale"
//     },
//     {
//        "id":715392,
//        "image":"https://spoonacular.com/recipeImages/715392-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Chicken Tortilla Soup (Slow Cooker)"
//     },
//     {
//        "id":716268,
//        "image":"https://spoonacular.com/recipeImages/716268-312x231.jpg",
//        "imageType":"jpg",
//        "title":"African Chicken Peanut Stew"
//     },
//     {
//        "id":716381,
//        "image":"https://spoonacular.com/recipeImages/716381-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Nigerian Snail Stew"
//     },
//     {
//        "id":782601,
//        "image":"https://spoonacular.com/recipeImages/782601-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Red Kidney Bean Jambalaya"
//     },
//     {
//        "id":794349,
//        "image":"https://spoonacular.com/recipeImages/794349-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Broccoli and Chickpea Rice Salad"
//     },
//     {
//        "id":715446,
//        "image":"https://spoonacular.com/recipeImages/715446-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Slow Cooker Beef Stew"
//     },
//     {
//        "id":715415,
//        "image":"https://spoonacular.com/recipeImages/715415-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Red Lentil Soup with Chicken and Turnips"
//     },
//     {
//        "id":766453,
//        "image":"https://spoonacular.com/recipeImages/766453-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Hummus and Za'atar"
//     },
//     {
//        "id":716627,
//        "image":"https://spoonacular.com/recipeImages/716627-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Easy Homemade Rice and Beans"
//     },
//     {
//        "id":716408,
//        "image":"https://spoonacular.com/recipeImages/716408-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Greek-Style Baked Fish: Fresh, Simple, and Delicious"
//     },
//     {
//        "id":795751,
//        "image":"https://spoonacular.com/recipeImages/795751-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Chicken Fajita Stuffed Bell Pepper"
//     },
//     {
//        "id":640941,
//        "image":"https://spoonacular.com/recipeImages/640941-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Crunchy Brussels Sprouts Side Dish"
//     },
//     {
//        "id":798400,
//        "image":"https://spoonacular.com/recipeImages/798400-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant"
//     },
//     {
//        "id":756814,
//        "image":"https://spoonacular.com/recipeImages/756814-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Powerhouse Almond Matcha Superfood Smoothie"
//     },
//     {
//        "id":729366,
//        "image":"https://spoonacular.com/recipeImages/729366-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Plantain Salad"
//     },
//     {
//        "id":715769,
//        "image":"https://spoonacular.com/recipeImages/715769-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Broccolini Quinoa Pilaf"
//     },
//     {
//        "id":782600,
//        "image":"https://spoonacular.com/recipeImages/782600-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Quinoa Salad with Vegetables and Cashews"
//     },
//     {
//        "id":642605,
//        "image":"https://spoonacular.com/recipeImages/642605-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Farro With Mushrooms and Asparagus"
//     },
//     {
//        "id":715540,
//        "image":"https://spoonacular.com/recipeImages/715540-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Summer Berry Salad"
//     },
//     {
//        "id":636589,
//        "image":"https://spoonacular.com/recipeImages/636589-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Butternut Squash Frittata"
//     },
//     {
//        "id":640062,
//        "image":"https://spoonacular.com/recipeImages/640062-312x231.jpg",
//        "imageType":"jpg",
//        "title":"Corn Avocado Salsa"
//     }
// ];

function Recettes({navigation})  {
    const [recettes, setRecettes] = useState();
    useEffect(() => {
        console.log('ok');
        axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=f70834573a7c401f86f1b5a7a5c7d1f4&number=25')
        .then(res => {
        const recettes = res.data.results;
        setRecettes(recettes);
        });
        //setRecettes(data);
        
    },[])
 
   const renderRecetteItem = (itemData) => {
        return (
          <DetailsRecettes
            title={itemData.item.title}
            image={itemData.item.image}
            onSelectRecette = {() => {
               navigation.navigate("Detail recette", {
                  recetteId: itemData.item.id ,
               });
            }}
          />
        );
    };
 
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
            data={recettes}
            renderItem={renderRecetteItem}
            style={{ width: "100%" }}
        />
      </View>
    );
  }
  

export default Recettes;
