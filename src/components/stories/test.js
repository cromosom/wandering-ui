import React from 'react';
import Test from '../Test.js';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Product', module)
  .add('Product active', () => {
    return (
      <div>
        <Test />
      </div>
    )
  });
