import { useParams } from 'react-router-dom';
import CoinSection from '../components/CoinSection';

const SpecificCoin = () => {
  const { id } = useParams();
  return (
    <CoinSection id={id} />
  );
};

export default SpecificCoin;
