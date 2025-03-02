import React from 'react';
import { renderToString } from 'react-dom/server';
import Page from './pages/meetme.page';

export function render() {
  return renderToString(<Page />);
}
