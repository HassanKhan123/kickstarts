import React, { useState } from 'react';
import { Table, Button } from 'semantic-ui-react';

import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';

const RequestRow = (props) => {
  const [loading, setLoading] = useState(false);
  const { Row, Cell } = Table;
  const { id, request, approversCount, address } = props;

  const approveRequestHandler = async () => {
    setLoading(true);
    const accounts = await web3.eth.getAccounts();
    const campaign = Campaign(address);
    await campaign.methods.approveRequest(id).send({
      from: accounts[0],
    });

    setLoading(false);
    Router.replaceRoute(`/campaigns/${address}/requests`);
  };

  return (
    <Row>
      <Cell>{id}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
      <Cell>{request.recipient}</Cell>
      <Cell>
        {request.approvalsCount} / {approversCount}
      </Cell>
      <Cell>
        <Button
          color='green'
          basic
          onClick={approveRequestHandler}
          loading={loading}
        >
          Approve
        </Button>
      </Cell>
      <Cell></Cell>
    </Row>
  );
};

export default RequestRow;
