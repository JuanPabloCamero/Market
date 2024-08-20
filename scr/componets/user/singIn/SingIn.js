import React from "react";
import {View, Text, Image, Button, TextInput} from "react-native";
import styles from "../../../styles/singInStyles";

const login = ({navigation}) =>{
    return(
        <View style={loginStyles.container}>
            <Text style={loginStyles.title} >Iniciar Sesión</Text>
            <TextInput placeholder="Correo electrónico" style={loginStyles.input}/>
            <TextInput placeholder="Contraseña" secureTextEntry style={loginStyles.input}/>
            <Button title="Ingresar" onPress={() => navigation.navigate('Products')}/>
        </View>
    );
};

export default login;