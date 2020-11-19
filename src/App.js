import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// C:\Users\Dell\reactwiththapa\google-keep\node_modules\bootstrap\dist\css\bootstrap.min.css
function App() {

  return (
    <>
      <Header />
      <CreateNote/>
      <Footer />
    </>
  );
}

export default App;
