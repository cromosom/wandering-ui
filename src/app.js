import React from 'react';
import { render } from 'react-dom';
import WidgetList from './components/WidgetList.js';

require('./styles/all.scss');

const dummyData = [
  {
    id : 1,
    name : 'First Widget'
  },
  {
    id: 2,
    name : 'Second Widget'
  }
]

render (
  <div>
    <WidgetList data={dummyData} />
  </div>,
  document.getElementById('app')
)
