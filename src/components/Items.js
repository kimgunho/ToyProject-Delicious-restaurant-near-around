import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import classNames from 'classnames/bind';

import styles from './Items.module.scss';
// import 'swiper/swiper.scss';

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
      const result = querySnapshot.docs.map((doc) => doc.data());
      setRestaurants(result);
      const allCategory = result.map(({ category }) => category);
      const filterCategory = allCategory.filter(
        (item, index) => allCategory.indexOf(item) === index,
      );
      setCategory(filterCategory);
    } catch (error) {
      console.log(error.code);
    }
  }, []);

  const testF = () => {
    console.log(restaurants);
  };

  return (
    <div className={cx('container')}>
      <h2 onClick={testF} className={cx('title')}>
        오늘은 무엇을 먹을까?
      </h2>

      <Category category={category} />
      <ul>
        {restaurants.map((item) => {
          const star = '⭐️'.repeat(item.score);
          return (
            <li className={cx('slide')} key={item.title}>
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
              <button onClick={() => setRestaurantTitle(item.title)}>
                more
              </button>
            </li>
          );
        })}
      </ul>
      {/* <Swiper spaceBetween={10} slidesPerView={2} className={cx('slideBox')}>
        {restaurants?.map((item) => {
          restaurants.sort((a, b) => b.score - a.score);
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
              <button onClick={() => setRestaurantTitle(item.title)}>
                more
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </div>
  );
}

export default Items;
