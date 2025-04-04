const { AirplaneService } = require("../services");

async function createAirplane(req,res){
    const data = req.body;
    const airplane = await AirplaneService.createAirplane(data);
    res.status(200).json(airplane);
}

module.exports = {
    createAirplane
}