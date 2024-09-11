import './App.css';

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <header className='header'>Header</header>
        <nav className='nav'>Nav</nav>
        <div className='content'>
          <aside className='aside'>Aside</aside>
          <section className='section'>Section</section>
        </div>
        <footer className='footer'>Footer</footer>
      </div>
    );
  }
}

export default App;
