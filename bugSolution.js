This solution uses the `cameraRef` object to check if the camera is ready before calling `takePictureAsync`. The `isReady` state variable tracks camera initialization.  The capture function is only enabled once the camera is ready.

```javascript
import React, { useState, useRef, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [isReady, setIsReady] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current && isReady) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log('Photo taken:', data);
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  const handleCameraReady = () => {
    setIsReady(true);
  };

  if (hasPermission === null) {
    return <View><Text>Requesting permissions...</Text></View>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef} onCameraReady={handleCameraReady}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 0.1, alignSelf: 'flex-end', margin: 20, backgroundColor: 'red' }} onPress={takePicture}>
            <Text style={{ color: 'white' }}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraComponent;
```