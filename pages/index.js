import React, { useEffect } from 'react';

import factory from '../ethereum/factory';

const NewCampaign = (props) => {
  return (
    <div>
      <h1>{props.campaigns[0]}</h1>
    </div>
  );
};

NewCampaign.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default NewCampaign;
