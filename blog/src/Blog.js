import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react'
import CardEg from './CardEg'

class Blog extends Component {

    render() { 
        return (  
            <Grid columns={4} divided padded stackable>
                <Grid.Row >
                    <Grid.Column style={{boxShadow:'none'}} >
                        <CardEg  />
                    </Grid.Column>
                    <Grid.Column style={{boxShadow:'none'}} >
                        <CardEg  />
                    </Grid.Column>
                    <Grid.Column style={{boxShadow:'none'}} >
                        <CardEg  />
                    </Grid.Column>
                    <Grid.Column style={{boxShadow:'none'}} >
                        <CardEg  />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{boxShadow:'none'}} >
                        <CardEg  />
                    </Grid.Column>
                    <Grid.Column style={{boxShadow:'none'}} >
                        <CardEg  />
                    </Grid.Column>
                    <Grid.Column style={{boxShadow:'none'}} >
                        <CardEg  />
                    </Grid.Column>
                    <Grid.Column style={{boxShadow:'none'}} >
                        <CardEg  />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

          
        );      
    }
}
 
export default Blog;