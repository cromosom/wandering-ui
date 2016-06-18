import React, { Component, PropTypes } from 'react';

export default class Widget extends Component {

  render () {

    const {name} = this.props.data

    return (
      <div className="wn-widget">{name}</div>
    )
  }

}
