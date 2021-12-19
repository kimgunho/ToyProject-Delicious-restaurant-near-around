import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import styles from './Items.module.scss';
import 'swiper/swiper.scss';

import TEMP_DATA from '../assets/data/temp';

import Category from './Category';

const cx = classNames.bind(styles);

function Items() {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>오늘은 무엇을 먹을까?</h2>

      <Category data={TEMP_DATA} />

      <Swiper slidesPerView={2} className={cx('slideBox')}>
        {TEMP_DATA.map((item) => {
          const star = '⭐️'.repeat(item.score);

          return (
            <SwiperSlide key={item.id}>
              <ul>
                <li>상호명 : {item.title}</li>
                <li>기본정보 : {item.description}</li>
                <li>위치 : {item.map}</li>
                <li>나의 점수 :{star}</li>
                <li>
                  태그 :
                  {item.tag.map((tag, index) => (
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
