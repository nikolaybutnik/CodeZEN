import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './Sidebar.scss'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from 'react-pro-sidebar'
// import 'react-pro-sidebar/dist/css/styles.css'

const Sidebar = () => {
  return (
    <ProSidebar>
      <SidebarHeader>
        <Router>
          <Link to="/home">CodeZen</Link>
        </Router>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <SubMenu title="Search">
            <input></input>
          </SubMenu>
          <SubMenu title="Favorites"></SubMenu>
          <MenuItem>
            About{' '}
            <Router>
              <Link to="/about"></Link>
            </Router>
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>2021</SidebarFooter>
    </ProSidebar>
  )
}

export default Sidebar

// {/* <ProSidebar>
//   <SidebarHeader>
//     {/**
//      *  You can add a header for the sidebar ex: logo
//      */}
//   </SidebarHeader>
//   <SidebarContent>
//     {/**
//      *  You can add the content of the sidebar ex: menu, profile details, ...
//      */}
//   </SidebarContent>
//   <SidebarFooter>
//     {/**
//      *  You can add a footer for the sidebar ex: copyright
//      */}
//   </SidebarFooter>
// </ProSidebar>; */}
