import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import Button from './button.jsx';

class App extends React.Component{
  constructor(props){
    super(props);

    let audioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new audioContext();
    this.source = {};
    this.audioData = {};
    this.loopEnd = {};
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
    let _this = this;
    this.props.data.forEach(item => {
      this.getAudio('./audio/' + item.audio, r => {
          _this.loopEnd[item.slug] = item.loopEnd;
          _this.ctx.decodeAudioData(r, response => {
            _this.audioData[item.slug] = response;
          })
      });
    });
  }

  getAudio(src, callback){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.responseType = 'arraybuffer';
    xhr.send(null);
    xhr.onload = r => {
      callback(r.currentTarget.response);
    }
  }


  toggle(e){
    let slug = e.target.dataset.slug;
    if(this.state[slug]){
      this.source[slug].disconnect(this.ctx.destination);
      this.source[slug] = null;
    }else{
      this.source[slug] = this.ctx.createBufferSource();
      this.source[slug].buffer = this.audioData[slug];
      this.source[slug].connect(this.ctx.destination);
      this.source[slug].loop = true;
      // this.source[slug].loopEnd = this.audioData[slug].duration - this.loopEnd[slug];
      this.source[slug].loopEnd = 4;
      this.source[slug].start(this.ctx.currentTime);
    }

    this.setState({
      [slug]: !this.state[slug]
    });
  }

  changeRate(e){
    let slug = e.target.dataset.slug;
    this.source[slug].playbackRate.value = e.target.value;
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
              front='yota-front-2.svg'
              back='yota-back-2.svg'
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
