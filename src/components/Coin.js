import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import { BsArrowRightCircle } from 'react-icons/bs';
import './Modal.css';

function Coin({
  id, name, symbol, img, price, change, index,
}) {
  const differentStyle = index % 4 === 1 || index % 4 === 2;
  const style = differentStyle ? 'bg-blue-3' : 'bg-blue-4';
  return (
    <NavLink
      className={`lato text-text-color p-5 coin ${style}`}
      to={`coin/${id}`}
    >
      <div className="arrow-container">
        <BsArrowRightCircle />
      </div>
      <div className="flex justify-between">
        <img className="w-16 h-auto" src={img} alt="NAME" />
        <div className="flex flex-col justify-between items-end">
          <p className="text-end font-bold sans text-lg">{name}</p>
          <p className="rounded-lg bg-slate-600 px-4 text-center">{symbol}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-center">
          $
          {price >= 10 ? price.toFixed(2) : price.toFixed(4)}
        </p>
        <p
          className={
            change >= 0
              ? 'text-green-500 text-center flex items-center'
              : 'text-red-500 text-center flex items-center'
          }
        >
          {change < 0 ? <FaLongArrowAltDown className="text-red-500" /> : <FaLongArrowAltUp className="text-green-500" /> }
          %
          {Math.abs(change)}
        </p>
      </div>
    </NavLink>
  );
}

export default Coin;

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
