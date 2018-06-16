import React, { Component } from 'react';
import {
  Grid,
  Header,
  Segment,
  List, 
  Container,
  Icon,
} from 'semantic-ui-react';

export default class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="Contact Jackie" />
                <List link inverted>
                    <a href="mailto:joujackie@gmail.com?Subject=Hello%20There"><Icon link name="mail" inverted color="white" size="big"/></a>
                    <a href="https://linkedin.com/in/jackie-jou"><Icon link name="linkedin" inverted color="white" size="big"/></a>
                    <a href="https://github.com/jackiejou"><Icon link name="github" inverted color="white" size="big"/></a>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>Something cool about live streaming?</Header>
                <p>Some extra space that we may or may not want to fill in - The JUICE</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}