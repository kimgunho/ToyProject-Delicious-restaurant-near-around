import Header from './components/shared/Header';
import Items from './components/Items';
import Detail from './components/Datail';

import { UserRestauantsProvider } from './context/useRestaurants';
import { UserModalProvider } from './context/useModal';

function App() {
  return (
    <UserRestauantsProvider>
      <UserModalProvider>
        <Header />
        <Items />
        <Detail />
      </UserModalProvider>
    </UserRestauantsProvider>
  );
}

export default App;
