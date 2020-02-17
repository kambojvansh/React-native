import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import Second from './screens/Second';
import React, { Component } from 'react';
import Display from './screens/Display';
import Calculator from './screens/Calculator';
import Color from './screens/Color';


const MainNavigator = createStackNavigator({
    Homescreen: HomeScreen,
    Second: Second,
    Display: Display,
    Calculator: Calculator,
    Color: Color,
});

class App extends Component {
    Router = createAppContainer(MainNavigator);
    render() {
        return (
            <this.Router />
        );
    };

};


export default App;