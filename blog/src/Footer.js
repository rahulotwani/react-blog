import React, {Component} from 'react'
import {Menu,Icon, Responsive} from 'semantic-ui-react'

class Footer extends Component{
    render(){
        return(
            
            <div>
                 <Responsive maxWidth={768}>
                <Menu size="tiny" fixed ="bottom" borderless inverted>
                  
                    <Menu.Item  href="https://twitter.com/OtwaniRahul/" target='__blank'>
                        <Icon name='twitter' />
                        Twitter
                    </Menu.Item>
                    <Menu.Item  href="https://twitter.com/OtwaniRahul/" target='__blank'>
                        <Icon name='twitter' />
                        Twitter
                    </Menu.Item>
                    
                    <Menu.Item href='https://rahulotwani.codes/' target='__blank'>
                        <Icon name='info' />
                        Website
                    </Menu.Item>
                </Menu>
                </Responsive>

                <Responsive  minWidth={768}>
                <Menu size="massive" fixed ="bottom" borderless inverted>
                <Menu.Item  href="https://twitter.com/OtwaniRahul/" target='__blank'>
                        <Icon name='twitter' />
                        Twitter
                    </Menu.Item>
                    <Menu.Item  href="https://twitter.com/OtwaniRahul/" target='__blank'>
                        <Icon name='twitter square' />
                        Twitter
                    </Menu.Item>
                    <Menu.Item href='https://rahulotwani.codes/' target='__blank'>
                        <Icon name='info' />
                        Website
                    </Menu.Item>
                       
                </Menu>
                </Responsive>
            </div>

        )
    }
}

export default Footer;
