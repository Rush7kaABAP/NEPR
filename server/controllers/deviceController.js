const uuid = require('uuid');
const path = require('path');
const {Device, DeviceInfo} = require('../models/models');
const ApiError = require('../error/apiError');

class DeviceController{
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            
            let filename = uuid.v4() + '.jpeg';
            img.mv(path.resolve(__dirname, '..','static', filename));

            const device = await Device.create({
                name, price, brandId, typeId, img: filename
            });

            if (info) {
                info = JSON.parse(info);
                info.forEach(elem => {
                    DeviceInfo.create({
                        title: elem.title,
                        description: elem.description,
                        deviceId: device.id
                    });                    
                });
            }
        
            return res.json(device);            
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page, count} = req.query;
        page = page || 1;
        limit = limit || 10;
        const offset = limit * (page - 1);


        let devices;
        let whereList;
        if (brandId) { 
            if (!whereList) { whereList = {}; }
            whereList.brandId = brandId 
        };
        if (typeId) { 
            if (!whereList) { whereList = {}; }
            whereList.typeId = typeId 
        };

        if (!count){
            if (!whereList) {
                devices = await Device.findAll({limit, offset});
            } else {
                devices = await Device.findAll({where: whereList, limit, offset });
            }
        } else {
            if (!whereList) {
                devices = await Device.findAndCountAll({limit, offset});
            } else {
                devices = await Device.findAndCountAll({where: whereList, limit, offset });
            }    
        }
        return res.json(devices);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const device = await Device.findOne(
            {
                where: { id },
                include: [{ model: DeviceInfo, as: 'info' }]
            }
        )
        return res.json(device);

    }
}

module.exports = new DeviceController();