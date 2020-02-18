import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import Second from './screens/Second';
import React, { Component } from 'react';
import Display from './screens/Display';
import Calculator from './screens/Calculator';
import Color from './screens/Color';
import Cal from './screens/Cal_component'
import Cal_component from './screens/Cal_component';
import Demo from './screens/Demo'


const MainNavigator = createStackNavigator({
    Homescreen: HomeScreen,
    Second: Second,
    Display: Display,
    Calculator: Calculator,
    Color: Color,
    Cal: Cal_component,
    Demo: Demo,
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