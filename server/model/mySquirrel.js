// Creates a constructor object to make a mySquirrel object

function mySquirrel(species, imageUrl, color, age, name) {
    this.species = species;
    this.imageUrl = imageUrl;
    this.color = color;
    this.age = age;
    this.name = name;
}

// Exports out the mySquirrel constructor

exports.createNewSquirrel = (species, imageUrl, color, age, name) => {
    return new mySquirrel(species, imageUrl, color, age, name)
}