import React from 'react';

import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

const NewCampaign = (props) => {
  const items = props.campaigns.map((address) => {
    return {
      header: address,
      description: <a>View Campaign</a>,
      fluid: true,
    };
  });
  return (
    <div>
      <Card.Group items={items} />
      <Button content='Create Campaign' icon='add' primary />
    </div>
  );
};

NewCampaign.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default NewCampaign;
