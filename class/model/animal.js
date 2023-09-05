const fs = require('node:fs/promises');
class Animal {
    constructor(name, type, habitat) {
        this.name = name;
        this.type = type;
        this.habitat = habitat;
    }

    animalSound() {
        console.log("Roar");
    }

    async connect() {
        const file = await fs.readFile("./database/mamalia.json", { encoding: "utf-8" });
        return eval(file)
    }

    async findAll() {
        try {
            return await this.connect()
        } catch (error) {
            console.error(error);
        }

    }

    async save(body) {
        try {
            const data = await this.connect()
            data.push(body)
            await fs.writeFile("./database/mamalia.json", JSON.stringify(data, null, 2))
        } catch (error) {
            console.error(error)
        }
    }
}

class Mamalia extends Animal {

}

module.exports = Mamalia

// jika ingin mengexport lebih dari 1 class
// dituliskan semua class nya di bungkus menggunakan {}
// jika lebih dari dua tinggal di tambah lagi
// begitu pula dengan import nya berbeda
// module.export = { Animal, Mamalia }
