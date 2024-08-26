import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Menu from '../Componentes/Menu';
import Footer from '../Componentes/Footer';


export default class Sobre extends Component {
  render() {
    return (

      <View>
        <Menu />      

        <Image style={{ width: 400, height: 200, alignSelf: 'center' }} source={require('../img/b.jpg')} />
        <Text></Text>
        <Text style={estilo.titulo}>
          Sobre a Ortoclinic
        </Text>
      
        <Text style={{ fontSize: 16, textAlign: 'justify', margin: 5, color:'#0088b2' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, placerat mattis congue ac, porttitor non felis. Integer blandit erat turpis. Phasellus porta vestibulum nisl non blandit. Nulla a condimentum nibh. Nullam interdum nibh eu erat facilisis, at pulvinar ipsum vestibulum. Maecenas ut vestibulum ligula. Nulla facilisi. Integer id faucibus sapien, id eleifend lorem. Nam eros velit, finibus eget nunc vel, finibus imperdiet lacus. Quisque ultrices faucibus mattis.

        </Text>
        <Text></Text>

        <Footer />
      </View>


    )
  }
}



const estilo = StyleSheet.create({

  titulo: {
    textAlign: 'center',
  
    fontSize: 22,
    color: 'deepskyblue',
    

  },

})

