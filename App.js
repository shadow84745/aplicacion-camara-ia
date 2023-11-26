// import React, { useState, useEffect, useRef } from 'react';
// import { View, StyleSheet, Text, Image, Alert } from 'react-native';
// import { Camera, CameraType, FlashMode } from 'expo-camera';
// import * as MediaLibrary from "expo-media-library";
// import axios from 'axios';
// import Button from './src/components/Button.jsx';

// const App = () => {
//   const [hasCameraPermisiion, setHasCameraPermisiion] = useState(null);
//   const [image, setImage] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
//   const cameraRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       MediaLibrary.requestPermissionsAsync();
//       const cameraStatus = await Camera.requestCameraPermissionsAsync();
//       setHasCameraPermisiion(cameraStatus.status === "granted");
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const options = { quality: 0.5, base64: true, skipProcessing: true };
//       const data = await cameraRef.current.takePictureAsync(options);
//       const source = data.uri;
//       setImage(source);
//       console.log(source);
//     }
//   };

//   const saveImage = async () => {
//     if (image) {
//       try {
//         await MediaLibrary.createAssetAsync(image);
//         Alert.alert("Success", "Image saved successfully");
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };

//   const uploadImage = async (uri) => {
//     try {
//       const formData = new FormData();
//       formData.append('file', {
//         uri: uri,
//         type: 'image/jpeg',
//         name: 'myImage.jpg'
//       });

//       const response = await axios.post('http://172.16.79.158:5000/predict', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       Alert.alert("Prediction", response.data);
//     } catch (error) {
//       console.error('Error sending image:', error);
//     }
//   };

//   if (hasCameraPermisiion === false) {
//     return <Text>No access to the camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {!image ?
//         <Camera
//           style={styles.camera}
//           type={type}
//           flashMode={flash}
//           ref={cameraRef}
//           ratio='16:9'
//         >
//           <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 35 }}>
//             <Button icon={"retweet"} onPress={() => {
//               setType(type === CameraType.back ? CameraType.front : CameraType.back);
//             }} />
//             <Button icon={"flash"} onPress={() => {
//               setFlash(flash === Camera.Constants.FlashMode.off
//                 ? Camera.Constants.FlashMode.torch
//                 : Camera.Constants.FlashMode.off);
//             }} />
//           </View>
//         </Camera>
//         : <Image source={{ uri: image }} style={styles.camera} />
//       }
//       <View>
//         {image ?
//           <View style={styles.BottomButtons}>
//             <Button
//               title={"Re-take"}
//               icon={"retweet"}
//               onPress={() => setImage(null)}
//             />
//             <Button
//               title={"Save & Predict"}
//               icon="check"
//               onPress={() => {
//                 saveImage();
//                 uploadImage(image);
//               }}
//             />
//           </View>
//           :
//           <Button
//             title={"Take a picture"}
//             icon="camera"
//             onPress={takePicture}
//           />
//         }
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000",
//     justifyContent: "center",
//     paddingBottom: 20,
//   },
//   camera: {
//     flex: 1,
//     borderRadius: 30
//   },
//   BottomButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 50
//   }
// });

// export default App;



// import React, { useState, useEffect, useRef } from 'react';
// import { View, StyleSheet, Text, Image, Alert } from 'react-native';
// import { Camera, CameraType, FlashMode } from 'expo-camera';
// import * as MediaLibrary from "expo-media-library";
// import axios from 'axios';
// import Button from './src/components/Button.jsx'; // Asegúrate de que este componente exista y esté correctamente importado

// const App = () => {
//   const [hasCameraPermission, setHasCameraPermission] = useState(null);
//   const [image, setImage] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
//   const cameraRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       MediaLibrary.requestPermissionsAsync();
//       const cameraStatus = await Camera.requestCameraPermissionsAsync();
//       setHasCameraPermission(cameraStatus.status === "granted");
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const options = { quality: 0.5, base64: true, skipProcessing: true };
//       const data = await cameraRef.current.takePictureAsync(options);
//       const source = data.uri;
//       setImage(source);
//       console.log(source);
//     }
//   };

