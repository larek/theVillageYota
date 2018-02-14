import React from 'react';

export default ({state, back, front, slug, toggle}) => {
  return(
    <div>
      <img 
        src={state[slug] ? 'http://reports.larek.pro/theVillageYota/public/images/' + back : 'http://reports.larek.pro/theVillageYota/public/images/' + front} 
        data-slug={slug}
        onMouseDown={toggle} 
      />
      <img src={'http://reports.larek.pro/theVillageYota/public/images/' + back} style={{display:'none'}} alt=""/>
    </div>
  );
}