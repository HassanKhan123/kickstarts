import React from 'react';
import { Card, Button } from 'semantic-ui-react';

import factory from '../ethereum/factory';
import Layout from '../components/Layout';

const NewCampaign = (props) => {
  const items = props.campaigns.map((address) => {
    return {
      header: address,
      description: <a>View Campaign</a>,
      fluid: true,
    };
  });
  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>
        <Card.Group items={items} />
        <Button content='Create Campaign' icon='add' primary />
      </div>
    </Layout>
  );
};

NewCampaign.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default NewCampaign;
