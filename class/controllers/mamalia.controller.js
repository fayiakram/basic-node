class MamaliaController {
    constructor(mamaliaService) {
        this.mamaliaService = new MamaliaService();
    }
    getSound() {
        this.mamaliaService.getSound();
    }
}