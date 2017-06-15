import React from 'react';
import Helmet from 'react-helmet';

import Section from '../../components/Section';
import Row from '../../components/Row';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import LongCopy from '../../components/LongCopy';
import A from '../../components/A';
import BoxSpan1of4 from '../../components/BoxSpan1of4';
import IconBig from '../../components/IconBig';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet
          title="Atlas BagApp"
          meta={[
            { name: 'description', content: 'Management for AheadAviation BagApp.' },
          ]}
        />
        <Section>
          <Row>
            <H2>Atlas - Ahead Aviation</H2>
            <LongCopy>Welcome to Atlas by Ahead Aviation, the new way to manage
              Passengers, Baggage, Flights, and more! If you encounter any issues please
              &nbsp;<A>contact us</A>. Enjoy!
            </LongCopy>
          </Row>
          <Row>
            <BoxSpan1of4>
              <IconBig><i className="ion-ios-body-outline"></i></IconBig>
              <H3>Passengers</H3>
              <p>Manage Passenger information, rewards data, incentives, and other data.</p>
            </BoxSpan1of4>
            <BoxSpan1of4>
              <IconBig><i className="ion-ios-briefcase-outline"></i></IconBig>
              <H3>Luggage</H3>
              <p>Create, Update, and Track Baggage moving throughout our flights and hubs.</p>
            </BoxSpan1of4>
            <BoxSpan1of4>
              <IconBig><i className="ion-ios-paperplane-outline"></i></IconBig>
              <H3>Flight Tracking</H3>
              <p>Live and historical tracking of flights and flight data.</p>
            </BoxSpan1of4>
            <BoxSpan1of4>
              <IconBig><i className="ion-ios-pie-outline"></i></IconBig>
              <H3>Reports</H3>
              <p>Create and run reports related to the Ahead Aviation business.</p>
            </BoxSpan1of4>
          </Row>
        </Section>
      </article>
    );
  }
}

export default HomePage;
