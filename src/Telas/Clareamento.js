
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default function Clareamento({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Image style={{ width: 450, height: 300, borderRadius: 6, paddingBottom: 10 }} source={require('../img/f1.jpg')} />
      </View>
      <Text></Text>

      <View style={{ flexDirection: 'row' }}>
        <View style={estilos.marcadorD} />
        <Text style={estilos.tituloD}>Clareamento</Text>
      </View>
      <View >
        <Text></Text>
        <Text style={estilos.textoD}>Lorem ipsum dolor sit amet. Ab quia adipisci et Quis laudantium eum cupiditate maiores et corrupti galisum est voluptatem provident ut eveniet officia. Ut asperiores numquam rem laudantium atque qui nisi aperiam. Ut harum similique et placeat odio est sapiente natus et totam aperiam vel corporis velit ut laboriosam ipsa. Aut dolorem aperiam a quisquam assumenda sed nostrum mollitia hic beatae ratione aut neque earum est neque rerum!</Text>
      </View>

      <View>
        <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Agendamentos')} >
          <Text style={{ fontSize: 16, color: "white" }}>AGENDAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const estilos = StyleSheet.create({

  tituloD: {
    color: '#0088b2',
    fontSize: 22,
    fontWeight: 'bold'
  },

  textoD: {
    color: 'black',
    fontSize: 18,
    textAlign: 'justify',
    margin: 20
  },

  marcadorD: {
    height: 24,
    width: 4,
    backgroundColor: 'deepskyblue',
    margin: 6

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


})