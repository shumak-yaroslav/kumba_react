import React from 'react';
import { Button } from 'antd';

const ErrorComponent = ({ onPress }) => {
  return (
    <div>
      <div>Error during creation</div>
      <Button onClick={onPress}>Back</Button>
    </div>
  );
};

export default ErrorComponent;
