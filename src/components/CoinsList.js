import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCoins } from '../redux/coins/coinsSlice';
import FilterForm from './FilterForm';
import Coin from './Coin';
import '../redux/coins/coinsStyles.css';

function CoinsList() {
  const coins = useSelector((store) => store.coins);

  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.coinsArr.length === 0) {
      dispatch(getCoins());
    }
  }, [dispatch, coins.coinsArr.length]);

  if (coins.status === 'Loading') {
    return (
      <p className="text-text-color font-extrabold text-3xl text-center py-10">Loading...</p>
    );
  }

  return (
    <section>
      <FilterForm />
      {coins.filteredList.length === 0 ? (
        <ul className="w-full grid grid-cols-2">
          {coins.coinsArr.map((coin, index) => (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              img={coin.img}
              price={coin.price}
              change={coin.change}
              index={index}
            />
          ))}
        </ul>
      ) : (
        <ul className="w-full grid grid-cols-2">
          {coins.filteredList.map((coin, index) => (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              img={coin.img}
              price={coin.price}
              change={coin.change}
              index={index}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default CoinsList;
