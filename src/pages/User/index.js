import React, { Component, Fragment } from 'react'
import Tabbar from '../../components/Tabbar'

class User extends Component {
  render() {
    return (
      <Fragment>
        <img src={require("../../static/images/user.jpg")} alt='' />
      </Fragment>
    );
  }
}

export default Tabbar(User)
