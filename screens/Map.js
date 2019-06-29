import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

const {height, width} = Dimensions.get('screen');
const parkings = [
    {
        id:1,
        title: 'Зогсоол 1',
        price:5,
        rating: 4.2,
        spots: 10,
        free: 13
    },
    {
        id:2,
        title: 'Зогсоол 2',
        price:3,
        rating: 4,
        spots: 20,
        free: 10
    },
    {
        id:3,
        title: 'Зогсоол 3',
        price:5,
        rating: 5,
        spots: 30,
        free: 12
    },
];

export default class Map extends Component {

    renderHeader(){
        return(
            <View style={styles.header}> 
                <Text>Header</Text>
            </View>
        )
    }

    renderParking(item){
        return(
            <View key={`parking-${item.id}`} style={styles.parking}>
                <Text>{item.title}</Text>
            </View>
        )
    }

    renderParkings(){
        return(
            <ScrollView horizontal={true} contentContainerStyle={styles.parkings}> 
               {parkings.map(parking => this.renderParking(parking))}
            </ScrollView>
        )
    }

    render() {
    return (
      <View style={styles.container}> 

        {this.renderHeader()}

         <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
    }}
    style = {styles.map}
  />

        {this.renderParkings()}

      </View>   
    )
  } 
}

const styles = StyleSheet.create({

    container:{
        flex: 1, 
        backgroundColor:'#fff',
    },

    header:{
        flex:0.5,
        justifyContent:'center',
    },

    map:{
        flex:3,
    },

    parkings:{
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 0,
    },

    parking:{
        width: width - (24*2),
        backgroundColor: 'white',
        borderRadius: 0,
        padding: 12,
        marginHorizontal: 24,
    }
})