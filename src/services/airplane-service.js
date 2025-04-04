const {AirplaneRepository} = require('../repositories');
const { Logger } = require('../utils/logger');

const airplaneRepo = new AirplaneRepository();

    async function createAirplane(data){
        try{
            const airplane = await airplaneRepo.createAirplane(data);
            return airplane;
        }catch(err){
            Logger.error(`Failed to create Airplane,Error: ${err.message}`)
        }
    }


module.exports = {
    createAirplane
}