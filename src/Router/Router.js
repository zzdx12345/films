import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Views/Home/Home'
import Cinemas from '../Views/Cinemas/Cinemas'
import Profile from '../Views/Profile/Profile'
import Detail from '../Views/Detail/Detail'
import Search from '../Views/Search/Search'




export default function Router(props) {
  return (
      <HashRouter>
          <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/cinemas' component={Cinemas}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/detail/:id' component={Detail}/>
              <Route path='/search' component={Search}/>
              <Redirect from='/' to='/home'/>
          </Switch>
          {props.children}
      </HashRouter>
  )
}
