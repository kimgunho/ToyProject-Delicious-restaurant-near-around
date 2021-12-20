import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import Header from './components/shared/Header';
import Items from './components/Items';
import Detail from './components/Datail';

import { UserModalProvider } from './context/useModal';
import { database } from './firebase';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
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
  };

  return (
    <UserModalProvider>
      <Header />
      <Items restaurants={restaurants} category={category} />
      <Detail />
    </UserModalProvider>
  );
}

export default App;
