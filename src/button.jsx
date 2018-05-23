import React from 'react';

export default ({state, back, front, slug, toggle}) => {
  return(
    <div>
      <img 
        src={state[slug] ? 'https://the-village-yota.ru/images/' + back : 'https://the-village-yota.ru/images/' + front} 
        data-slug={slug}
        onMouseDown={toggle} 
      />
      <img src={'https://the-village-yota.ru/images/' + back} style={{display:'none'}} alt=""/>
    </div>
  );
}
