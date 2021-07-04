import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Recettes from './composants/Recettes/Recettes';
import DetailsRecettes from './composants/Recettes/DetailsRecettes';
import Detail from './composants/Recettes/Details';
const Stack = createStackNavigator();

class App extends Component {
  render = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Liste des recettes">
          <Stack.Screen name="Liste des recettes" component={Recettes} />
          <Stack.Screen name="Detail" component={DetailsRecettes} />
          <Stack.Screen name="Detail recette" component={Detail}  />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
}

export default App;