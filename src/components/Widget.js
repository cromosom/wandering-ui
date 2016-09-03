import React, { Component, PropTypes } from 'react';

export default class Widget extends Component {

  render () {

    const { lat, mediaUrl } = this.props.data

    return (
      <div className="wn-widget">{lat}{mediaUrl}
        <audio src={mediaUrl} controls="true"/>
      </div>
    )
  }

}
