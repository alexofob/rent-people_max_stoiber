/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

// Import Components
import HomeNavBar from './HomeNavBar';
import IntroHeader from './IntroHeader';
import HouseList from './HouseList';
import FeatureDesc from './FeatureDesc';
import CallToAction from './CallToAction';


const HomePage = () => (
  <article>
    <Helmet
      title="Home"
      meta={[
        { name: 'description', content: 'RentPeople homepage' },
      ]}
    />
    <HomeNavBar />
    <IntroHeader />
    <HouseList />
    <FeatureDesc />
    <CallToAction />
  </article>
);

export default HomePage;
