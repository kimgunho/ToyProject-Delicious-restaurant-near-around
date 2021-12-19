import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import Write from './Write';

const cx = classNames.bind(styles);

function Header() {
  return (
    <>
      <header className={cx('header')}>
        <h1 className={cx('logo')}>근처맛집 리스트</h1>
        <button className={cx('button')}>맛집 등록</button>
      </header>
      <Write />
    </>
  );
}

export default Header;
