
class Category{
    constructor(name, id){
        this._name = name;
        this._id = id;
    }

    get name(){
        return this._name;
    }

    get id(){
        return this._id;
    }
}