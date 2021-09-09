import React from 'react';

import { GlobalContext } from '../components/GlobalContext';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Home = ({ home }) => {
  return (
    <GlobalContext.Consumer>
      {({ }) => (
        <Layout>
          <Seo seo={home.seo} />
          <div>Hello homepage!</div>
        </Layout>
      )}
    </GlobalContext.Consumer>
  )
}

export async function getServerSideProps() {
  const [home] = await Promise.all([
    fetchAPI('/home'),
  ]);
  return {
    props: { home }
  };
}

export default Home;
