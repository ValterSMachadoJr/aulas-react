import React, { useEffect, useState}from 'react';
import './App.css';
import {View1} from 'components/view1';
import {View2} from 'components/view2';
import { NodeAPI } from 'services/Service';
import { get } from 'mongoose';
import { AxiosResponse } from 'axios';
import { WelcomeMessageDTO } from 'classes/WelcomeMessageDTO';

function App() {
   const [message, setMessage] = useState<string>('');

   async function getWelcomeMessage() {
    const welcomeMessage:AxiosResponse<WelcomeMessageDTO> = await NodeAPI.get (
     `${process.env.REACT_APP_API_URL}`
    );
    console.log (welcomeMessage.data.mensagem);
   }

   useEffect(() => {
       console.log ('Renderizei meu computador');
     getWelcomeMessage();

  }, []);

 return <> </>;
  
}
  
  
  
export default App;
