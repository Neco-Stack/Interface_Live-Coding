import IPizzen from "../Interface/IPizzen";

class Pizzen implements IPizzen {
    _name: string;
    _desc?: string | undefined;


    constructor(name: string, desc?: string) {
        this._name = name;
        this._desc = desc
    }
}


export default Pizzen;