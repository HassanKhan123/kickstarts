import React, { useEffect } from 'react';
import { Card } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import ContributeForm from '../../components/ContributeForm';
import web3 from '../../ethereum/web3';

const CampaignShow = (props) => {
  const {
    minimumContribution,
    balance,
    manager,
    requestsCount,
    approversCount,
  } = props;
  const items = [
    {
      header: manager,
      meta: 'Address of Manager',
      description:
        'The manager created this campaign and can create requests to withdraw money',
      style: {
        overflowWrap: 'break-word',
      },
    },
    {
      header: minimumContribution,
      meta: 'Minimum Contribution (wei',
      description:
        'You must contribute atleast this much wei to become a contributor',
      style: {
        overflowWrap: 'break-word',
      },
    },
    {
      header: requestsCount,
      meta: 'Number of Requests',
      description:
        'A request tries to withdraw money from the contract. Requests must be approved by aprovers',
      style: {
        overflowWrap: 'break-word',
      },
    },
    {
      header: approversCount,
      meta: 'Number of Approvers',
      description: 'Number of people who have already donated to this campaign',
      style: {
        overflowWrap: 'break-word',
      },
    },
    {
      header: web3.utils.fromWei(balance, 'ether'),
      meta: 'Campaign Balance (ether)',
      description:
        'The balance is how much money this campaign has left to spend.',
      style: {
        overflowWrap: 'break-word',
      },
    },
  ];

  return (
    <Layout>
      <h3>Campaign Show</h3>
      <Card.Group items={items} />
      <ContributeForm />
    </Layout>
  );
};

CampaignShow.getInitialProps = async (props) => {
  const campaign = Campaign(props.query.address);
  const summary = await campaign.methods.getSummary().call();
  console.log(summary[0]);
  return {
    minimumContribution: summary[0],
    balance: summary[1],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
};

export default CampaignShow;
