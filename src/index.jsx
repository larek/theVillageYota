import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      fb: false,
      vk: false,
      insta: false,
      skype: false,
      telegram: false,
      youtube: false,
      viber: false,
      youta: false,
      whatsapp: false,
      twitter: false,
      ok: false,
    }
    
  }

  componentDidMount(){
    this.audio = [];
    this.props.data.forEach(item => {
      this.audio[item.slug] = new Audio();
      this.audio[item.slug].loop = true;
      this.audio[item.slug].preload = true;
      this.audio[item.slug].src = '/audio/' + item.audio;
    })
  }


  toggle(e){

    let slug = e.target.dataset.slug;
    if(this.state[slug]){
      this.audio[slug].pause();
      this.audio[slug].currentTime = 0;
    }else{
      this.audio[slug].play();
    }

    this.setState({
      [slug]: !this.state[slug]
    })
  }

  render(){
    return(
      <div>
          <div className="row">
            <div className="col-4">
                <img 
                  src={this.state.vk ? '/images/vk-back-1.svg' : '/images/vk-front-1.svg'} 
                  data-slug='vk'
                  onClick={this.toggle} 
                  alt="Vkontakte"
                />
            </div>
            <div className="col-4">
                <img 
                  src={this.state.insta ? '/images/insta-back-1.svg' : '/images/insta-front-1.svg'} 
                  data-slug='insta'
                  onClick={this.toggle} 
                  alt="Instagram"
                />
            </div>
            <div className="col-4">
                <img 
                  src={this.state.fb ? '/images/fb-back-1.svg' : '/images/fb-front-1.svg'} 
                  data-slug='fb'
                  onClick={this.toggle} 
                  alt="Facebook"
                />
            </div>
          </div>
          <div className="row">
              <div className="col-4">
                  <img 
                    src={this.state.youtube ? '/images/youtube-back-1.svg' : '/images/youtube-front-1.svg'} 
                    data-slug='youtube'
                    onClick={this.toggle}
                    alt="Youtube"
                  />
                  <img 
                    src={this.state.viber ? '/images/viber.svg' : '/images/viber-front-1.svg'} 
                    data-slug='viber'
                    onClick={this.toggle}
                    alt="Viber"
                  />
              </div> 
              <div className="col-4">
                  <img 
                    src={this.state.yota ? '/images/yota-back-1.svg' : '/images/yota-front-1.svg'} 
                    data-slug='yota'
                    onClick={this.toggle}
                    alt="Yota"
                  />
              </div>
              <div className="col-4">
                  <img 
                    src={this.state.whatsapp ? '/images/whatsapp-back-1.svg' : '/images/whatsapp-front-1.svg'} 
                    data-slug='whatsapp'
                    onClick={this.toggle}
                    alt="Whatsapp"
                  />
                  <img 
                    src={this.state.twitter ? '/images/twitter-back-1.svg' : '/images/twitter-front-1.svg'} 
                    data-slug='twitter'
                    onClick={this.toggle}
                    alt="Twitter"
                  />
              </div> 
          </div>
          <div className="row">
            <div className="col-4">
                <img 
                  src={this.state.telegram ? '/images/telegram-back-1.svg' : '/images/telegram-front-1.svg'} 
                  data-slug='telegram'
                  onClick={this.toggle} 
                  alt="Telegram"
                />
            </div>
            <div className="col-4">
                <img 
                  src={this.state.ok ? '/images/ok-back-1.svg' : '/images/ok-front-1.svg'} 
                  data-slug='ok'
                  onClick={this.toggle} 
                  alt="Odnoklassniki"
                />
            </div>
            <div className="col-4">
                <img 
                  src={this.state.skype ? '/images/skype-back-1.svg' : '/images/skype-front-1.svg'} 
                  data-slug='skype'
                  onClick={this.toggle} 
                  alt="Skype"
                />
            </div>
          </div>
      </div>
      )
  }
}

ReactDOM.render(<App data={data}/>, document.getElementById('app'));