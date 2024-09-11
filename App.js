import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Alert, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const [passos, setPassos] = useState(0); // Usado para o contador de passos
  const [segundos, setSegundos] = useState(0); // Usado para a contagem de segundos
  const [treinoIniciado, setTreinoIniciado] = useState(false); // Controle se o treino está ativo ou não

  // Função que será disparada ao pressionar o botão de treino
  const iniciarTreino = () => {
    Alert.alert('Treino Iniciado');
    setTreinoIniciado(true); // Inicia o treino e a contagem de tempo
  };

  // Função que será disparada ao pressionar o botão de lembrete
  const definirLembrete = () => {
    Alert.alert('Lembrete Definido!');
  };

  // Hook useEffect para iniciar e parar a contagem de segundos
  useEffect(() => {
    let intervalo;
    if (treinoIniciado) {
      intervalo = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 1000);
    }
    return () => clearInterval(intervalo); // Limpa o intervalo quando o treino for parado ou o componente desmontado
  }, [treinoIniciado]);

  return (
    <SafeAreaView style={styles.areaSegura}>
      <ScrollView style={styles.container}>
        
        {/* Componente de Texto */}
        <View style={styles.containerTexto}>
          <Text style={styles.titulo}>Monitor de Atividades Diárias</Text>
          <Text style={styles.subtitulo}>Acompanhe seus passos, treinos e muito mais!</Text>
        </View>

        {/* Botão para iniciar o treino */}
        <View style={styles.containerBotao}>
          <Button title="Iniciar Treino" color="#28a745" onPress={iniciarTreino} />
        </View>

        {/* Contador de passos (calculadora simples) */}
        <View style={styles.containerContador}>
          <Text style={styles.textoContador}>Passos Hoje: {passos}</Text>
          <Button title="Adicionar Passo" color="#007bff" onPress={() => setPassos(passos + 1)} />
        </View>

        {/* Botão TouchableOpacity para configurar um lembrete */}
        <View style={styles.containerTouchable}>
          <TouchableOpacity style={styles.botaoTouchable} onPress={definirLembrete}>
            <Text style={styles.textoTouchable}>Definir Lembrete</Text>
          </TouchableOpacity>
        </View>

        {/* Componente de View para mostrar as horas ativas */}
        <View style={styles.containerHorasAtivas}>
          <Text style={styles.textoHorasAtivas}>Total de Horas Ativas: 2 hrs</Text>
        </View>

        {/* Contador de tempo do treino */}
        <View style={styles.containerTempo}>
          <Text style={styles.textoTempo}>Tempo de Treino: {segundos} segundos</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 10,
  },
  containerTexto: {
    margin: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  containerBotao: {
    margin: 10,
  },
  containerContador: {
    margin: 10,
    alignItems: 'center',
  },
  textoContador: {
    fontSize: 18,
    marginVertical: 10,
  },
  containerTouchable: {
    margin: 10,
    alignItems: 'center',
  },
  botaoTouchable: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
  },
  textoTouchable: {
    color: 'white',
    fontSize: 16,
  },
  containerHorasAtivas: {
    margin: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  textoHorasAtivas: {
    fontSize: 18,
    color: '#333',
  },
  containerTempo: {
    margin: 20,
    padding: 15,
    backgroundColor: '#d3f4ff',
    borderRadius: 10,
    alignItems: 'center',
  },
  textoTempo: {
    fontSize: 18,
    color: '#333',
  },
});

export default App;
