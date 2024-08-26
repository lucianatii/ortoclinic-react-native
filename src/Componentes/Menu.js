
import { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Menu extends Component {
    render() {
        return (
            <View>
                <View style={estilo.barra}>
                    <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', padding: 4 }}>Horário de Atendimento: das 08h às 18h</Text>
                </View>
                <Text></Text>
                <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', margin: 4 }}>

                
                    <View>
                        <Image style={{ margin: 5 }} source={require('../img/logoc.png')} />
                    </View>
                
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => { 
                        Linking.openURL('https://api.whatsapp.com/send?phone=551140901030')                       
                    }}>
                        <Icon
                        name="whatsapp"
                        size={30}                        
                        color='deepskyblue'
                        />
                        <Text style={estilo.contato}> Fale </Text>
                        <Text style={estilo.contato}> Conosco</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => { 
                        Linking.openURL('geo: -23.6612332,-46.5327553,17')
                       
                    }}>
                        <Icon
                        name="map-marker"
                        size={30}                        
                        color='deepskyblue'
                        />
                        <Text style={estilo.contato}> Como</Text>
                        <Text style={estilo.contato}> Chegar</Text>
                    </TouchableOpacity>

                    



                </View>
            </View>
        )
    }
}

const estilo = StyleSheet.create({

    barra: {
        backgroundColor: 'deepskyblue',
        height: 30,
        verticalAlign: 'middle',
        justifyContent: 'center',
        alignContent: 'center',
    },


    contato: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0088b2'
    },



})
