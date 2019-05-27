import React, { Component, Fragment } from 'react'
import Tabbar from '../../components/Tabbar'

class Category extends Component {
  render() {
    return (
      <Fragment>
	      <img src={require("../../static/images/category.jpg")} alt='' />
      </Fragment>
    );
  }
}

export default Tabbar(Category)
