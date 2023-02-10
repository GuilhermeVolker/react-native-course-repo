import React from "react";  
import { Text } from "react-native";
import Estilo from "./estilo";

//Math.floor(Math.random() * (max - min) ) + min;

export default (param)=>{

    let rand = Math.floor(Math.random() * (param.max - param.min))
    return (
        <Text style={Estilo.txtG}>
            o valor aleatório é {rand}
        </Text>
    )
}