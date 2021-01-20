import React from 'react'
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import './Sidenav.css'

function Sidenav({ location, history }) {
  return (
    <SideNav
      onSelect={(selected) => {
        const to = '/' + selected
        if (location.pathname !== to) {
          history.push(to)
        }
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="search">
          <NavIcon>
            <i className="fa fa-fw fa-image" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>Search</NavText>
        </NavItem>
        <NavItem eventKey="about">
          <NavIcon>
            <i
              className="fa fa-fw fa-info-circle"
              style={{ fontSize: '1.75em' }}
            />
          </NavIcon>
          <NavText>About</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  )
}

export default Sidenav
