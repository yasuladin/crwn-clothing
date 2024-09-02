import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const { selectCategory} = useContext(CategoriesContext);

  const onClickHandler = () => {
    selectCategory(title);
  }

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="category-body-container">
        <Link to="/shop" onClick={onClickHandler}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
