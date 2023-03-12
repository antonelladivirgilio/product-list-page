import { render, screen } from '@testing-library/react';
import {Breadcrumbs} from '../index';

test('renders learn react link', () => {
  render(<Breadcrumbs categories={['categories','hola']}/>);
  const linkElement = screen.getAllByRole("listitem");
  expect(linkElement.length).toBe(2);
});
