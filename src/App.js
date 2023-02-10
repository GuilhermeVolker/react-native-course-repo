import React from 'react'
import { View, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro'
import CompPadrao, {Comp1, Comp2} from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'

export default () => (
    <View style={style.App}>
       <Contador inicial={100} passo={13}/>
       
    {/*
        <Botao />
        <Titulo principal={'cadastro'} secundario={'tela de cadastro'}/> 
        <Aleatorio min={1} max={99}/>
        <MinMax min={3} max={30} />
        <CompPadrao />
        <Comp1/>
        <Comp2/>
        <Primeiro />
*/}
        </View>
)
    
    const style = StyleSheet.create({
        App: {
            
            flex: 1, // dizer que o componente pode crescer, igual ao flexGrow
            justifyContent: 'center',
            alignItems: 'center',
            padding:20
        },

    })

