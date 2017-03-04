import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';


// import Widget from './frontend/click_counter';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  // const newTabs = new Tabs(root);
  let panes = [
    {title: "Home Alone", content: "Is great"},
    {title: "ET", content: "Is greater"}
  ];
  ReactDOM.render(<Tabs panes = {panes}/>, root);
});
