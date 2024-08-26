import { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome'


export default class Footer extends Component {
    render() {
        return (
            <View>
                <View style={estilo.barraF}>

                    
                    <Text></Text>

                    <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <View style={estilo.marcador} /><Text style={estilo.linksF}>PRIVACIDADE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={estilo.linksF}>TERMOS DE USO</Text><View style={estilo.marcador} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', padding: 4 }}>SIGA A ORTOCLINIC</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon
                            name="instagram"
                            size={30}
                            margin={3}
                            color='white'
                            onPress={() => { "https://instagram.com/senac.santoandre" }} />

                        <Icon
                            name="facebook"
                            size={30}
                            margin={3}
                            color='white'
                            onPress={() => { "https://facebook.com/senaceadoficial" }} />

                        <Icon
                            name="whatsapp"
                            size={30}
                            margin={3}
                            color='white'
                            onPress={() => { "https://api.whatsapp.com/send?phone=551140901030" }} />
                    </View>
                    <Text></Text>
                    <View>
                        <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>RUA ORTOCLINIC, 80 - SÃO PAULO/SP - ©Todos os Direitos Reservados</Text>
                    </View>
                    <Text></Text>
                </View>

            </View>

        )
    }
}

const estilo = StyleSheet.create({


    barraF: {
        backgroundColor: 'deepskyblue',
    },


    linksF: {
        color: '#0088b2',
        fontFamily: 'Rubik-Regular',
        fontSize: 16
    },

    marcador: {
        height: 18,
        width: 3,
        backgroundColor: 'white',
        margin: 3
    },

    titulo: {
        textAlign: 'center',
        fontFamily: 'Rubik-Regular',
        fontSize: 22,
        color: 'deepskyblue',
        margin: 25,

    },


})


