import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='sport__header'>
      <h1 className='gradient__Text'>E-SPORTS - Embarque nesse mundo de Estratégia</h1>
      <div className='sport__header-container'>
        <div className='sport__header-description'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor sapien tellus, tristique blandit risus accumsan a. Suspendisse a leo tellus. Maecenas vel ligula a arcu pretium feugiat vel ac arcu. Integer at augue at justo lobortis semper vitae at ipsum. Integer blandit libero convallis semper tempus. Vivamus ante risus, scelerisque id eros vitae, rhoncus consequat est. Aenean id massa sit amet sapien laoreet eleifend ultricies eu arcu. Integer tincidunt nec metus sed sollicitudin. Vivamus eget mattis lectus, id dapibus nibh. Praesent euismod finibus vestibulum. Etiam sed est nec enim rutrum laoreet et eget mi. Quisque mattis dignissim elit, eu consequat lorem tincidunt nec. Proin id vulputate erat, eu bibendum lacus. Praesent hendrerit interdum massa consectetur laoreet.</p>
          <a href="https://www.lipsum.com/feed/html">https://www.lipsum.com/feed/html</a>
        </div>
        <div className='sport__header-animation'>
          <img src="https://source.unsplash.com/720x720/?Esports" alt="E-Sports" />
        </div>
      </div>
    </div>
  )
}

export default Header