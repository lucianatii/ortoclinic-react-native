import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';



import Database from '../Database/Database'
import Agendamento from '../Componentes/Agendamento';


export default class Listagem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaAgendamentos: []
        }
        this.ListarBanco();
    }

    ListarBanco = () => {
        const banco = new Database();
        banco.Listar().then(lista => { this.setState({ listaAgendamentos: lista }) })
    }

    ExcluirBanco = (id) => {
        const banco = new Database();
        banco.Remover(id);
        this.ListarBanco();
    }



    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>

                    <View style={estilo.container}>
                        <Image source={require('../img/j.jpg')} />

                    </View>
                    <Text></Text>

                    <Text style={{ marginLeft: 20, marginRight: 20, textAlign: "center", fontSize: 20, color: '#0088b2' }}>Procedimentos Agendados:</Text>
                    <Text></Text>
                    {
                        this.state.listaAgendamentos.map(
                            item => (
                                <Agendamento
                                    key={item.id}
                                    id={item.id}
                                    nome={item.nome}
                                    endereco={item.endereco}
                                    procedimento={item.procedimento}
                                    tipo={item.tipo}
                                    data={item.data}
                                    imagem={item.imagem}
                                    excluir={this.ExcluirBanco}
                                />
                            )
                        )
                    }
                </ScrollView>
            </View>
        )
    }
}

const estilo = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})