import seeder from "mongoose-seed";

const db = "mongodv://localhost:27017/seedtutorial";

seeder.connect(db, () => {
    seeder.loadModels([
        "./product.model"
    ]);
    seeder.clearModels(['product']);
    seeder.populateModels(data, (err,done) => {
        if(err) {
            return console.log("seed err", err)
        }
        if(done) {
            return console.log("seed done", done);
        }
        seeder.disconnect();
    })
});

const data = [
    {
        "name":"Kinetic Garden",
        "setTimes": ["6PM", "7PM", "8PM", "9PM"],
        "_id": "5d725a4a7b292f5f8ceff787"
        },
        {
        "name": "Neon Field",
        "setTimes": ["9PM", "10PM", "11PM", "12AM"],
        "_id": "5d725a4a7b292f5f8cefd787"
        }
]