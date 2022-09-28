import React from 'react';
import ReactDOM from 'react-dom/client';
import {Counter} from './composants/counter/counter'
import{List} from './composants/todolist/todolist'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Counter>c'est un compteur</Counter> */}
    <List/>
    
  </React.StrictMode>
);



