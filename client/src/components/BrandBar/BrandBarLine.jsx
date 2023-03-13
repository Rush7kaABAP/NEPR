import React from 'react';
import { Form, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { selectBrandById } from '../../store/modules/brand/selectors';

const BrandBarLine = ({ brandId }) => {
  const { name } = useSelector((state) => selectBrandById(state, { brandId }));
  return (
    <Card
      // border={isActiveFilter?'danger':'light'}
      style={{ cursor: 'pointer' }}
      className="p-3"
      onClick={(e) => alert('Set filter and apply it')}
    >
      {name}
    </Card>
  );
};

export default BrandBarLine;
