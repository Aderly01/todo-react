import React from "react";
import { APPUI } from "./AppUI";
import { TodoProvider } from '../todoContext'

/* const defaultTodos = [
  {text:'Terminar la entrega del cap 1 de tesis ',completed:true},
  {text:'Tomarse el medicamento',completed:false},
  {text:'Entrar a clases de tesis',completed:false},
  {text:'Jugar una partidita de Dota ',completed:false},
  {text:'Ver la serie en la noche ',completed:false},
  {text:'Jugar fri faier ',completed:false}
]; */



function App() {
  
  return  (
    <TodoProvider>
      <APPUI />
    </TodoProvider>
  );
}

export default App;
