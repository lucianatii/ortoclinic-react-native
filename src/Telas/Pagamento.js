import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Menu from '../Componentes/Menu';
import Footer from '../Componentes/Footer';


export default class Pagamento extends Component {
  render() {
    return (

      <View>
        <Menu />
        <Text></Text>
        <Text></Text>
        <Text></Text>

       

        <Image style={{ width: 350, height: 100, alignSelf: 'center' }} source={require('../img/i.jpg')} />
        <Text style={{ fontSize: 16, textAlign: 'justify', margin: 25, color: '#0088b2' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, placerat mattis congue ac, porttitor non felis. Integer blandit erat turpis. Phasellus porta vestibulum nisl non blandit. Nulla a condimentum nibh. Nullam interdum nibh eu erat facilisis, at pulvinar ipsum vestibulum. Maecenas ut vestibulum ligula. Nulla facilisi. Integer id faucibus sapien, id eleifend lorem. Nam eros velit, finibus eget nunc vel, finibus imperdiet lacus. Quisque ultrices faucibus mattis.

        </Text>

        <Text></Text>
        <Text></Text>
        <Text></Text>
        


        <Footer />
      </View>


    )
  }
}




