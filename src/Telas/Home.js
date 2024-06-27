import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import Menu from '../Componentes/Menu';
import Footer from '../Componentes/Footer';

export default function Home({ navigation }) {

    return (
        <View>
            <ScrollView>
                <Menu />
                <Text></Text>
                <Text></Text>

                <View style={estilos.barra}>


                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text></Text>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}> Nossos Procedimentos </Text>
                    </View>
                    <Text></Text>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={estilos.espaco} onPress={() => navigation.navigate('Harmonizacao')}>
                                <View>
                                    <Image style={{ width: 200, height: 120, borderRadius: 6 }} source={require('../img/c1.jpg')} />
                                </View>
                                <View>
                                    <Text style={estilos.deco}>HARMONIZAÇÃO</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={estilos.espaco} onPress={() => navigation.navigate('Ortodontia')}>
                                <View>
                                    <Image style={{ width: 200, height: 120, borderRadius: 6 }} source={require('../img/d1.jpg')} />
                                </View>
                                <View>
                                    <Text style={estilos.deco}>ORTODONTIA</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <Text></Text>

                        <View style={{ flexDirection: 'row' }}>

                            <TouchableOpacity style={estilos.espaco} onPress={() => navigation.navigate('Protese Dentária')}>
                                <View>
                                    <Image style={{ width: 200, height: 120, borderRadius: 6 }} source={require('../img/e1.jpg')} />
                                </View>
                                <View>
                                    <Text style={estilos.deco}>PRÓTESE DENTÁRIA</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={estilos.espaco} onPress={() => navigation.navigate('Clareamento')}>
                                <View>
                                    <Image style={{ width: 200, height: 120, borderRadius: 6 }} source={require('../img/f1.jpg')} />
                                </View>
                                <View>
                                    <Text style={estilos.deco}>CLAREAMENTO</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <Text></Text>

                        <View style={{ flexDirection: 'row' }}>

                            <TouchableOpacity style={estilos.espaco} onPress={() => navigation.navigate('Facetas em Resina')}>
                                <View>
                                    <Image style={{ width: 200, height: 120, borderRadius: 6 }} source={require('../img/g1.jpg')} />
                                </View>
                                <View>
                                    <Text style={estilos.deco}>FACETAS EM RESINA</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={estilos.espaco} onPress={() => navigation.navigate('Ortopediatria')}>
                                <View>
                                    <Image style={{ width: 200, height: 120, borderRadius: 6 }} source={require('../img/h1.jpg')} />
                                </View>
                                <View>
                                    <Text style={estilos.deco}>ORTOPEDIATRIA</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <Text></Text>

                </View>
                <Text></Text>


                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#0088b2' }}> Nossos Diferenciais </Text>
                </View>
                <Text></Text>

                <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                    <View>
                        <Image source={require('../img/icones/ci.png')} />
                        <Text style={estilos.diferenciais}> Cuidado</Text>
                        <Text style={estilos.diferenciais}> Humanizado</Text>
                    </View>
                    <View>
                        <Image source={require('../img/icones/od.png')} />
                        <Text style={estilos.diferenciais}> Tecnologia</Text>
                        <Text style={estilos.diferenciais}> de Ponta</Text>
                    </View>
                    <View>
                        <Image source={require('../img/icones/pi.png')} />
                        <Text style={estilos.diferenciais}> Pagamento</Text>
                        <Text style={estilos.diferenciais}> Facilitado</Text>
                    </View>
                </View>
                <Text></Text>
                <Text></Text>
                <Footer />


                <Text></Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Listagem')} >
                        <Text style={{ fontSize: 16, color: '#0088b2' }}>ACESSAR LISTAGEM DE AGENDAMENTOS</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}

const estilos = StyleSheet.create({

    barra: {
        backgroundColor: 'deepskyblue',

        verticalAlign: 'middle',
        justifyContent: 'center',
        alignContent: 'center',
    },

    diferenciais: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0088b2'
    },

    deco: {
        backgroundColor: '#0cb2e9',
        fontSize: 16,
        color: 'white',
        padding: 6,
        borderRadius: 4,
        borderColor: '#0088b2',
        borderWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 5,

    },

    espaco: {
        margin: 3
    },

})

