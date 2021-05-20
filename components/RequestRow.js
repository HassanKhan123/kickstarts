import React, { useState } from 'react';
import { Table, Button } from 'semantic-ui-react';

import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';

const RequestRow = (props) => {
  const [approveLoading, setApproveLoading] = useState(false);
  const [finalizeLoading, setFinalizeLoading] = useState(false);
  const { Row, Cell } = Table;
  const { id, request, approversCount, address } = props;

  const readyToFinalize = request.approvalsCount > approversCount / 2;

  const approveRequestHandler = async () => {
    setApproveLoading(true);

    try {
      const accounts = await web3.eth.getAccounts();
      const campaign = Campaign(address);
      await campaign.methods.approveRequest(id).send({
        from: accounts[0],
      });
    } catch (error) {
      console.log(error.message);
    }

    setApproveLoading(false);
    Router.replaceRoute(`/campaigns/${address}/requests`);
  };

  const finalizeRequestHandler = async () => {
    setFinalizeLoading(true);

    try {
      const accounts = await web3.eth.getAccounts();
      const campaign = Campaign(address);
      await campaign.methods.finalizeRequest(id).send({
        from: accounts[0],
      });
    } catch (error) {
      console.log(error.message);
    }

    setFinalizeLoading(false);
  };

  return (
    <Row
      disabled={request.complete}
      positive={readyToFinalize && !request.complete}
    >
      <Cell>{id}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
      <Cell>{request.recipient}</Cell>
      <Cell>
        {request.approvalsCount} / {approversCount}
      </Cell>
      <Cell>
        {request.complete ? null : (
          <Button
            color='green'
            basic
            onClick={approveRequestHandler}
            loading={approveLoading}
          >
            Approve
          </Button>
        )}
      </Cell>
      <Cell>
        {request.complete ? null : (
          <Button
            color='teal'
            basic
            onClick={finalizeRequestHandler}
            loading={finalizeLoading}
          >
            Finalize
          </Button>
        )}
      </Cell>
    </Row>
  );
};

export default RequestRow;
