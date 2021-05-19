import React, { useState } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';

import Campaign from '../ethereum/campaign';

const ContributeForm = (props) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const campaign = Campaign(props.address);
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          label='ether'
          labelPosition='right'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Field>

      <Button primary>Contribute!</Button>
    </Form>
  );
};

export default ContributeForm;
