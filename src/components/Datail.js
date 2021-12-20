import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import classNames from 'classnames/bind';

import styles from './Detail.module.scss';

import { UseRestauants } from '../context/useRestaurants';
import { database } from '../firebase';
import { useState } from 'react/cjs/react.development';

const cx = classNames.bind(styles);

function Detail() {
  const { restaurantTitle } = UseRestauants();
  const [detail, setDetail] = useState({});

  useEffect(async () => {
    if (restaurantTitle !== null) {
      const docRef = doc(database, 'restaurants', restaurantTitle);
      const docSnap = await getDoc(docRef);

      setDetail(docSnap.data());
    }
  }, [restaurantTitle]);

  return (
    <div className={cx('container')}>
      {restaurantTitle !== null ? (
        <>
          <div className={cx('detail')}>
            <h3 className={cx('title')}>{detail.title}</h3>
            <ul className={cx('info')}>
              <li>{detail.description}</li>
              <li>{detail.address}</li>
              <li>{'⭐️'.repeat(detail.score)}</li>
              <li>
                {detail.flatform?.split(' ').map((flatform, index) => (
                  <span key={index}>{flatform}</span>
                ))}
              </li>
            </ul>
            <p className={cx('text')}>{detail.text}</p>
            <p className={cx('tag')}>
              {detail.tag?.split(' ').map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </p>
          </div>
          <div className={cx('map')}></div>
        </>
      ) : (
        <p className={cx('notSelect')}>선택된 매장이 없습니다.</p>
      )}
    </div>
  );
}

export default Detail;
