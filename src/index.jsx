import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import Button from './button.jsx';

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
    };
    
  }

  componentDidMount(){
    this.audio = [];
    this.props.data.forEach(item => {
      this.audio[item.slug] = new Audio();
      this.audio[item.slug].loop = true;
      this.audio[item.slug].preload = true;
      this.audio[item.slug].src = '/audio/' + item.audio;
    });
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
    });
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-4">
            <Button 
              front='vk-front-1.svg' 
              back='vk-back-1.svg' 
              slug='vk' 
              toggle={this.toggle} 
              state={this.state} 
            />
          </div>
          <div className="col-4">
            <Button 
              front='insta-front-1.svg'
              back='insta-back-1.svg'
              slug='insta'
              toggle={this.toggle}
              state={this.state} 
            />
          </div>
          <div className="col-4">
            <Button 
              front='fb-front-1.svg'
              back='fb-back-1.svg'
              slug='fb'
              toggle={this.toggle}
              state={this.state} 
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Button 
              front='youtube-front-1.svg'
              back='youtube-back-1.svg'
              slug='youtube'
              toggle={this.toggle}
              state={this.state} 
            />
            <Button 
              front='viber-front-1.svg'
              back='viber.svg'
              slug='viber'
              toggle={this.toggle}
              state={this.state} 
            />
          </div> 
          <div className="col-4">
            <Button 
              front='yota-front-1.svg'
              back='yota-back-1.svg'
              slug='yota'
              toggle={this.toggle}
              state={this.state} 
            />
          </div>
          <div className="col-4">
            <Button 
              front='whatsapp-front-1.svg'
              back='whatsapp-back-1.svg'
              slug='whatsapp'
              toggle={this.toggle}
              state={this.state} 
            />
            <Button 
              front='twitter-front-1.svg'
              back='twitter-back-1.svg'
              slug='twitter'
              toggle={this.toggle}
              state={this.state} 
            />
          </div> 
        </div>
        <div className="row">
          <div className="col-4">
            <Button 
              front='telegram-front-1.svg'
              back='telegram-back-1.svg'
              slug='telegram'
              toggle={this.toggle}
              state={this.state} 
            />
          </div>
          <div className="col-4">
            <Button 
              front='ok-front-1.svg'
              back='ok-back-1.svg'
              slug='ok'
              toggle={this.toggle}
              state={this.state} 
            />
          </div>
          <div className="col-4">
            <Button 
              front='skype-front-1.svg'
              back='skype-back-1.svg'
              slug='skype'
              toggle={this.toggle}
              state={this.state} 
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App data={data}/>, document.getElementById('app'));