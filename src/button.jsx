import React from 'react';

export default class Button extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <img 
          src={this.props.state[this.props.slug] ? './images/' + this.props.back : './images/' + this.props.front} 
          data-slug={this.props.slug}
          onMouseDown={this.props.toggle} 
        />
        <img src={'./images/' + this.props.back} style={{display:'none'}} alt=""/>
      </div>
    );
  }
}