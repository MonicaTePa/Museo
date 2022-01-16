class Piece4 extends Piece1 {
    contructor(description, name, author, age, classification, country, material) {
        super(description, name, author, age, classification);
        this.country = country;
        this.material = material;
    }

    getCountry() {
        return this.country
    }
    setCountry(country) {
        this.country = country;
    }
    getMaterial() {
        return this.material
    }
    setMaterial(material) {
        this.material = material;
    }
}