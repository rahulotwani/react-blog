import React, {Component} from 'react'
import { Card, Icon, Image, Segment } from 'semantic-ui-react'
import img from './bg-mobile.jpg'


class CardEg extends Component {
  state = {  }
  render() { 
    return ( 
      <Segment inverted>
      <Card fluid>
        <Image src={img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Daniel</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            10 Friends
          </a>
        </Card.Content>
      </Card>
      </Segment>
     );
  }
}
 
export default CardEg;