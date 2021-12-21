import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { collection, getDocs } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import styles from './Category.module.scss';
import 'swiper/swiper.scss';

import { UseRestauants } from '../context/useRestaurants';
import { database } from '../firebase';

const cx = classNames.bind(styles);

function Category({ category }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [allRestaurant, setAllRestaurant] = useState([]);
  const { setRestaurants } = UseRestauants();

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(database, 'restaurants'));
    querySnapshot.forEach((doc) =>
      setAllRestaurant((prev) => [...prev, doc.data()]),
    );
  }, []);

  useEffect(() => {
    if (keyword === '전체') {
      setRestaurants(allRestaurant);
      return;
    }
    console.log(allRestaurant);
    const filterRestaurants = allRestaurant.filter(
      (doc) => doc.category === keyword,
    );
    console.log(filterRestaurants);
    setRestaurants(filterRestaurants);
  }, [keyword]);

  const getCategoryKeyword = (event) => {
    const { clickedSlide } = event;
    if (clickedSlide !== undefined) {
      setKeyword(clickedSlide.innerText);
    }
  };

  return (
    <>
      테스트
      <Swiper
        className={cx('categoryBox')}
        slidesPerView={'auto'}
        onClick={getCategoryKeyword}
      >
        <SwiperSlide
          onClick={() => setActiveIndex(null)}
          className={cx('slide')}
        >
          전체
        </SwiperSlide>
        {category.map((item, index) => (
          <SwiperSlide
            className={cx(['slide', { on: activeIndex === index }])}
            onClick={() => setActiveIndex(index)}
            key={index}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Category;
