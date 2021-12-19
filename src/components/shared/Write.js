import classNames from 'classnames/bind';

import styles from './Write.module.scss';

const cx = classNames.bind(styles);

function Modal() {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>
        맛집을 등록해주세요. <span className={cx('cancel')}>취소</span>
      </h2>
      <form>
        <ul>
          <li>
            <label>상호명</label>
            <input type="text" />
          </li>
          <li>
            <label>기본정보</label>
            <input type="text" />
          </li>
          <li>
            <label>카테고리</label>
            <input type="text" />
          </li>
          <li>
            <label>상세설명</label>
            <textarea />
          </li>
          <li>
            <label>주소</label>
            <input type="text" />
          </li>
          <li>
            <label>점수</label>
            <input type="text" />
          </li>
          <li>
            <label>배달 플랫폼</label>
            <input type="text" />
          </li>
          <li>
            <label>태그</label>
            <input type="text" />
          </li>
        </ul>
      </form>

      <button>등록하기</button>
    </div>
  );
}

export default Modal;
