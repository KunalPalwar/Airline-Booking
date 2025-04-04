

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        console.log("data",data)
        const result = await this.model.create(data)
        return result;
    }
    async destroy(data){
     const result = await this.model.destroy({
        where:{
            id:data
        }
     })
     return result;
    }
}

module.exports = CrudRepository;
