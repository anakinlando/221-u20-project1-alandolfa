function mySquirrel(species, imageUrl, color, age, name) {
    this.species = species;
    this.imageUrl = imageUrl;
    this.color = color;
    this.age = age;
    this.name = name;
}

exports.createNewSquirrel = (species, imageUrl, color, age, name) => {
    return new mySquirrel(species, imageUrl, color, age, name)
}