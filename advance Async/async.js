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

const getDogPic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(`breed: ${data}`);

        const res1Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        // console.log(res.body.message);

        const res2Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        // console.log(res.body.message);

        const res3Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        // console.log(res.body.message);

        const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
        const imgs = all.map(el => el.body.message)
        console.log(imgs);

        await writeFilepro('./dog-img.txt', imgs.join('\n'));
        console.log("Random dog img is saved");
    } catch (err) {
        console.log(err);
        throw (err);
    }
    return "2s: ready 🐶";
}

(async () => {
    try {
        console.log("1s: will get dog pic");
        const x = await getDogPic();
        console.log(x);
        console.log("3s: done getting dog pic");
    } catch (err) {
        console.log("ERROR");
    }
})();

/*
console.log("1s: will get dog pic");
getDogPic().then(x => {
    console.log(x);
    console.log("3s: done getting dog pic");
}).catch(err => {
    console.log("ERROR 💥");
}) // runs on the background
*/