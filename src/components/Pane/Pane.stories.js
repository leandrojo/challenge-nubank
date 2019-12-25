/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { Box } from '..';
import Pane from './Pane';

export default {
  title: 'components/Pane',
};

export const elevations = () => (
  <>
    {[1, 2, 3, 4, 5].map(value => (
      <Box css={{ margin: '20px', padding: '20px' }}>
        <Pane elevation={value}>
          <Box css={{ alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
            <span>{`Elevation ${value}`}</span>
          </Box>
        </Pane>
      </Box>
    ))}
  </>
);

elevations.story = {
  name: 'elevations',
};
