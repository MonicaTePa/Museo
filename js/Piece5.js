class Piece5 extends Piece1 {
    contructor(description, name, author, age, classification, sourcePiece) {
        super(description, name, author, age, classification);
        this.sourcePiece = sourcePiece;

    }

    getsourcePiece() {
        return this.sourcePiece
    }
    setsourcePiece(sourcePiece) {
        this.sourcePiece = sourcePiece;
    }

}