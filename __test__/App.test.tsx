import { act, render } from '@testing-library/react';
import App from '../App';
import {
    componentRenderByMemoryRouter,
    toBeExpectByTestId,
    toBeExpectByText,
} from '../types/testUtils';

describe('Test App Router', () => {
    test('should render app componet', () => {
        componentRenderByMemoryRouter('/', <App />);
        toBeExpectByTestId('app-component-test-id');
    });
    test("snapshot testing", () => {
        const InputProps = {
          onChange: jest.fn(),
          className: "inputField",
          placeHolder: "Enter the country name",
        };
        const { container } = render(<input {...InputProps} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    test('should render 404 page', () => {
        componentRenderByMemoryRouter(
            '/details/BD/hjgsdsdjfg',
            <App />
        );
        toBeExpectByText('404 Page Not Found');
    });
});
