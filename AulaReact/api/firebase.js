//conectando o banco api com o banco do firebase 

//importa a função responsável por inicializar o firebase
import { initializeApp } from "firebase/app";

//importa a função responsável por conectar o realtime database
import { getDatabase } from "firebase/database";

//configurações do projeto no Firebase 
//
//essas informçãoes são geradas automaticamente pelo Firebase quando registramos a nossa aplicação
//
//elas funcionam como um endereço que permite que a nossa aplicação encontre e se conecte com o banco de dados na nuvem
const firebaseConfig = {

    //identificador único do aplicativo
 apiKey: "AIzaSyA746Zs_sy7UQLcQDGj91oG8-z7bAGjL5A",

 //domínio de autenticação do projeto
  authDomain: "tempoprevisao-59979.firebaseapp.com",
  
  //endereço do realtime database
  databaseURL: "https://tempoprevisao-59979-default-rtdb.firebaseio.com",

  //identificador do projeto do firebase
  projectId: "tempoprevisao-59979",

  //serviço de armazenamento de arquivos
  storageBucket: "tempoprevisao-59979.firebasestorage.app",

  //identificador responsável pela troca de mensagens
  messagingSenderId: "412565254143",

  //identificador único da aplicação web
  appId: "1:412565254143:web:9c251c3f9e2fafecd5c1ca",

  //identificador utilizado pelo Google Analytics
  measurementId: "G-S83H8ZD89G"
}

//inicialização do firebase utilizando as configurações acima
const app = initializeApp(firebaseConfig);

// Cria uma conecxão com o meu Realtime Database 
// A partir deste objeto será possível: 
// . Ler dados
// . Salvar dados
// . Atualizar dados
// . Excluir dados
const db = getDatabase(app);

//exporta a conexão para que ela possa ser utilizada em outros arquivos, como o server.js
export default db;