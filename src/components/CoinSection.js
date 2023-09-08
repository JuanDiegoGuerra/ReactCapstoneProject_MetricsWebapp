import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';

function CoinSection({ id }) {
  const coins = useSelector((store) => store.coins);

  const coinDetails = coins.coinsArr.find((item) => item.id === id);

  if (!coinDetails) {
    return (
      <p className="p-10 text-center text-text-color font-bold sans text-2xl">
        No coin selected,
        <br />
        Please choose one.
      </p>
    );
  }

  return (
    <section className="w-full flex flex-col justify-center items-center py-10 gap-3">
      <img className="w-16 h-auto" src={coinDetails.img} alt="NAME" />
      <h2 className="text-text-color font-bold sans text-2xl">
        {coinDetails.name}
      </h2>
      <p className="rounded-lg bg-slate-600 px-4 text-center text-text-color">{coinDetails.symbol}</p>
      <table className="border-collapse w-full text-text-color">
        <tbody className="border-collapse">
          <tr className="">
            <td className="py-2 px-4 text-left">
              <div className="flex items-center">
                <span className="font-medium">Price</span>
              </div>
            </td>
            <td className="py-2 px-4 font-medium text-right">
              $
              {coinDetails.price >= 10
                ? coinDetails.price.toFixed(2)
                : coinDetails.price.toFixed(4)}
            </td>
          </tr>
          <tr className="">
            <td className="py-2 px-4 text-left">
              <div className="flex items-center">
                <span className="font-medium">Market Cap</span>
              </div>
            </td>
            <td className="py-2 px-4 font-medium text-right">
              $
              {Math.floor(coinDetails.marketCap)}
            </td>
          </tr>
          <tr className="">
            <td className="py-2 px-4 text-left">
              <div className="flex items-center">
                <span className="font-medium">Volume</span>
              </div>
            </td>
            <td className="py-2 px-4 font-medium text-right">
              $
              {Math.floor(coinDetails.volume)}
            </td>
          </tr>
          <tr className="">
            <td className="py-2 px-4 text-left">
              <div className="flex items-center">
                <span className="font-medium">1h</span>
              </div>
            </td>
            <td className={
              coinDetails.hour >= 0
                ? 'text-green-500 py-2 px-4 font-medium text-right flex items-center justify-end'
                : 'text-red-500 py-2 px-4 font-medium text-right flex items-center justify-end'
              }
            >
              {coinDetails.hour < 0
                ? <FaLongArrowAltDown className="text-red-500" />
                : <FaLongArrowAltUp className="text-green-500" /> }
              %
              {Math.abs(coinDetails.hour)}
            </td>
          </tr>
          <tr className="">
            <td className="py-2 px-4 text-left">
              <div className="flex items-center">
                <span className="font-medium">1d</span>
              </div>
            </td>
            <td className={
              coinDetails.change >= 0
                ? 'text-green-500 py-2 px-4 font-medium text-right flex items-center justify-end'
                : 'text-red-500 py-2 px-4 font-medium text-right flex items-center justify-end'
              }
            >
              {coinDetails.change < 0
                ? <FaLongArrowAltDown className="text-red-500" />
                : <FaLongArrowAltUp className="text-green-500" /> }
              %
              {Math.abs(coinDetails.change)}
            </td>
          </tr>
          <tr className="">
            <td className="py-2 px-4 text-left">
              <div className="flex items-center">
                <span className="font-medium">1w</span>
              </div>
            </td>
            <td className={
              coinDetails.week >= 0
                ? 'text-green-500 py-2 px-4 font-medium text-right flex items-center justify-end'
                : 'text-red-500 py-2 px-4 font-medium text-right flex items-center justify-end'
              }
            >
              {coinDetails.week < 0
                ? <FaLongArrowAltDown className="text-red-500 m-0" />
                : <FaLongArrowAltUp className="text-green-500 m-0" /> }
              %
              {Math.abs(coinDetails.week)}
            </td>
          </tr>
          <tr className="">
            <td className="py-2 px-4 text-left">
              <div className="flex items-center">
                <span className="font-medium">See more</span>
              </div>
            </td>
            <td className="py-2 px-4 font-medium text-right">
              <a href={coinDetails.web}>{coinDetails.web}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CoinSection;

CoinSection.propTypes = {
  id: PropTypes.string.isRequired,
};
