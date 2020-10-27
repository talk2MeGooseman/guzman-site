import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="nes-container left">
        <p>Erik Guzman Codes</p>
      </header>
      <section class="nes-container is-dark chat-container ">
        <section class="message-list">
          <section class="message -right">
            <div class="nes-balloon from-right is-dark">
              <p>Hey stranger my name in Erik Guzman and welcome to my comfy little corner of the the internet.</p>
            </div>
            <div className="right">
              <img className="nes-avatar is-large" alt="Guzman Avatar" src="https://imgur.com/gVPbr9s.jpg" style={ {'image-rendering': 'pixelated'} }/>
            </div>
          </section>
          <section class="message -left">
            <div class="nes-balloon from-left is-dark">
              <p>Here you will find a little information about me and what I do.</p>
            </div>
            <div className="left">
              <img className="nes-avatar is-large" alt="Guzman Avatar" src="https://imgur.com/gVPbr9s.jpg" style={ {'image-rendering': 'pixelated'} }/>
            </div>
          </section>
        </section>
      </section>
      <h1>To be continued...</h1>
    </div>
  );
}

export default App;
