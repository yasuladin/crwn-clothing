// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// import { CategoriesContext } from '../../contexts/categories.context';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  // const { selectCategory } = useContext(CategoriesContext);
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  // const onClickHandler = () => {
  //   selectCategory(title);
  // };

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage $imageUrl={imageUrl} />
      <Body>
        {/* <Link to="/shop" onClick={onClickHandler}> */}
        <h2>{title}</h2>
        <p>Shop Now</p>
        {/* </Link> */}
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
