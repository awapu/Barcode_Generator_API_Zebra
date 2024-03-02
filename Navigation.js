import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//pantallas
import HomeScreen from "./screens/homeScreen";
import UnodScreen from "./screens/1dScreen";
import DosdScreen from "./screens/2dScreen";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
  
            //pagina inicial
            initialRouteName="<Inicio>"
            screenOptions={{
                tabBarActiveTintColor: "purple",
                headerStyle: {
                    backgroundColor: '#f5fffa',
                    
                  },
                  tabBarStyle: {
                    backgroundColor: '#f5fffa',
                    borderBlockColor: "black"
                  }
            }}
        >
            <Tab.Screen
                name="Informacion Api" 
                component={HomeScreen}
                options={{
                    
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen 
                name="Codigos 1D" 
                component={UnodScreen} 
                options={{
                    tabBarLabel: "Code 1D",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="barcode-scan" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen 
                name="Codigo 2D" 
                component={DosdScreen} 
                options={{
                    tabBarLabel: "Code 2D",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
