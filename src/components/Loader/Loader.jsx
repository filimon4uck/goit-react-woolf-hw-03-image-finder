import style from './Loader.module.css';
import { TailSpin } from 'react-loader-spinner';
const Loader = () => {
  return (
    <span className={style.loaderContainer}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </span>
  );
};
export default Loader;
