import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { selectDeviceTypeById } from '../../store/modules/deviceType/selectors';

const TypeBarLine = ({ deviceTypeId }) => {
  const { name } = useSelector((state) =>
    selectDeviceTypeById(state, { deviceTypeId })
  );
  return (
    <ListGroup.Item
      //   active={isActiveFilter}
      style={{ cursor: 'pointer' }}
      onClick={(e) => alert('Set filter and apply it')}
    >
      {name}
    </ListGroup.Item>
  );
};

export default TypeBarLine;
