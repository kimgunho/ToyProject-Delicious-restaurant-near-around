import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { doc, setDoc } from 'firebase/firestore';

import styles from './Write.module.scss';

import { database } from '../../firebase';
import { UseModal } from '../../context/useModal';

const cx = classNames.bind(styles);

function Write() {
  const [values, setValues] = useState({});
  const { show, setShow } = UseModal();
  const [scoreIndex, setScoreIndex] = useState(null);
  const [platformIndex, setPlatformIndex] = useState(null);
  const title = useRef();

  const handleHide = () => {
    setShow(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await setDoc(doc(database, 'restaurants', title.current.value), values);
      handleHide();
    } catch (err) {
      console.log(err.code);
    }
  };

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={cx(['container', { show }])}>
      <h2 className={cx('title')}>
        맛집을 등록해주세요.{' '}
        <span onClick={handleHide} className={cx('cancel')}>
          취소
        </span>
      </h2>
      <form onSubmit={onSubmit}>
        <ul>
          <li>
            <label>상호명</label>
            <input
              required
              ref={title}
              name="title"
              type="text"
              onChange={onChange}
            />
          </li>
          <li>
            <label>기본정보</label>
            <input
              required
              name="description"
              type="text"
              onChange={onChange}
            />
          </li>
          <li>
            <label>카테고리</label>
            <input required name="category" type="text" onChange={onChange} />
          </li>
          <li>
            <label>상세설명</label>
            <textarea name="text" onChange={onChange} />
          </li>
          <li>
            <label>주소</label>
            <input name="address" type="text" onChange={onChange} />
          </li>
          <li>
            <label>점수</label>
            <p className={cx('list')}>
              {[1, 2, 3, 4, 5].map((index) => {
                const star = '⭐️'.repeat(index);
                return (
                  <span key={index}>
                    {star}
                    <label
                      className={cx([
                        'label',
                        { active: scoreIndex === index },
                      ])}
                      onClick={() => setScoreIndex(index)}
                      htmlFor={`score${index}`}
                    ></label>
                    <input
                      id={`score${index}`}
                      name="score"
                      type="radio"
                      value={index}
                      onChange={onChange}
                    />
                  </span>
                );
              })}
            </p>
          </li>
          <li>
            <label>배달 플랫폼</label>
            <p className={cx('list')}>
              {['배민', '쿠팡잇츠'].map((platform, index) => {
                return (
                  <span key={index}>
                    {platform}
                    <label
                      className={cx([
                        'label',
                        { active: platformIndex === index },
                      ])}
                      onClick={() => setPlatformIndex(index)}
                      htmlFor={`platform${index}`}
                    ></label>
                    <input
                      id={`platform${index}`}
                      name="platform"
                      type="radio"
                      value={platform}
                      onChange={onChange}
                    />
                  </span>
                );
              })}
            </p>
          </li>
          <li>
            <label>태그(스페이스로 구분합니다.)</label>
            <input name="tag" type="text" onChange={onChange} />
          </li>
        </ul>
        <input type="submit" value="등록하기" className={cx('button')} />
      </form>
    </div>
  );
}

export default Write;
