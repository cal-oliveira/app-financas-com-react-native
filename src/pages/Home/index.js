import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto internet',
        value: '300',
        date: '16/09/2023',
        type: 0 // 0 -> expensive. -> 1 balance
    },
    {
        id: 2,
        label: 'Pix cliente X',
        value: '2.000',
        date: '17/09/2023',
        type: 1 // 0 -> expensive. -> 1 balance
    },
    {
        id: 3,
        label: 'Salario',
        value: '5.000',
        date: '18/09/2023',
        type: 1 // 0 -> expensive. -> 1 balance
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Calebinho Oliveira'/>
      <Balance balance='1.000,00' expenses='-200,00'/>
      <Text style={styles.title}>Últimas movimentações</Text>

      <Actions />

      <FlatList 
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Movements data={item}/> }
      />  

      <StatusBar style="auto"   />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginRight: 14,
    marginLeft: 14
  }
});
