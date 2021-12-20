import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import classNames from 'classnames/bind';

import styles from './Items.module.scss';
import 'swiper/swiper.scss';

import { database } from '../firebase';
import { UseRestauants } from '../context/useRestaurants';

import Category from './Category';

const cx = classNames.bind(styles);

function Items() {
  const { restaurants, setRestaurants } = UseRestauants();
  const [category, setCategory] = useState([]);

  useEffect(async () => {
    let getAllCategory = [];
    try {
      const querySnapshot = await getDocs(collection(database, 'restaurants'));
      querySnapshot.forEach((doc) => {
        setRestaurants((prev) => [doc.data(), ...prev]);
        getAllCategory.push(doc.data().category);
      });
      const filterCategory = getAllCategory.filter(
        (item, index) => getAllCategory.indexOf(item) === index,
      );
      setCategory(filterCategory);
    } catch (error) {
      console.log(error.code);
    }
  }, []);

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>오늘은 무엇을 먹을까?</h2>

      <Category category={category} />

      <Swiper slidesPerView={2} className={cx('slideBox')}>
        {restaurants?.map((item) => {
          const star = '⭐️'.repeat(item.score);

          return (
            <SwiperSlide key={item.title}>
              <ul>
                <li>상호명 : {item.title}</li>
                <li>기본정보 : {item.description}</li>
                <li>위치 : {item.address}</li>
                <li>나의 점수 :{star}</li>
                <li>
                  태그 :
                  {item.tag?.split(' ').map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </li>
              </ul>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Items;
