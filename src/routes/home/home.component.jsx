// import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

// import { CategoriesContext } from '../../contexts/categories.context';
import Directory from '../../components/directory/directory.component';

function Home() {
  // const { selectCategory } = useContext(CategoriesContext);
  // selectCategory('');

  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
}

export default Home;
