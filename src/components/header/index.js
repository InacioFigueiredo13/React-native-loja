import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={estilo.header}>
            <TouchableOpacity>
                <Ionicons name="menu" size={35} color="white" />
            </TouchableOpacity>


            <Text style = {estilo.Texto}> FARMÁCIA </Text>
            
            <TouchableOpacity>
                <Ionicons name="cart" size={35} color="white"/>
            </TouchableOpacity>
        </View>

    );
}

const estilo = StyleSheet.create({
    header:{
        backgroundColor:'#DF0101',
        width:'100%',
        padding: 15,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 10

    },
    Texto:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        textAlign: 'center',
        fontFamily: 'Marvel',
        fontStyle: 'normal',
    },
})