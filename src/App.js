import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Router from "./Router/Router";
import Tabbar from "./Views/Share/Tabbar";



function App(props) {

    const {TabbarIsTrue} = props
    const [TabbarState,setTabbar]= useState(TabbarIsTrue)
    const item = [
      {id: '/home', url: '/home', title: '電影'},
      {id: '/cinemas', url: '/cinemas', title: '劇院'},
      {id: '/profile', url: '/profile', title: '我的'}
    ]

    useEffect(()=>{
      setTabbar(TabbarIsTrue)
    },[TabbarIsTrue])

  return (
    <Router>
      {TabbarState&&<Tabbar item={item} clickColor='blue' fixed='bottom'/>}
      {TabbarState&&<div style={{height:'55px',}}/>}
    </Router>
  )
}


const mapState = (state)=>(
  {TabbarIsTrue: state.TabbarIsTrue}
)

export default connect(mapState)(App)