import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Coin from '../components/Coin';
import '@testing-library/jest-dom';

describe('Coin component', () => {
  it('renders coin details correctly', () => {
    render(
      <BrowserRouter>
        <Coin
          index={0}
          id="1"
          name="Bitcoin"
          symbol="BTC"
          img="bitcoin.png"
          price={50000}
          change={2}
        />
      </BrowserRouter>,
    );

    const coinName = screen.getByText('Bitcoin');
    const coinSymbol = screen.getByText('BTC');
    const coinPrice = screen.getByText('$50000.00');
    const coinChange = screen.getByText('%2');

    expect(coinName).toBeInTheDocument();
    expect(coinSymbol).toBeInTheDocument();
    expect(coinPrice).toBeInTheDocument();
    expect(coinChange).toBeInTheDocument();
  });
});
