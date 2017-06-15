import React from 'react';

import Row from 'components/Row';
import Img from './Img';
import MainNav from './MainNav';
import NavLi from './NavLi';
import HeaderLink from './HeaderLink';
import Logo from './AtlasLogo-t.png';
import Wrapper from './Wrapper';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Row>
          <nav>
            <Img src={Logo} alt="Atlas Logo" />
            <MainNav>
              <NavLi>
                <HeaderLink to="/">
                  Home
                </HeaderLink>
              </NavLi>
              <NavLi>
                <HeaderLink to="/">
                  Passengers
                </HeaderLink>
              </NavLi>
              <NavLi>
                <HeaderLink to="/">
                  Baggage
                </HeaderLink>
              </NavLi>
              <NavLi>
                <HeaderLink to="/">
                  Flights
                </HeaderLink>
              </NavLi><NavLi>
                <HeaderLink to="/">
                  Reports
                </HeaderLink>
              </NavLi>
            </MainNav>
          </nav>
        </Row>
      </Wrapper>
    );
  }
}

export default Header;
