import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (param)=>{
    console.warn(param)
    return(
        <Text style={estilo.txtG}>
            O valor {param.max} é maior que o valor de {param.min}
            </Text>
    )
}