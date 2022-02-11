import React, { useEffect, useState}from 'react';
import './App.css';
import {View1} from 'components/view1';
import {View2} from 'components/view2';
import { NodeAPI } from 'services/Service';
import { get } from 'mongoose';
import { AxiosResponse } from 'axios';
import { WelcomeMessageDTO } from 'classes/WelcomeMessageDTO';
import CreateUser from 'views/CreateUser'


function App() {
   const [message, setMessage] = useState<string>('');

   async function getWelcomeMessage() {

   try {
      const welcomeMessage:AxiosResponse<WelcomeMessageDTO> = await NodeAPI.get (
         `${process.env.REACT_APP_API_URL}`
        );
        console.log (welcomeMessage.data.mensagem);
        setMessage(welcomeMessage.data.mensagem)
   }catch(error){
      console.log(error);
      setMessage('Erro na chamada da API');
   }

   }

   useEffect(() => {
       console.log ('Renderizei meu computador');
     getWelcomeMessage();

         }, []);

 return <> 
  <CreateUser/> </>;
  
}
  
   
export default App;
