const Mamalia = require(`../model/animal`)
// untuk mengambil class yang di exports lebih dari 1 class
// dibungkus menggunakan {}
// fungsinya adalah agar kita hanya mengambil class yang kita perlukan
// const {Mamalia} = require(`../model/animal`)
class MamaliaService {
    constructor() {
        this.mamaliaModel = new Mamalia;
    }
    getSound() {
        this.mamaliaModel.animalSound();
    }
    async getAll() {
        return await this.mamaliaModel.findAll()
    }
    async store(body) {
        if (body.type == "Mamalia") {
            const mamalia = new Mamalia(body.name, body.type, body.habitat)
            await this.mamaliaModel.save(mamalia)
        } else {
            throw new Error("Hewan yang diinput bukan mamalia");
        }
    }
}

module.exports = MamaliaService