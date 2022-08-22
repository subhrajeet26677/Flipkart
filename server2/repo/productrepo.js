const productmodel = require("../model/productsmodel");

let showproducts = () => {
    return productmodel.find();
}

let findbycatogary = (cat) => {
    return productmodel.find({ cat: cat })
}

let addfile = async (file) => {
    console.log('repo addfile executed');

    console.log(
        'here what goes inside files of repo ' + file
    )

    return productmodel.insertMany(file)
}

module.exports = { showproducts, addfile, findbycatogary }