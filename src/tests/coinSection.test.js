import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CoinSection from '../components/CoinSection';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('CoinSection component', () => {
  it('renders coin details when coin is selected', () => {
    const coinDetails = {
      id: 'bitcoin',
      img: 'https://static.coinstats.app/coins/1650455588819.png',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 50000.00,
      volume: 1000000000,
      marketCap: 50000.00,
      hour: 2.5,
      change: 1.8,
      week: 3.2,
    };

    const store = mockStore({
      coins: {
        coinsArr: [coinDetails],
      },
    });

    render(
      <Provider store={store}>
        <CoinSection id="bitcoin" />
      </Provider>,
    );

    const coinImage = screen.getByAltText('NAME');
    expect(coinImage).toBeInTheDocument();

    const coinName = screen.getByText('Bitcoin');
    expect(coinName).toBeInTheDocument();

    const coinSymbol = screen.getByText('BTC');
    expect(coinSymbol).toBeInTheDocument();

    const hourChange = screen.getByText(/%2.5/);
    expect(hourChange).toBeInTheDocument();

    const dayChange = screen.getByText(/%1.8/);
    expect(dayChange).toBeInTheDocument();

    const weekChange = screen.getByText(/%3.2/);
    expect(weekChange).toBeInTheDocument();
  });
});
