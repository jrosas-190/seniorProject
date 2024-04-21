import {View,Text} from 'react-native';
import React from 'react';
import {Marker} from 'react-native-maps';

const CustomMarker = ({foodv}) => {
    return (
        <Marker
          coordinate={{ latitude: foodv.latitude ,longitude: foodv.longitude}}
          title = {foodv.title}
          
          >
            
            <View style= {{
              backgroundColor :'white',
              padding: 5,
              paddingHorizontal: 10,
              borderWidth:1,
              borderColor: 'gray',
              borderRadius: 20,
               }}>
               <Text style={{fontFamily: 'InterBold'}}>{foodv.title}</Text>
            </View>
        
         </Marker>
    )

}

export default CustomMarker