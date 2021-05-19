import React from 'react';
import { Button } from 'semantic-ui-react';

import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';

const RequestIndex = (props) => {
  return (
    <Layout>
      <h3>Requests</h3>

      <Link route={`/campaigns/${props.address}/requests/new`}>
        <a>
          <Button primary>Add Request</Button>
        </a>
      </Link>
    </Layout>
  );
};

RequestIndex.getInitialProps = async (props) => {
  const { address } = props.query;
  const campaign = Campaign(address);

  const requestCount = await campaign.methods.getRequestsCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((elem, index) => {
        return campaign.methods.requests(index).call();
      })
  );
  return { address, requests, requestCount };
};

export default RequestIndex;
