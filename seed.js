const db = require("./models");


db.Stage.insertMany([
    {
    name:"Kinetic Garden",
    setTimes: ["6PM", "7PM", "8PM", "9PM"],
    },
    {
    name: "Neon Field",
    setTimes: ["9PM", "10PM", "11PM", "12AM"]
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