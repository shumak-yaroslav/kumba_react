import React from 'react';
import { Button } from 'antd';

const SuccessComponent = ({ onPress }) => {
  return (
    <div>
      <div>Success</div>
      <Button onClick={onPress}>Back</Button>
    </div>
  );
};

export default SuccessComponent;
