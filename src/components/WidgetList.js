import React, { Component, PropTypes } from 'react';
import Widget from './Widget.js';
import { connect } from 'react-redux';
import getData from '../actions/actions.js';

@connect((store) => {
  return {
    geo: store.data
  }
})

export default class WidgetList extends Component {

  // componentWillMount () {
  //   getData()
  // }

  fetchData () {
    getData();
  }

  render () {

    const data = this.props.geo

    return (
      <div className="wn-widgetlist">
        {data.map( item => <Widget key={item._id} data={item}></Widget> )}

        <div className="wn-widgetlist__actions">
          <button className="wn-btn" onClick={this.fetchData.bind(this)}>Get Data</button>
        </div>
      </div>
    )
  }

}
