import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

export default function HookExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </Button>
    </div>
  );
}
