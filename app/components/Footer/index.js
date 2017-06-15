import React from 'react';

import Row from 'components/Row';
import A from './A';
import Wrapper from './Wrapper';
import P from './P';
import Ul from './Ul';
import Li from './Li';
import Div from './Div';
import SocialUl from './SocialUl';

function Footer() {
  return (
    <Wrapper>
      <Row>
        <Div>
          <Ul>
            <Li><A href="#">About Us</A></Li>
            <Li><A href="#">Blog</A></Li>
            <Li><A href="#">iOS App</A></Li>
          </Ul>
        </Div>
        <Div>
          <SocialUl>
            Social Links
          </SocialUl>
        </Div>
      </Row>
      <Row>
        <P>
          Copyright &copy; 2017 by AHEAD, LLC.  All rights reserved.
        </P>
      </Row>
    </Wrapper>
  );
}

export default Footer;
