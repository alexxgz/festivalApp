const db = require("./models");


db.Stage.insertMany([
    {
    name:"Kinetic Garden",
    setTimes: ["6PM", "7PM", "8PM", "9PM"],
    _id: 0
    },
    {
    name: "Neon Field",
    setTimes: ["9PM", "10PM", "11PM", "12AM"],
    _id: 1
    }
], 
    (err, createdStage) => {
  if(err){
    console.log(err);
  } else {
    console.log(createdStage);
  }
  process.exit();
});