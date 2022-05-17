import { StatusBar } from 'react-native-web';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import Header from "./src/components/header";
import Categorias from "./src/components/categorias";
import Dados from "./api/dadosCategorias";
import Promocao from "./src/components/promocao"
import {ANTIALERGICOS} from "./api/dadosProdutos.js"
import {ANALGESICOS} from "./api/dadosProdutos.js"
import {INFANTIL} from "./api/dadosProdutos.js"
import {PERFUMES} from "./api/dadosProdutos.js"
import {COSMETICOS} from "./api/dadosProdutos.js"
import Produtos from "./src/components/produtos"

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />

      <Header>
      </Header>

      <Text style={estilo.tituloDiv}>
        Categorias
      </Text>

      <FlatList 
            horizontal={true}
            data={Dados}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Categorias
                  icone = {item.icone}
                  nome = {item.nome}
              />
            )}
      />

      

      <Promocao 
          produto={"Fralda Pampers"}
          imagem ={"pampers.jpg"}
      /> 

      <Text style={estilo.tituloProduto}>Antialérgicos</Text>
      <FlatList
            horizontal={true}
            data={ANTIALERGICOS}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Produtos
                  nome = {item.nome}
                  imagem = {item.imagem}
                  descricao = {item.descricao}
              />
            )}
      />

      <Text style={estilo.tituloProduto}>Analgesicos</Text>
      <FlatList
            horizontal={true}
            data={ANALGESICOS}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Produtos
                  nome = {item.nome}
                  imagem = {item.imagem}
                  descricao = {item.descricao}
              />
            )}
      />

      <Text style={estilo.tituloProduto}>Infantil</Text>
      <FlatList
            horizontal={true}
            data={INFANTIL}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Produtos
                  nome = {item.nome}
                  imagem = {item.imagem}
                  descricao = {item.descricao}
              />
            )}
      />

      <Text style={estilo.tituloProduto}>Perfumes</Text>
      <FlatList
            horizontal={true}
            data={PERFUMES}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Produtos
                  nome = {item.nome}
                  imagem = {item.imagem}
                  descricao = {item.descricao}
              />
            )}
      />
      
      <Text style={estilo.tituloProduto}>Cosméticos</Text>
      <FlatList
            horizontal={true}
            data={COSMETICOS}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Produtos
                  nome = {item.nome}
                  imagem = {item.imagem}
                  descricao = {item.descricao}
              />
            )}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloDiv:{
    color: '#FE2E2ECC',
    fontSize: 30,
    fontWeight: 700,
    marginTop: 0,
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Marvel-Bold',
    lineWeight: 36,
},
  tituloProduto:{
    color: "rgba(254, 46, 46, 0.8)",
    lineWeight: 36,
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 5,
    marginTop: 30,
  }
});
