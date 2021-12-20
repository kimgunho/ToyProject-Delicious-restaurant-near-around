import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import { UseModal } from '../../context/useModal';
import Write from './Write';

const cx = classNames.bind(styles);

function Header() {
  const { setShow } = UseModal();

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <header className={cx('header')}>
        <h1 className={cx('logo')}>근처맛집 리스트</h1>
        <button onClick={handleShow} className={cx('button')}>
          맛집 등록
        </button>
      </header>
      <Write />
    </>
  );
}

export default Header;
