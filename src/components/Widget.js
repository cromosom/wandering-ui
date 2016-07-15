import React, { Component, PropTypes } from 'react';

export default class Widget extends Component {

  render () {

    const {lat} = this.props.data

    return (
      <div className="wn-widget">{lat}</div>
    )
  }

}
