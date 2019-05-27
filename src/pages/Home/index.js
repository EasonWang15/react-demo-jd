import React, { Component, Fragment } from 'react'
import Tabbar from '../../components/Tabbar'

class Home extends Component {
  render() {
    return (
      <Fragment>
	      <img src={require("../../static/images/home.jpg")} alt='' />
      </Fragment>
    );
  }
}

export default Tabbar(Home)
