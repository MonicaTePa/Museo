class Museum {
    constructor() {
        this.pieces = [];
    }
    getPieces() {
        return this.pieces
    }
    setPieces(pieces) {
        this.pieces = pieces;
    }
    initializeGallery() {
        let piece1 = new Piece1("Es una caja de música fabricada hacia el último cuarto del siglo XIX por Jérôme Thibouville-Lamy", "Caja de música", "Jérôme Thibouville-Lamy", "Segunda mitad siglo XIX", "idiófono");
        this.pieces.push(piece1);

        let piece2 = new Piece2("Es un magnetófono ReVox", "magnetófono ReVox", "REVOX", "1957", "electrófono", "Museo de la Música", "Barcelona");
        this.pieces.push(piece2);

        let piece3 = new Piece3("Es una cítara automática", "cítara automática", "Desconocido", "1900", "cordófono con puente", "metal y madera", "Barcelona");
        this.pieces.push(piece3);

        let piece4 = new Piece4("Es un shamisen japonés de tres cuerdas simples", "shamisen japonés", "Komatsuya", "2019", "cordófono con puente y mango", "Japón", "tela (tejido)");
        this.pieces.push(piece4);

        let piece5 = new Piece5("Cáscara de tortuga, percutor de caña, hilo y cinta adhesiva", "ayotl", "Desconocido", "1950", "idiófono", "Quico Pino de la Sierra");
        this.pieces.push(piece5);
    }



}