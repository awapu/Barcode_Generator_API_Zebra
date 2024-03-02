
import React, { useState } from 'react';
import { SafeAreaView, ScrollView,TextInput, View, Text, StyleSheet, TouchableOpacity, Image, Button} from "react-native";
import axios from 'axios';

    const DosDScreen = () => {
        const [barcode, setBarcode] = useState('');
        const [imageData, setImageData] = useState(null);
        const [error, setError] = useState('');
      
        const getWeather = async () => {
          if (barcode !== '') {
            const apiURL = 'https://api.zebra.com/v2/tools/barcode/generate/';
            const apiKey = 'XcPfzt5GkywBG7YOMKfN9SnrUSmLACmX';
      
            try {
              const response = await axios.get(apiURL, {
                headers: {
                  'apikey': apiKey,
                },
                params: {
                  symbology: 'qrcode',
                  text: barcode,
                },
                responseType: 'blob',
              });
      
              const blob = response.data;
              const reader = new FileReader();
              reader.onloadend = () => {
                setImageData(reader.result);
                setError('');
              };
              reader.readAsDataURL(blob);
            } catch (error) {
              console.error(error);
              setError('Error al obtener datos');
            }
          } else {
            setError('El camo codigo no puede esta en blanco');
          }
        };
      
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View>
                        <Text style={styles.label} >Convertir a codigo QR</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={text => setBarcode(text)}
                        value={barcode}
                        />
                        
                        <Button
                        style={styles.button}
                        title="Generar QR"
                        onPress={getWeather}
                        />
                        {error ? <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text> : null}
                        {imageData ? <Image source={{ uri: imageData }} style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 20}} /> : null}
                        <View style={styles.barcode} >
                        <Text style={styles.title}>Información sobre códigos QR:</Text>
                            <Text style={styles.main}>
                                Los códigos QR (Quick Response) son códigos de barras bidimensionales que se pueden escanear utilizando un dispositivo móvil equipado con una cámara y una aplicación de escaneo de códigos QR.
                                Estos códigos son capaces de almacenar una gran cantidad de información, como texto, URL, información de contacto, entre otros, lo que los hace muy versátiles para una variedad de aplicaciones.
                                {"\n"}
                            </Text>
                            <Text style={styles.main}>
                                Los códigos QR se utilizan comúnmente en publicidad, marketing, gestión de inventarios, pagos móviles, identificación de productos y muchas otras aplicaciones.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
      };
  
      const styles = StyleSheet.create({

        container: {
          flex: 1,
          backgroundColor: '#ffffff',
          padding: 10,
        },
        main:{
          color:"black",
          textAlign: "justify",
          padding: 5,
    
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
          color:"black",
          textAlign: "center"
          
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
        barcode:{
    
            borderColor:"skyblue",
            borderWidth:1,
            marginLeft:10,
            marginTop: 20,
            marginRight:10,
    
        },
        
        input:{
            marginLeft:20,
            marginRight:20,
            marginBottom:20,
            width: "90%",
            borderColor:"skyblue",
            borderWidth:1,
            textAlign: 'center',
            borderRadius: 20,
            fontSize:15,
            color:"black",
        },
        button:{
            width: 200,
             height: 200,
              alignSelf: 'center',
            borderColor:"skyblue",
            borderWidth:1,
            fontSize:15
        },
        label:{
            marginTop:5,
            marginLeft:20,
            marginBottom:5,
            color:"black",
            fontSize:18
        }
      
      });
export default DosDScreen;