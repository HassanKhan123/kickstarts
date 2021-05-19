import React from 'react';
import { Card, Button } from 'semantic-ui-react';

import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

const NewCampaign = (props) => {
  const items = props.campaigns.map((address) => {
    return {
      header: address,
      description: (
        <Link route={`/campaigns/${address}`}>
          <a>View Campaign</a>
        </Link>
      ),
      fluid: true,
    };
  });
  return (
    <Layout>
      <div>
        <h3>Open Campaigns</h3>

        <Link route='/campaigns/new'>
          <a>
            <Button
              content='Create Campaign'
              icon='add'
              floated='right'
              primary
            />
          </a>
        </Link>
        <Card.Group items={items} />
      </div>
    </Layout>
  );
};

NewCampaign.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default NewCampaign;
