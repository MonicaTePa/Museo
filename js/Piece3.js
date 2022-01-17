class Piece3 extends Piece1 {
    contructor(description, name, author, age, classification, material, location) {
        super(description, name, author, age, classification);
        this.material = material;
        this.location = location;
    }

    getMaterial() {
        return this.material
    }
    setMaterial(material) {
        this.material = material;
    }
    getLocation() {
        return this.location
    }
    setLocation(location) {
        this.location = location;
    }
}