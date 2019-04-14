
class Challenge{
    constructor(category, name, id){
        this._category = category;
        this._name = name;
        this._id = id;
    }

    get category(){
        return this._category;
    }

    get name(){
        return this._name;
    }

    get id(){
        return this._id;
    }

    // how to keep hints? 
    // how to keep categories? What if challenge belongs to multiple categories? 
    
    // Later 
    // complexity?
}