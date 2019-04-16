import React from 'react';
import { ButtonToolbar, Button, Whisper, Popover } from 'rsuite';
import createComponentExample from '../createComponentExample';
import PreventOverflowContainer from '../../fixtures/PreventOverflowContainer';

export default createComponentExample({
  id: 'Popover',
  examples: ['basic', 'placement', 'trigger', 'container'],
  dependencies: {
    PreventOverflowContainer,
    ButtonToolbar,
    Button,
    Whisper,
    Popover
  }
});
