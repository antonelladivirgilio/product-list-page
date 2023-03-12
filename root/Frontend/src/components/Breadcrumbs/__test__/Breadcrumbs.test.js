import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from '../index';

describe("Breadcrumbs component", () => {

    test('should render breadcrumbs list idems', () => {
        render(<Breadcrumbs categories={['categories', 'hola']} />);
        const linkElement = screen.getAllByRole("listitem");
        expect(linkElement.length).toBe(2);
    });

    test('should not to render Breadcrumbs component', () => {
        render(<Breadcrumbs categories={[]} />);
        const linkElement = screen.queryByRole("list");
        expect(linkElement).not.toBeInTheDocument() ;
    });
});