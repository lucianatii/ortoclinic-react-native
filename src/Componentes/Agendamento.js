import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Agendamento extends Component {

    verificarExcluir() {
        if (this.props.excluir) {
            return (
                <View style={{ flex: 1 }}>
                    {/*}<Button title="Excluir" onPress={() => {this.props.excluir(this.props.id)}}></Button>*/}
                    <Icon
                        name="trash-o"
                        size={20}
                        marginLeft={50}
                        color='#0088b2'
                        onPress={() => { this.props.excluir(this.props.id) }} />
                </View>)
        }
    }



    render() {
        return (
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ height: 200, marginRight: 10 }}
                        source={{ uri: this.props.imagem }}
                    />
                </View>
                <View style={{ flex: 1 }}>

                    <Text style={estilos.titulo}>Nome:</Text><Text style={estilos.texto}> {this.props.nome} </Text>
                    <Text style={estilos.titulo}>Endereço:</Text><Text style={estilos.texto}> {this.props.endereco} </Text>
                    <Text style={estilos.titulo}>Procedimento:</Text><Text style={estilos.texto}> {this.props.procedimento}</Text>
                    <Text style={estilos.titulo}>Tipo:</Text><Text style={estilos.texto}>{this.props.tipo} </Text>
                    <Text style={estilos.titulo}>Data:</Text><Text style={estilos.texto}>{this.props.data} </Text>

                </View>

                {this.verificarExcluir()}
            </View>
        )
    }
}
const estilos = StyleSheet.create({
    titulo: { color: '#0088b2', fontSize: 16, fontWeight: 'bold' },
    texto: { color: '#00bfff', fontSize: 16, }
})