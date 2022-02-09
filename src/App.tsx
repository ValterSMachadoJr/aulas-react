import React from 'react';
import './App.css';
import {View1} from 'components/view1';
import {View2} from 'components/view2';

function App() {
  return (
    <div style={{backgroundColor: 'yellow'}}>
      <View1 displayText="Texto qualquer">
       <View2/>
       <View2/>
       <View2/>
       <View2/>
       
       <div>texto</div>
       <View2/>
      </View1>
      <View2/>
      
    </div>
  );
}

export default App;
