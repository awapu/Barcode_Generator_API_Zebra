import React from "react";
import { SafeAreaView, ScrollView, Image, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { WebView } from 'react-native-webview';
import { Linking } from 'react-native';


import { Button } from "react-native-elements";
let url = 'https://developer.zebra.com/docs/getting-started';
const HomeScreen = () =>{
   
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Image source={require('../img/zebra_logo.png')} style={styles.logo} />

            <Text style={styles.title}>Utilizando Api generadora de codigos de barras {"\n"}</Text>
            
            <Text style={styles.text}>Genera un código de barras a partir del texto proporcionado y devuelve una imagen PNG{"\n"}</Text>
            <Text style={styles.text}>Cree un código de barras imprimible y escaneable en una amplia variedad de simbologías que cubran una amplia gama de casos de uso, incluida la identidad del producto, la logística y la gestión de inventario.{"\n"}</Text>
            <Text style={styles.text}>
            La API del generador de códigos de barras genera imágenes de códigos de barras 1D o 2D que se pueden imprimir o escanear en 103 tipos de 
            códigos de barras, como código QR, UPC, código 128 y matriz de datos. 
            La API del generador de códigos de barras le permite incrustar fácilmente la imagen del código de barras en una aplicación de software o página web.
            {"\n"}
            </Text>
            <Text style={styles.text}>
            Generar código de barras en acción {"\n"}{"\n"}
            * El desarrollador móvil puede mostrar un código de barras en su aplicación, como un boleto de avión o de concierto.{"\n"}
            * El desarrollador backend puede incrustar un código de barras en un PDF, documento o correo electrónico para facturación, seguimiento de activos o mantenimiento de registros.{"\n"}
            * El desarrollador web puede mostrar un código de barras en una página web para vincular a una aplicación, ofrecer un cupón o insertar información de contacto.{"\n"}
            </Text>

          </ScrollView>
          <Button title="Ver documentacion" onPress={() => Linking.openURL('https://developer.zebra.com/docs/getting-started')} 
        /> 
 
        </SafeAreaView>
        
      );
          
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  text:{
    color: "black"
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: 100,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: "black",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 20,
  },

});


export default HomeScreen;