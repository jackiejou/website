import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
export default class Navbar extends Component {
  render() {
    return (
      <Segment inverted fixed='top'>
        <Menu inverted secondary>
            <Menu.Item name='home' href='#home'/>
            <Menu.Menu  position='right'>
                <Menu.Item name='projects' href='#projects' />
                <Menu.Item name='contact' href='#footer' />
            </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
