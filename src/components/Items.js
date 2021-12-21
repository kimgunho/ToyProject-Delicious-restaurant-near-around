import { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import classNames from 'classnames/bind';

import styles from './Items.module.scss';
import 'swiper/swiper.scss';

import { database } from '../firebase';
import { UseRestauants } from '../context/useRestaurants';

import Category from './Category';

const cx = classNames.bind(styles);

function Items() {
  const { restaurants, setRestaurants, setRestaurantTitle } = UseRestauants();
  const [category, setCategory] = useState([]);

  useEffect(async () => {
    try {
      const querySnapshot = await getDocs(collection(database, 'restaurants'));
      const allRestaurants = querySnapshot.docs.map((doc) => doc.data());
      const allCategory = allRestaurants.map(({ category }) => category);
      const filterCategory = allCategory.filter(
        (item, index) => allCategory.indexOf(item) === index,
      );
      setRestaurants(allRestaurants);
      setCategory(filterCategory);
    } catch (error) {
      console.log(error.code);
    }
  }, []);

  const deleteRestaurant = async (id) => {
    await deleteDoc(doc(database, 'restaurants', id));
    window.location.href = './';
  };

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>오늘은 무엇을 먹을까?</h2>

      <Category category={category} />

      <Swiper spaceBetween={10} slidesPerView={2} className={cx('slideBox')}>
        {restaurants?.map((item) => {
          const star = '⭐️'.repeat(item.score);
          return (
            <SwiperSlide className={cx('slide')} key={item.title}>
              <ul>
                <li> {item.title}</li>
                <li> {item.description}</li>
                <li> {item.address}</li>
                <li>{star}</li>
                {item.tag ? (
                  <li>
                    {item.tag.split(' ').map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </li>
                ) : (
                  ''
                )}
              </ul>
              <div className={cx('buttons')}>
                <button onClick={() => setRestaurantTitle(item.title)}>
                  상세정보
                </button>
                <button onClick={() => deleteRestaurant(item.title)}>
                  삭제
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Items;
