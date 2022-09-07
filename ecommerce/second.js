const fs= require('fs');
let student = {
    name:'mike',
    age:23,
    gender:'male',
    department:'english',
    car:'honda'
};
let data = JSON.stringify(studnet,['car'],1);
fs.writeFile('P2.json',data,(err)=>{
    if(err)throw err;
    console.log('data written to file');
});