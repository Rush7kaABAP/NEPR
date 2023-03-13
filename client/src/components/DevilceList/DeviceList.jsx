import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsDeviceLoading,
  selectDeviceIds,
} from '../../store/modules/device/selectors';
import { fetchDevice } from '../../store/modules/device/thunk/fetchDevice';
import DeviceItemCard from './DeviceItemCard';

const DeviceList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsDeviceLoading);
  const dIds = useSelector(selectDeviceIds);

  useEffect(() => {
    dispatch(fetchDevice());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <Row className="d-flex">
      {dIds.map((id) => {
        return <DeviceItemCard key={id} deviceId={id} />;
      })}
    </Row>
  );
};

export default DeviceList;
