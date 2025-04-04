const  CrudRepository  = require("./crud-repository");
const {Airplane}  = require('../models')
class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane)
    }

    async createAirplane(data){
        const airplane = await this.create(data);
        return airplane;
    }
}

module.exports = AirplaneRepository