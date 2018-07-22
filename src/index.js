import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return(
    <h2>Hello with your new component!{ props.newHeader }</h2>
  )
}
ReactDOM.render(
  <App newHeader="Let's add this to the h2"/>,
  document.getElementById('root')
);
