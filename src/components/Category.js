import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import styles from './Category.module.scss';
import 'swiper/swiper.scss';

const cx = classNames.bind(styles);

function Category({ category }) {
  return (
    <Swiper
      className={cx('categoryBox')}
      slidesPerView={'auto'}
      spaceBetween={10}
    >
      {category.map((item, index) => (
        <SwiperSlide className={cx('slide')} key={index}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Category;
