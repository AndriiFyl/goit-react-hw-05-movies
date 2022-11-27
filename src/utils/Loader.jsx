import css from '../utils/Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.Loader}>
      <RotatingLines
        strokeColor="blueviolet"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
