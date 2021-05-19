import React from 'react';

import Layout from '../../components/Layout';

const CampaignShow = () => {
  return (
    <Layout>
      <h3>Campaign Show</h3>
    </Layout>
  );
};

CampaignShow.getInitialProps = async (props) => {
  const address = props.query.address;
  console.log(address);
  return {};
};

export default CampaignShow;
