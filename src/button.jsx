import React from 'react';

export default ({state, back, front, slug, toggle}) => {
  return(
    <div>
      <img 
        src={state[slug] ? '/images/' + back : '/images/' + front} 
        data-slug={slug}
        onMouseDown={toggle} 
      />
      <img src={'/images/' + back} style={{display:'none'}} alt=""/>
    </div>
  );
}
