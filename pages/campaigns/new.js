import React, { useState } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

const CampaignNew = () => {
  const [minimumContribution, setMinimumContribution] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const accounts = await web3.eth.getAccounts();
    await factory.methods.createCampaign(minimumContribution).send({
      from: accounts[0],
    });
  };
  return (
    <Layout>
      <h3>Create a Campaign</h3>
      <Form onSubmit={submitHandler}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label='wei'
            labelPosition='right'
            value={minimumContribution}
            onChange={(e) => setMinimumContribution(e.target.value)}
          />
        </Form.Field>

        <Button primary>Create!</Button>
      </Form>
    </Layout>
  );
};

export default CampaignNew;
