const fs = require("fs");
const superagent = require("superagent");
const readFilePro = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject("opps there is an error");
            resolve(data);
        });
    });
};

const writeFilepro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) reject("cant write the file");
            resolve("write complete");
        });
    });
};

readFilePro(`${__dirname}/dog.txt`)
    .then((result) => {
        console.log(`breed: ${result}`);
        return superagent.get(`https://dog.ceo/api/breed/${result}/images/random`)
    })
    .then((res) => {
        console.log(res.body.message);
        return writeFilepro('./dog-img.txt', res.body.message);
    })
    .then(() => {
        console.log("Random dog img is saved");
    })
    .catch((err) => {
        console.log(err);
    });