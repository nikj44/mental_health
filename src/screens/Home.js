import React from 'react'
import { View, Text, ImageBackground, Image, StatusBar, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { eleData } from '../data/eledata';
import { useSelector, useDispatch } from 'react-redux';
import { setStage, setBStyle } from '../redux/actions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;       

const Home = () => {

    const { stage, bstyle } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const colorStyle = {
        color: '#9077'
    }
    return (
        <View style={{flex: 1}}>
        <StatusBar 
            backgroundColor='#75cee0'
        />
        <ImageBackground source={require('../assets/background.png')} style={{flex:1,}} >
        <View style={{flex: 5,}}>
            <View style={{alignItems: 'center', alignSelf: 'center', flex: 1, }}>
             <TouchableOpacity onPress={()=>console.log('ele clicked')}>
             <Image source={eleData[stage - 1].source} style={{width: eleData[stage - 1].width, height: eleData[stage - 1].height, marginTop: eleData[stage - 1].marginTop}} onPress={()=>console.log('sdsd')}  />
             </TouchableOpacity>
            </View>
        </View>
        <View style={{flex: 1, justifyContent: 'space-evenly', flexDirection: 'row', }}>
            <Icon 
                name='meditation' 
                size={45}
                style={[styles.icons, bstyle && {color: '#9077'} ]} 
                onPress={()=>bstyle ? dispatch(setBStyle(null)) : dispatch(setBStyle(1))} />
            <Icon 
                name='notebook' 
                size={45} 
                style={styles.icons}
                onPress={()=>dispatch(setStage(3))} />
            <Icon 
                name='phone-classic' 
                size={45} 
                style={styles.icons}
                onPress={()=>dispatch(setStage(4))} />
        </View>
        </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    icons: {
        borderWidth: 1,
        height: 70,
        width: 70,
        padding: windowWidth/30,
        borderRadius: 10,
        backgroundColor: '#f4f3a8',
        color: '#7ea72d',
    }
})

export default Home


