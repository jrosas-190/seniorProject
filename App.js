import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import React from 'react';
import foodvendors from './assets/data/foodvendors.json';
import CustomMarker from './components/CustomMarker';


export default function App() {
  console.log(foodvendors);
  return (
    <View>
      {/* <Stack.Screen options= {{headerShown: false}}/> */}
      <MapView style={styles.map }
      initialRegion={{
        latitude: 34.05785,
        longitude: -117.82223,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
        {foodvendors.map((foodv) =><CustomMarker foodv={foodv}/>)}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create ({
  map: {
    width:'110%',
    height: '110%',

  }

}

)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


