import classNames from 'classnames/bind';

import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

function Detail() {
  return (
    <div className={cx('container')}>
      <div className={cx('detail')}>
        <h3 className={cx('title')}>title..</h3>
        <ul className={cx('info')}>
          <li>간단한 설명</li>
          <li>산본동 99-12</li>
          <li>⭐️⭐️⭐️</li>
          <li>배민, 요기요</li>
        </ul>
        <p className={cx('text')}>상세한 정보입니다.</p>
        <p className={cx('tag')}>
          <span>#aa</span>
          <span>#aa</span>
          <span>#aa</span>
          <span>#aa</span>
        </p>
      </div>
      <div className={cx('map')}></div>
    </div>
  );
}

export default Detail;
