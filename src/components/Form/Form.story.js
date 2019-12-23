/* eslint-disable import/no-unresolved */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Form, Input } from 'components';

const ProviderDecorator = storyFn => <div>{storyFn()}</div>;

storiesOf('form', module)
  .addDecorator(ProviderDecorator)
  .add('advanced validation (email)', () => {
    const FormSample = () => {
      const onSubmit = () => action('submit');

      return (
        <Form autoComplete="off" onSubmit={onSubmit} initialValues={{}}>
          <Input
            label="E-mail"
            name="email"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Campo obrigatório.',
              },
              {
                validator(rule, value, callback, source) {
                  const re = /\S+@\S+\.\S+/;
                  const errors = [];
                  if (re.test(source.email) === false) {
                    errors.push(new Error('Entre com um e-mail válido.').message);
                  }
                  callback(errors);
                },
              },
            ]}
          />
        </Form>
      );
    };

    return <FormSample />;
  })
  .add('rules when submit', () => {
    const FormSample = () => {
      const onSubmit = () => action('submit');

      return (
        <Form autoComplete="off" onSubmit={onSubmit} initialValues={{}}>
          <Input
            label="Nome Completo"
            name="name"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Campo obrigatório.',
              },
            ]}
          />

          <Input
            label="Data de Nascimento"
            name="birthDate"
            pattern="99/99/9999"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Campo obrigatório.',
              },
            ]}
          />
        </Form>
      );
    };

    return <FormSample />;
  });
