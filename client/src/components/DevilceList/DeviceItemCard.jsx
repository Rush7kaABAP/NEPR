import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectDeviceById } from '../../store/modules/device/selectors';
import { selectBrandById } from '../../store/modules/brand/selectors';
import { DEVICE_ROUTE } from '../../utils/consts';

const DeviceItemCard = ({ deviceId }) => {
  const device = useSelector((state) => selectDeviceById(state, { deviceId }));
  const navigate = useNavigate();
  const { brandId } = device;

  const brand = useSelector((state) => selectBrandById(state, { brandId }));
  return (
    <Col
      className={'mt-3'}
      md={3}
      onClick={(e) => navigate(DEVICE_ROUTE + '/' + device.id)}
    >
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={device.img} />
        <div className="d-flex justify-content-between align-items-center">
          <div>{brand.name}</div>
          <div className="d-flex">
            <div>{device.rating}</div>
            <div>.s.</div>
          </div>
          <div>{device.name}</div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItemCard;
