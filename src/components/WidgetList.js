import React, { Component, PropTypes } from 'react';
import Widget from './Widget.js';

export default class WidgetList extends Component {

  render () {

    const data = this.props.data

    return (
      <div className="wn-widgetlist">
        {data.map( item => <Widget key={item.id} data={item}></Widget> )}

        <div className="wn-widgetlist__actions">
          <button className="wn-btn">Get Data</button>
        </div>
      </div>
    )
  }

}
