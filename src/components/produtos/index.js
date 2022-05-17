import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export default function Produtos({nome, imagem, descricao}){
    return(
        <TouchableOpacity style={estilo.container}>
            <Image
            style={estilo.images}
            source={require(`./../../imagens/produtos/${imagem}`)}
            />

            <Text style={estilo.nome}>{nome}</Text>
            <Text style={estilo.descricao}>{descricao}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    container: {
        borderRadius: 20,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: 200,
        height: 250,
        marginLeft: 8,
        backgroundColor: "rgba(223, 1, 1, 0.65)",
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 1,
        marginBottom: 20,
        
    },
    nome:{
        alignItems: "right",
        color: '#fff',
        fontSize: 15,
        marginLeft: 110,
        fontWeight: "bold",
        marginTop: 15

    },
    descricao: {
        alignItems: "right",
        color: "#ffff",
        fontSize: 11,
        marginLeft: 120,
        marginBottom: 10,
        
    },
    images: {
        width: "50%",
        height: "50%",
        borderRadius: 25,
        marginTop: 3,

    }
});
