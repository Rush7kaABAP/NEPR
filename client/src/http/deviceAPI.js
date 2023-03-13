import { $authHost, $host } from '.';

export const createTypeAPI = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypesAPI = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createBrandsAPI = async (brand) => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
};

export const fetchBrandsAPI = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const createDeviceAPI = async (brand) => {
  const { data } = await $authHost.post('api/device', brand);
  return data;
};

export const fetchAllDevicesAPI = async () => {
  console.log('fetchAllDevicesAPI');
  const { data } = await $host.get('api/device');
  return data;
};

export const fetchOneDeviceAPI = async (deviceId) => {
  console.log('fetchOneDeviceAPI');
  const { data } = await $host.get(`api/device/id=${deviceId}`);
  return data;
};
