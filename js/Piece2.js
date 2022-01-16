class Piece2 extends Piece1 {
    contructor(description, name, author, age, classification, museum, location) {
        super(description, name, author, age, classification);
        this.museum = museum;
        this.location = location;
    }

    getMuseum() {
        return this.museum
    }
    setMuseum(museum) {
        this.museum = museum;
    }
    getLocation() {
        return this.location
    }
    setLocation(location) {
        this.location = location;
    }
}