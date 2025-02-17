import { useState } from 'react';

import { Header } from './components/Header/Header';
import { Proyectos } from './components/Proyectos/Proyectos';
import { Posteo } from './components/Posteo/Posteo';
import './App.css'

function App() {

  
  let onSubmitForm = (data) => {
    setPost(data);
  };
  
  const [post, setPost] = useState({});
  
  return (
    <>
    <Header/>
    <Proyectos newProyect = {post}/>
    <Posteo onSubmit={onSubmitForm}/>
    </>
  );
}

export default App;