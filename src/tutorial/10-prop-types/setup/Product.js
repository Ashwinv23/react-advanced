import React from 'react';
// import PropTypes from 'prop-types';
import defImg from '../../../assets/default-image.jpeg';

const Product = ({ name, image, price }) => {
  const url = image && image.url;
  return (
    <article className='product'>
      <img src={image.url || defImg} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 9.99}</p>
    </article>
  );
};

// Product.propTypes = {
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   image: PropTypes.object.isRequired,
// };

// Product.defaultProps = {
//   name: 'default name',
//   price: 0.0,
//   image: defImg,
// };

export default Product;
