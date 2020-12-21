require("./models");

db.Stage.create([{name: "Kinetic Garden"}], (err, createStage) => {
    if(err){
        console.log(err)
    } else {
        console.log(createdStage);
    }
    process.exit();
});