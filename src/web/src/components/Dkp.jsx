import React, { Component } from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import { withCookies, Cookies } from 'react-cookie';
import uuid from 'uuid/v5';
import qs from 'querystring';

const csrfToken = uuid('coupclassic', uuid.DNS);
const cookies = new Cookies();

class Dkp extends Component {
  state = {};

  componentDidMount() {
    const { access_token, state, expires_in } = qs.parse(
      this.props.location.hash
    );

    const now = new Date().getTime();
    const future = new Date(now + 1000 * (expires_in || 0)).getTime();

    if (state === csrfToken) {
      cookies.set('oauthToken', access_token);
      cookies.set('expireToken', future);
    }

    this.setState(
      {
        authenticated:
          !!cookies.get('oauthToken') && now < cookies.get('expireToken')
      },
      () => {
        window.location.href = `#authenticated=${this.state.authenticated}`;
      }
    );
  }

  loginButton() {
    if (this.state.authenticated) {
      return <div>Welcome back, {'[PH] NAME from GET /users/@me'}</div>;
    } else {
      return (
        <a
          href={`https://discordapp.com/api/oauth2/authorize?client_id=633045419605229571&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdkp&response_type=token&scope=identify%20guilds&state=${csrfToken}`}
        >
          Login with Discord
        </a>
      );
    }
  }

  render() {
    return (
      <Container
        style={{
          backgroundColor: '#DEDEDE',
          minHeight: 'calc(100vh - 50px)'
        }}
      >
        <Header as='h1'>DKP History</Header>
        <Divider />
        <Container text textAlign='left' style={{ paddingBottom: '50px' }}>
          {this.loginButton()}
        </Container>
      </Container>
    );
  }
}

export default withCookies(Dkp);
