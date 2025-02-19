import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getStatus, uploadStatus } from '../config/asyncStorage';

function CameraScreen({ navigation }) {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState('');
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchStatuses = async () => {
      const storedStatuses = await getStatus();
      setStatuses(storedStatuses);
    };

    fetchStatuses();
  }, []);

  const cameraRef = useRef(null);
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current){
      const takePhoto = await cameraRef.current.takePictureAsync();
    setPhoto(takePhoto.uri);
  }
}

const uploadNewStatus = async () => {

  console.log('uploading new status')

  try {
    const newStatus = { author: 'ibrahim', photo };
    console.log("newStatus=========", newStatus)
    setStatuses((prev) => {
      const updatedStatuses = [...prev, newStatus];
      uploadStatus(updatedStatuses);
      return updatedStatuses;
    });
    console.log("statuses=========", statuses)

  } catch (error) {
    console.error(error);
  } finally {
    navigation.goBack();
  }
};




function toggleCameraFacing() {
  setFacing(current => (current === 'back' ? 'front' : 'back'));
}

return (
  <View style={styles.container}>
    {photo ? (<View style={styles.previewContainer}>

      <Image style={styles.preview} source={{ uri: photo }} />


      <View style={{ position: 'absolute', top: 50, left: 20, }}>
        <TouchableOpacity onPress={() => setPhoto(null)}>
          <Text style={styles.text}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>

        <TouchableOpacity style={styles.controlBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlBtn} onPress={uploadNewStatus}>
          <Ionicons name='send' color={'black'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
    ) : (<CameraView ref={cameraRef} style={styles.camera} facing={facing}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture} style={styles.captureBtn}>
          <Icon name="camerao" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </CameraView>)}
  </View>
);
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  message: { textAlign: 'center', paddingBottom: 10 },
  camera: { flex: 1 },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: { alignSelf: 'flex-end', alignItems: 'center' },
  captureBtn: { backgroundColor: 'black', padding: 15, borderRadius: 50 },
  text: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  previewContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative', },
  preview: { width: '100%', height: '100%', resizeMode: 'cover' },
  buttonRow: {
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#0e111c',
    width: '100%',
  },
  controlBtn: { backgroundColor: '#25D366', paddingHorizontal: 10, paddingVertical: 10, borderRadius: "100%" },
});


export default CameraScreen;