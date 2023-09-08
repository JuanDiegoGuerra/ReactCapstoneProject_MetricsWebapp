import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import CoinsList from '../components/CoinsList';

const mockStore = configureMockStore([thunk]);

describe('CoinsList component', () => {
  it('renders loading message when coins are loading', () => {
    const store = mockStore({
      coins: {
        coinsArr: [],
        filteredList: [],
        status: 'Loading',
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CoinsList />
        </BrowserRouter>
      </Provider>,
    );

    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('renders coins list when coins are available', () => {
    const coinsArr = [
      {
        id: '1', name: 'Bitcoin', symbol: 'BTC', img: 'bitcoin.png', price: 50000, change: 2,
      },
      {
        id: '2', name: 'Ethereum', symbol: 'ETH', img: 'ethereum.png', price: 2000, change: -1,
      },
    ];

    const store = mockStore({
      coins: {
        coinsArr,
        filteredList: [],
        status: 'Success',
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CoinsList />
        </BrowserRouter>
      </Provider>,
    );

    const bitcoinElement = screen.getByText('Bitcoin');
    expect(bitcoinElement).toBeInTheDocument();

    const ethereumElement = screen.getByText('Ethereum');
    expect(ethereumElement).toBeInTheDocument();
  });
});
