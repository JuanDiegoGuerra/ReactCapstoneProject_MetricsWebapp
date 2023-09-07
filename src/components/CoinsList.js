import { useSelector } from 'react-redux';

function CoinsList() {
  const coins = useSelector((store) => store.coins);

  return (
    <section>
      {coins.coinsArr.map((coin) => (
        <div key={coin}>
          Coin!!
        </div>
      ))}
    </section>
  );
}

export default CoinsList;