//   const saveImage = async () => {
//     if (image) {
//       try {
//         await MediaLibrary.createAssetAsync(image);
//         Alert.alert("Success", "Image saved successfully");
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };

//   const uploadImage = async (uri) => {
//     try {
//       const formData = new FormData();
//       formData.append('file', {
//         uri: uri,
//         type: 'image/jpeg',
//         name: 'image.jpg'
//       });

//       // Actualiza esta URL con la dirección de tu servidor Flask
//       const response = await axios.post('http://192.168.0.12:5000/predict', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       Alert.alert("Prediction", response.data);
//     } catch (error) {
//       console.error('Error sending image:', error);
//     }
//   };

//   if (hasCameraPermission === false) {
//     return <Text>No access to the camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {!image ?
//         <Camera
//           style={styles.camera}
//           type={type}
//           flashMode={flash}
//           ref={cameraRef}
//           ratio='16:9'
//         >
//           <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 35 }}>
//             <Button icon={"retweet"} onPress={() => {
//               setType(type === CameraType.back ? CameraType.front : CameraType.back);
//             }} />
//             <Button icon={"flash"} onPress={() => {
//               setFlash(flash === Camera.Constants.FlashMode.off
//                 ? Camera.Constants.FlashMode.torch
//                 : Camera.Constants.FlashMode.off);
//             }} />
//           </View>
//         </Camera>
//         : <Image source={{ uri: image }} style={styles.camera} />
//       }
//       <View>
//         {image ?
//           <View style={styles.BottomButtons}>
//             <Button
//               title={"Re-take"}
//               icon={"retweet"}
//               onPress={() => setImage(null)}
//             />
//             <Button
//               title={"Save & Predict"}
//               icon="check"
//               onPress={() => {
//                 saveImage();
//                 uploadImage(image);
//               }}
//             />
//           </View>
//           :
//           <Button
//             title={"Take a picture"}
//             icon="camera"
//             onPress={takePicture}
//           />
//         }
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000",
//     justifyContent: "center",
//     paddingBottom: 20,
//   },
//   camera: {
//     flex: 1,
//     borderRadius: 30
//   },
//   BottomButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 50
//   }
// });

// export default App;











import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from "expo-media-library";
import Button from './src/components/Button.jsx';

const App = () => {
  // Permisos de la cámara
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  // Estado de la imagen
  const [image, setImage] = useState(null);
  // Tipo de cámara
  const [type, setType] = useState(Camera.Constants.Type.back);
  // Flash
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  // Referencia de la cámara
  const cameraRef = useRef(null);

  // Solicitar permisos de la cámara y de la biblioteca de medios
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  // Función para tomar una foto
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      setImage(source);
      console.log(source);
    }
  };

  // Función para subir la imagen al servidor
  const uploadImage = async () => {
    if (image) {
      const formData = new FormData();
      formData.append('file', {
        name: 'photo.jpg',
        type: 'image/jpeg',
        uri: image,
      });

      try { //consumo el servicio web
        const response = await fetch('http://192.168.204.97:5000/predict', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const result = await response.text();
        Alert.alert("Resultado de la Predicción", result);
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Hubo un problema al subir la imagen.");
      }
    }
  };

  // Función para guardar la imagen
  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        await uploadImage();
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  // Verificar permisos de la cámara
  if (hasCameraPermission === false) {
    return <Text>No access to the camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ?
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
          ratio='16:9'
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 35 }}>
            <Button icon={"retweet"} onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }} />
            <Button icon={"flash"} onPress={() => {
              setFlash(flash === Camera.Constants.FlashMode.off 
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off );
            }} />
          </View>
        </Camera>
      : <Image source={{ uri: image }} style={styles.camera} />}
      <View>
        {image ?
          <View style={styles.bottomButtons}>
            <Button title={"Re-take"} icon={"retweet"} onPress={() => setImage(null)} />
            <Button title={"Save"} icon="check" onPress={saveImage} />
          </View>
        :
          <Button title={"Take a picture"} icon="camera" onPress={takePicture} />
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    paddingBottom: 20,
  },
  camera: {
    flex: 1,
    borderRadius: 30,
  },
  bottomButtons: {
    flexDirection: "row", 
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
});

export default App;
