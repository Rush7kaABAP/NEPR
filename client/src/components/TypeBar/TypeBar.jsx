import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsDeviceTypeLoading,
  selectDeviceTypeIds,
} from '../../store/modules/deviceType/selectors';
import { fetchDeviceType } from '../../store/modules/deviceType/thunk/fetchDeviceType';
import TypeBarLine from './TypeBarLine';

const TypeBar = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsDeviceTypeLoading);
  const dTypeIds = useSelector(selectDeviceTypeIds);

  useEffect(() => {
    dispatch(fetchDeviceType());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <ListGroup>
      {dTypeIds.map((id) => {
        return <TypeBarLine key={id} deviceTypeId={id} />;
      })}
    </ListGroup>
  );
};

export default TypeBar;
