# Generador de codigos de barras utilizando React native y consumiendo el API Barcode Generator de Zebra
# Barcode_Generator_API_Zebra

Awapu Barcode Generator.

# Descripción
Esta aplicacion ha sido creada con React native, con la intecion de poder consumir el api de Zebra para generacion de codigos de barras, es un breve ejemplo de como poder consumir el api y generar codigos de barras de manera sencilla.

# Documentacion Barcode generator APi
Para poder utilizar esta API sera necesario registrarse en la pagina de zebra y solicitar el APIKEY, el cual se debera enviar en el header de la consulta, para que asi pueda ser autorizada la consulta

Link Inscripcion API: https://developer.zebra.com/apis/barcode-generate

Link Docuemtnacion  : https://developer.zebra.com/docs/getting-started 📖

### API KEY 🔧

El codigo obtenido del api debe ser reemplazado en los archivos "1dScreen.js" y "2dScreen.js", en la lineas que relacionan el api key 

```
const apiKey = 'TU API KEY';
```

### URL API 🔧

La direccion del api donde se debe realizar la peticion es la siguiente 

```
const apiURL = 'https://api.zebra.com/v2/tools/barcode/generate/';
```

### Simbologias para codificacion 🔧

El api nos permitira crear los siguientes tipos de codigos de barras.

```
simbología válida: auspost, azteccode, azteccodecompact, aztecrune, bc412, channelcode, codablockf, code11, code128, code16k, code2of5, code32, code39, code39ext, code49, code93, code93ext, codeone, coop2of5, daft, databarexpanded, databarexpandedcomposite, databarexpandedstack Ed, barra de datos expandida apilada, barra de datos limitada, barra de datos limitada compuesta, barra de datos truncada, barra de datos truncada, barra de datos truncada compuesta, barra de datos truncada, datalogic2of5, matriz de datos, matriz de datos rectangular, código de puntos, ean13, ean13composite, ean14 , ean2, ean5, ean8, ean8composite, flattermarken, gs1-128, gs1-128composite, gs1-cc, gs1datamatrix, gs1datamatrixrectangular, gs1northamericacoupon, gs1qrcode, hanxin, hibcazteccode, hibccodablockf, hibccode128, hibccode39, hibcdatamatrix, hibcdatamatrixrectangular, hibcmicropdf417, hibcpdf417, hibcqrcode, iata2of5, identcode , industrial2of5, interleaved2of5, isbn, ismn, issn, itf14, japanpost, kix, leitcode, Matrix2of5, maxicode, micropdf417, microqrcode, msi, onecode, pdf417, pdf417compact, pharmacode2, pharmacode, planet, plessey, posicode, postnet, pzn, qrcode, racionalizedCodabar, raw, royalmail, sscc18, símbolo, telepen, telepennumeric, ultracode, upca, upcacomposite, upce, upcecomposite
```

# Imagenes APP

Las sieguintes imagenes muetsran la conversion de texto a codigo de dos symbologias, code 128 y QR code


<img src="https://github.com/awapu/Barcode_Generator_API_Zebra/assets/133719486/ed92725a-2a1c-43a9-bfae-f0e739f1bb4c" width="300" height="600">
<img src="https://github.com/awapu/Barcode_Generator_API_Zebra/assets/133719486/31b8a187-146d-4b36-9b0c-86e767ba0eb9" width="300" height="600">
<img src="https://github.com/awapu/Barcode_Generator_API_Zebra/assets/133719486/1c1ac646-109b-49e6-8c35-30b7a1657c09" width="300" height="600">


#### Soporte
Si tienes algún problema o sugerencia, por favor abre un problema aquí.

#### Roadmap
Ideas, mejoras planificadas y actualizaciones, aceptamos colaboracion

#### Autor ✒️
Andres Felipe Ceron

#### Comparte este proyecto con otros
Invítanos un café ☕
Inicia un nuevo problema o contribuye con un PR
Muestra tu agradecimiento diciendo gracias en un nuevo problema.
Consejos Adicionales 📝

#### Terminos de uso

Esta es una simple muestra de funcionamiento de la API de Zebra, por lo que no se brinda sobre la aplicaicon.
