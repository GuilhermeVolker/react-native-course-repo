import React from "react";  
import { Text } from "react-native";  
import Estilo from './estilo'

export function Comp1(){
    return <Text style={Estilo.txtG}>Comp #01</Text>
}

export function Comp2(){
    return <Text style={Estilo.txtG} >Comp #02</Text>
}

export default function Comp(){
    return <Text style={Estilo.txtG} >Comp oficial</Text>
}

//export { Comp1, Comp2 }