import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import {getProductsDetails} from '../../redux/slices/products';
import {addToCart} from '../../redux/slices/cart';
import { SCREENS} from '../../constant';
import utills from '../../utills';
import {searchProducts} from '../../Api/products';

const ProductHandler = props => {
  const {dispatch, getState} = useReduxStore();
  const {CartItems} = getState('cart');
  const {AllProducts} = getState('products');
  const {isLoading} = getState('loading');
  const [productDetail, setProductDetail] = useState('');
  const [isAddToCart, setSetIsAddToCart] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [selectedColor, setSelectedColor] = React.useState('');
  const [searchData, setSearchData] = React.useState([]);
  const {ProfileData} = getState('profile');
  let searchTimeout;
  useEffect(() => {
    if (props.route.name === SCREENS.ProductsDetails) {
      loadProductDetail(props.route.params.ID);
      checkIsItemAvailableInCart();
    }
    if (props.route.name === SCREENS.SearchProducts) {
      handleSearchProducts();
    }
  }, []);

  const checkIsItemAvailableInCart = () => {
    const data = CartItems.find(item1 => item1.id === props.route.params.ID);
    if (data) {
      setSetIsAddToCart(true);
    } else {
      setSetIsAddToCart(false);
    }
  };

  const loadProductDetail = id => {
    dispatch(getProductsDetails(id))
      .unwrap()
      .then(response => {
        // console.log('loadProductDetail respose', response);
        setProductDetail(response);
      })
      .catch(err => {
        console.log('loadProductDetail err', err);
      });
  };

  const handleAddToCart = () => {
    if (
      productDetail?.attributes?.[0]?.options.length > 0 &&
      selectedColor === ''
    ) {
      utills.errorAlert('Please select color variant');
      return;
    }
    if (isAddToCart) {
      props.navigation.navigate(SCREENS.Cart);
    } else {
      setSetIsAddToCart(true);
      const index =
        productDetail?.attributes?.[0]?.options.indexOf(selectedColor);
      const temp = {
        id: productDetail?.id,
        name: productDetail?.name,
        price: productDetail?.price,
        image: productDetail?.images[0].src,
        rating: productDetail?.rating_count,
        quantity: quantity,
        selectedColor: selectedColor,
        variations: index !== undefined ? productDetail?.variations[index] : 0,
      };

      dispatch(addToCart(temp));
    }
  };

  const formatHTML = htmlString => {
    if (!htmlString) return ''; // Return empty string if htmlString is undefined or null
    return htmlString.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '\n');
  };

  const handleSearchProducts = text => {
    const params = {
      page: 1,
      per_page: 10,
      search: text,
    };

    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      dispatch(searchProducts(params))
        .unwrap()
        .then(response => {
          console.log('handleSearchProducts respose', response.length);
          setSearchData(response);
        })
        .catch(err => {
          console.log('handleSearchProducts err', err);
        });
    }, 500);
  };

  return {
    productDetail,
    isAddToCart,
    quantity,
    selectedColor,
    searchData,
    AllProducts,
    isLoading,
    ProfileData,
    formatHTML,
    setSelectedColor,
    setQuantity,
    setSetIsAddToCart,
    handleAddToCart,
    checkIsItemAvailableInCart,
    handleSearchProducts,
  };
};

export default ProductHandler;
