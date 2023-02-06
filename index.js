var express = require('express');
var app = express();
const storage = require('node-persist');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
storage.init();
app.get('/student/:id',async (req,res)=>{
    console.log(req.params.id);
    res.send(await storage.getItem(req.params.id));
});
app.post('/student', jsonParser, async(req, res) => {
    const {student_id, student_name, student_GPA} = req.body;
    await storage.setItem(student_id, student_name, student_GPA);
    res.send('Added student!');
});
app.get('/allstudents', function(req,res){
    res.send(`
      <h1>All students data!</h1>
      <h3>Student id: 101<br>
      Name: Jhon Smith<br>
      GPA: 4.5</h3> 
      <h3>Student id: 102<br>
      Name: Caleb Smith<br>
      GPA: 4</h3> 
      <h3>Student id: 103<br>
      Name: Carly Smith<br>
      GPA: 4.7</h3>
    `);
});
app.get('/student/101', function(req,res){
    res.send(`
      <h1>Student detail</h1>
      <h3>Student id: 101<br>
      Name: Jhon Smith<br>
      GPA: 4.5</h3>
    `);
});
app.get('/student/102', function(req,res){
    res.send(`
      <h1>Student detail</h1>
      <h3>Student id: 102<br>
      Name: Caleb Smith<br>
      GPA: 4</h3>
    `);
});
app.get('/student/103', function(req,res){
    res.send(`
      <h1>Student detail</h1>
      <h3>Student id: 103<br>
      Name: Carly Smith<br>
      GPA: 4.7</h3>
    `);
});
app.get('/student/topper', function(req,res){
    res.send(`
      <h1>Student detail</h1>
      <h3>Student id: 103<br>
      Name: Carly Smith<br>
      GPA: 4.7</h3>
    `);
});
app.listen(5000, () => {
    console.log("server has started");
});