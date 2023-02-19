class Ingreso extends Dato{
    static contadorIngreso = 0;

    constructor (descripcion, valor){
        super(descripcion, valor);/* Estos parametros se heredan de la clase padre Dato */
        this._id = ++ Ingreso.contadorIngreso;
    }
    get id(){
        return this._id;
    }
}