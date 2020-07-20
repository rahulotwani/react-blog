import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Responsive,Segment,Sidebar,Button,Container,Header,Icon,Menu,Visibility } from 'semantic-ui-react'
import Background from './bg.jpg';
import bgMobile from './bg-mobile.jpg';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      inverted
      style={{
        fontSize: mobile ? '1.7em' : '2em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '2em',
      }}
    >
      Welcome to rahulotwani's blog
    </Header>
    <Header
      content='Newbie blogger with a variety of ideas'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '2.5em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Explore
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ 
              minHeight: 500, 
              maxHeight:500,
              padding: '1em 0em',
              backgroundImage: `url(${Background})`
            }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active><Button>Home</Button></Menu.Item>
                <Menu.Item as='a'><Button>Tech</Button></Menu.Item>
                <Menu.Item as='a'><Button>Finance</Button></Menu.Item>
                <Menu.Item position='right'>
                  <Menu.Item >About Me</Menu.Item>
                  <Menu.Item >Projects</Menu.Item>
                  <Menu.Item >Contact</Menu.Item>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active><Button>Home</Button></Menu.Item>
          <Menu.Item as='a'><Button>Tech</Button></Menu.Item>
          <Menu.Item as='a'><Button>Finance</Button></Menu.Item>
          <Menu.Item >About Me</Menu.Item>
          <Menu.Item >Projects</Menu.Item>
          <Menu.Item >Contact</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ 
              minHeight: 350,
              padding: '1em 0em',
              backgroundImage: `url(${bgMobile})`
            }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                {/* <Menu.Item position='right'>
                  <Icon name="user secret" />
                </Menu.Item> */}
                <Menu.Item position='right'>
                  <a href="https://github.com/rahulotwani">©rahulotwani</a>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Home = () => (
    <ResponsiveContainer>
 
    </ResponsiveContainer>

)

export default Home