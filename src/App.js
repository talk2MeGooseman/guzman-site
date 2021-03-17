import './App.css';

const Avatar = () => <img className="nes-avatar is-large is-rounded" alt="Guzman Avatar" src="https://imgur.com/gVPbr9s.jpg" style={ {'image-rendering': 'pixelated'} }/>
const Stat = ({ name, value }) => <div><span className="stat-name nes-text is-primary">{name}</span><span>{value}</span></div>

const SocialIcon = ({ icon, url }) => <a style={{ display: 'block' }} href={url} target="_blank" rel="noreferrer" aria-label={icon}><i className={["nes-icon", icon].join(' ')}></i></a>

const expEarned = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const end = new Date(currentYear, 8, 10)
  if( today.getTime() > end.getTime()) {
    end.setFullYear(end.getFullYear()+1);
  }

  const diff = end.getTime() - today.getTime();
  return (Math.floor(diff/(1000*60*60*24))/ 365) * 100;
}

function App() {
  return (
    <div className="App">
      <header>
        <div className="header nes-container left is-dark">
          <h1 className="nes-text is-primary">Guzman Codes</h1>
        </div>
      </header>
      <div className="contents">
        <section className="nes-container with-title">
          <p className="title">Character Stats</p>
          <div className="stats">
            <div>
              <Avatar />
              <div className="social-list">
                <SocialIcon icon="twitch" url="https://twitch.com/talk2megooseman" />
                <SocialIcon icon="twitter" url="https://twitter.com/talk2megooseman" />
                <SocialIcon icon="github" url="https://github.com/talk2megooseman" />
                <SocialIcon icon="youtube" url="https://www.youtube.com/channel/UCbRBHmorTXJniAcPXSp3BUQ" />
                <SocialIcon icon="linkedin" url="https://www.linkedin.com/in/erik-guzman-100/" />
                <SocialIcon icon="medium" url="https://dev.to/talk2megooseman" />
              </div>
            </div>
            <div className="character-details" style={{width: "100%"}}>
              <h3>Erik Guzman</h3>
              <div className="flex">
                Exp <progress style={{ height: "1rem"}} class="nes-progress is-primary" value={expEarned()} max="100"></progress>
              </div>
              <Stat name="Lv" value="36" />
              <Stat name="Job Classes" value="" />
              <div class="lists">
                <ul class="nes-list is-circle">
                  <li>Husband</li>
                  <li>Full Stack Web Developer</li>
                  <li>Twitch Steamer</li>
                  <li>Mentor</li>
                </ul>
              </div>
              <Stat name="Skills" value="" />
              <div class="lists">
                <ul class="nes-list is-circle">
                  <li>Ruby / Ruby on Rails</li>
                  <li>JavaScript / TypeScript</li>
                  <li>Node.js</li>
                  <li>ReactJS</li>
                  <li>PostgresSQL</li>
                  <li>Heroku</li>
                  <li>Elixir / Phoenix Framework</li>
                  <li>Dokku</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
