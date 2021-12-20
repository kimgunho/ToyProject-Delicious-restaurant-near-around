import classNames from 'classnames/bind';

import styles from './App.module.scss';

import Header from './components/shared/Header';
import Items from './components/Items';
import Detail from './components/Datail';

import { UserRestauantsProvider } from './context/useRestaurants';
import { UserModalProvider } from './context/useModal';

const cx = classNames.bind(styles);

function App() {
  return (
    <UserRestauantsProvider>
      <UserModalProvider>
        <Header />
        <div className={cx('wrapper')}>
          <Items />
          <Detail />
        </div>
      </UserModalProvider>
    </UserRestauantsProvider>
  );
}

export default App;
