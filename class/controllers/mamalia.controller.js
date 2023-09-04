const MamaliaService = require(`../service/mamalia.service`)
class MamaliaController {
    constructor() {
        this.mamaliaService = new MamaliaService();
    }
    getSound() {
        this.mamaliaService.getSound();
    }
}


module.exports = MamaliaController