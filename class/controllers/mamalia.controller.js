const MamaliaService = require(`../service/mamalia.service`)
class MamaliaController {
    constructor() {
        this.mamaliaService = new MamaliaService();
    }
    getSound() {
        this.mamaliaService.getSound();
    }

    async getAll() {
        return await this.mamaliaService.getAll()
    }

    async store(body) {
        await this.mamaliaService.store(body)
    }
}


module.exports = MamaliaController