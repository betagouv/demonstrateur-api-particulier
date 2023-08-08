import { render } from '@testing-library/react';
import Authentication from './Authentication';

describe('Authentication component', () => {
  it('should render Stepper composant', async () => {
    const { container } = render(<Authentication />);

    const stepperElement = container.querySelector('.fr-stepper');
    const franceConnectElement = container.querySelector('.fr-connect__login');
    const tagElement = container.querySelector('.fr-tag');
    const InputIDElement = container.querySelector('.fr-label');
    const InputPasswordElement = container.querySelector('.fr-password');
    const buttonElements = container.querySelectorAll('.fr-btn');

    expect(stepperElement).toHaveClass('fr-stepper');
    expect(franceConnectElement).toHaveClass('fr-connect__login');
    expect(tagElement).toHaveClass('fr-tag');
    expect(InputIDElement).toHaveClass('fr-label');
    expect(InputPasswordElement).toHaveClass('fr-password');
    expect(buttonElements.length).toBe(3);
  });
});