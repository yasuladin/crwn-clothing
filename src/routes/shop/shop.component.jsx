import { Fragment, useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap, selectedCategory, selectCategory } =
    useContext(CategoriesContext);
  // const { categoriesMap, selectedCategory } = useContext(CategoriesContext);

  const showMoreProducts = (category) => {
    selectCategory(category);
  };

  if (selectedCategory) {
    return (
      <>
        <h2 className="product-title">{selectedCategory}</h2>
        <div className="products-container">
          {categoriesMap[selectedCategory].map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <div className="product-head">
            <h2>{title}</h2>
            <span onClick={() => showMoreProducts(title)}>view more...</span>
          </div>
          <div className="products-container">
            {categoriesMap[title].map((product, index) => {
              if (index < 4) {
                return <ProductCard key={product.name} product={product} />;
              }
            })}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
