import Header from './components/shared/Header';
import Items from './components/Items';
import Detail from './components/Datail';

import { UserModalProvider } from './context/useModal';

function App() {
  return (
    <UserModalProvider>
      <Header />
      <Items />
      <Detail />
    </UserModalProvider>
  );
}

export default App;
