import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera'
import { CameraRoll } from '@react-native-camera-roll/camera-roll';


import Database from '../Database/Database';
import Agendamento from '../Componentes/Agendamento';
import Paciente from '../Models/Paciente';


const createSimpleAlert = () =>
    Alert.alert(
        "Sucesso!",
        "Agendamento realizado com sucesso!"
    );

export default class Agendamentos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Campo Vazio',
            endereco: 'Campo Vazio',
            procedimento: 'Campo Vazio',
            tipo: 'Campo Vazio',
            data: 'Campo Vazio',
            imagem: '',
            isVisible: false
        }
    }


    CadastrarBanco = (nome, endereco, procedimento, tipo, data, imagem) => {
        const banco = new Database();
        const paciente = new Paciente(null, nome, endereco, procedimento, tipo, data, imagem)
        banco.Inserir(paciente);
        onPress = { createSimpleAlert }
    }


    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
            this.setState({ imagem: data.uri })

            CameraRoll.saveToCameraRoll(data.uri)
            console.log("Imagem salva com sucesso!");
        }
    };



    render() {
        return (
            <ScrollView style={{ flex: 1 }}>

                <View style={styles.container}>
                    <View>
                        <Image source={require('../img/j.jpg')} />
                    </View>

                    <Text></Text>
                    <Text></Text>
                    <Text></Text>


                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permissão para usar a Câmera',
                            message: 'Precisamos da sua permissão para usar a câmera:',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancelar',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permissão para usar o Áudio',
                            message: 'Precisamos da sua permissão para usar o microfone:',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancelar',
                        }}
                        onGoogleVisionBarcodesDetected={({ barcodes }) => {
                            console.log(barcodes);
                        }}
                    />
                </View>

                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>




                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.botao} onPress={this.takePicture.bind(this)}>
                        <Text style={{ fontSize: 14, color: "white" }}>CAPTURAR IMAGEM </Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>


                <View style={{ justifyContent: "center", alignItems: "center" }}>

                    <TextInput style={styles.input} onChangeText={(valor) => { this.setState({ nome: valor }) }} placeholder='Paciente:' placeholderTextColor='#79d7f6' />
                    <TextInput style={styles.input} onChangeText={(valor) => { this.setState({ endereco: valor }) }} placeholder='Endereço:' placeholderTextColor="#79d7f6" />
                    <TextInput style={styles.input} onChangeText={(valor) => { this.setState({ procedimento: valor }) }} placeholder='Qual é o procedimento?' placeholderTextColor="#79d7f6" />
                    <TextInput style={styles.input} onChangeText={(valor) => { this.setState({ tipo: valor }) }} placeholder='Particular ou Convênio?' placeholderTextColor="#79d7f6" />
                    <TextInput style={styles.input} onChangeText={(valor) => { this.setState({ data: valor }) }} placeholder='Data:' placeholderTextColor="#79d7f6" />
                    <Text></Text>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.botao}
                        onPress={() => {
                            this.setState({ isVisible: true });
                        }} >
                        <Text style={{ fontSize: 14, color: "white" }}>CONFIRMAR DADOS</Text>
                    </TouchableOpacity>
                    <Text></Text>

                </View>

                {/* MODAL --------------------*/}

                <View >
                    <Modal

                        animationType={'fade'}
                        transparent={false}
                        visible={this.state.isVisible}
                        onRequestClose={() => {
                            this.setState({ isVisible: false });
                        }}
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <View>
                                <Image source={require('../img/j.jpg')} />
                            </View>
                            <Text></Text>

                            <Text style={{ marginLeft: 20, marginRight: 20, textAlign: "center", fontSize: 14, fontWeight: 'bold', color: "#00bfff" }}>Confirme os dados e clique em "Agendar". Ou edite as informações clicando em "Retornar":</Text>

                            <Agendamento
                                nome={this.state.nome}
                                endereco={this.state.endereco}
                                procedimento={this.state.procedimento}
                                tipo={this.state.tipo}
                                data={this.state.data}
                                imagem={this.state.imagem}
                            />

                            <Text></Text>

                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                                <TouchableOpacity style={styles.botao} onPress={() => this.CadastrarBanco(this.state.nome, this.state.endereco, this.state.procedimento, this.state.tipo, this.state.data, this.state.imagem)} onPressIn={createSimpleAlert}>

                                    <Text style={{ fontSize: 14, color: "white" }} >AGENDAR </Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={styles.botao}
                                    onPress={() => {
                                        this.setState({ isVisible: false });
                                    }}>
                                    <Text style={{ fontSize: 14, color: "white" }}>RETORNAR </Text>
                                </TouchableOpacity>
                            </View>

                            <Text></Text>
                            <Text></Text>


                        </View>

                    </Modal>


                   {/*BOTAO AGENDAR
                    
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.botao} onPress={() => this.CadastrarBanco(this.state.nome, this.state.endereco, this.state.procedimento, this.state.tipo, this.state.data, this.state.imagem)}>
                        <Text style={{ fontSize: 14, color: "white" }}>AGENDAR </Text>
                    </TouchableOpacity>*/}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        flex: 1,
        height: 50,

    },
    preview: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 240,
        height: 40,
        marginTop: 100,

        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },

    input: {
        borderWidth: 1,
        borderColor: '#00bfff',
        borderRadius: 5,
        width: 280,
        color: "#00bfff",
        margin: 1
    },


    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00bfff',
        width: 180,
        height: 40,
        borderRadius: 5,
        margin: 3
    },
});