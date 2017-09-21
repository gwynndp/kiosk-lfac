import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};
const MyFirstComponent = function() {
  return ce(
    'div',
    null,
    ce(MyTitle, { title: 'peru prop1', color: 'peru' }),
    ce(MyTitle, { title: 'rebeccapurple prop2', color: 'rebeccapurple' }),
    ce(MyTitle, { title: 'YellowGreen prop3', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'GreenYellow prop4', color: 'GreenYellow' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
