function mySquirrel(species, color, age, name) {
    this.species = species;
    this.color = color;
    this.age = age;
    this.name = name;
}

exports.createNewSquirrel = (species, color, age, name) => {
    return new mySquirrel(species, color, age, name)
}