/* eslint-disable import/no-unresolved */

import React from 'react';

import { storiesOf } from '@storybook/react';

import { Input } from 'components';

const ProviderDecorator = storyFn => <div>{storyFn()}</div>;

storiesOf('form/Input', module)
  .addDecorator(ProviderDecorator)
  .add('controlled', () => {
    const InputControlled = () => {
      const [value, setValue] = React.useState('initial value');

      return (
        <>
          <Input
            controlled
            name="name"
            onChange={setValue}
            value={value}
          />
          <span>{`Value: ${value}`}</span>
        </>
      );
    };

    return <InputControlled />;
  })
  .add('with label', () => {
    const InputControlled = () => {
      const [value, setValue] = React.useState('');

      return (
        <Input
          label="Label"
          controlled
          name="name"
          onChange={setValue}
          value={value}
        />
      );
    };

    return <InputControlled />;
  });
