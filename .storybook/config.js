import { addDecorator, configure } from '@storybook/react';

import Decorator from './Decorator';

addDecorator(Decorator());

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
