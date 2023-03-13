import React, { useState, useEffect } from 'react';
import { Row, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsBrandLoading,
  selectBrandIds,
} from '../../store/modules/brand/selectors';
import { fetchBrands } from '../../store/modules/brand/thunk/fetchBrands';
import BrandBarLine from './BrandBarLine';

const BrandBar = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsBrandLoading);
  const dTypeIds = useSelector(selectBrandIds);

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <Form className="d-flex">
      {dTypeIds.map((id) => {
        return <BrandBarLine key={id} brandId={id} />;
      })}
    </Form>
  );
};

export default BrandBar;
