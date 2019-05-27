import React, { Component, Fragment } from 'react'
import Tabbar from '../../components/Tabbar'

class Car extends Component {
  render() {
    return (
      <Fragment>
	      <img src={require("../../static/images/car.jpg")} alt='' />
      </Fragment>
    );
  }
}

export default Tabbar(Car)
