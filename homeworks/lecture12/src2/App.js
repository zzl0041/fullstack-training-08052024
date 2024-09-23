import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(<div>
      <header>header</header>
      <nav className='top'>
      <nav className='left'>aside</nav>
      <nav className='right'>right</nav>
      </nav>
      <section>section</section>
      <footer>footer</footer>
    </div>)
  }
}

export default App;
