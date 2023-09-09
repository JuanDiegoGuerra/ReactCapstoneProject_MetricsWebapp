import 'regenerator-runtime/runtime';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../redux/store';
import Navbar from '../components/Navbar';

jest.mock('axios');

describe('testing Navbar components', () => {
  it('test Navbar component', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={Store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
