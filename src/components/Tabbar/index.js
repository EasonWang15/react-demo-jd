import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const tabbarArr = [
	{
		className: "icon-home",
		text: "首页",
		linker: "/home"
	},
	{
		className: "icon-fenleishousuo",
		text: "分类",
		linker: "/category"
	},
	{
		className: "icon-gouwuche1",
		text: "购物车",
		linker: "/car"
	},
	{
		className: "icon-user",
		text: "我的",
		linker: "/user"
	}
]

const Tabbar = (ContainerComponent) => class Tabbar extends Component {
  render() {
  	const url = window.location.href
    return (
    	<Fragment>
    	  <div className="container">
	      	<ContainerComponent />
	      </div>
	      <div className="tabbar">
	    	{
	    		tabbarArr.map((item, index) => {
	    			return (
	    				<Link to={item.linker} className={url.indexOf(item.linker) > -1 ? "active" : ""} key={index}>
			        		<i className={"iconfont " + item.className}></i>
			        		<p>{item.text}</p>
			        	</Link>
	    			)
	    		})
	    	}
	      </div>
	    </Fragment>
    );
  }
}

export default Tabbar
