var classrooms = [{
    teacher: {
      name: "John Keating",
      subject: "Literature",
      age: 57
    },
    students: [{
      name: "John",
      age: 32
    },
    {
      name: "Suzy",
      age: 29
    },
    {
      name: "Jill",
      age: 44
    },
    {
      name: "Joe",
      age: 20
    }]
  },{
    teacher: {
      name: "Lillian Beauregard",
      subject: "Math",
      age: 74
    },
    students: [{
      name: "Johnny",
      age: 14
    },
    {
      name: "Suzie",
      age: 18
    },
    {
      name: "Jo",
      age: 22
    }]
  },{
    teacher: {
      name: "Mr. Schmidt",
      subject: "Literature",
      age: 50
    },
    students: [{
      name: "Bob",
      age: 32
    },
    {
      name: "George",
      age: 46
    }]
  }];


// FOR STUDENT AVE AGE

var num = 0;
var numStud = 0;

 for (var i = 0; i < classrooms.length; i += 1){
    var arrStud = classrooms[i]["students"];
      for (var j = 0; j < arrStud.length; j += 1){
        num += arrStud[j]["age"];
        numStud += 1;
      }
    var answer = (num/numStud);
  }
  console.log(answer);


// FOR TEACHER AVE AGE

var num = 0;
var numTeach = 0;

  for (var i = 0; i < classrooms.length; i += 1){
    num += classrooms[i]["teacher"]["age"];
    numTeach += 1;
  }
var answerTeach = num/numTeach;
console.log(answerTeach);


// FOR # OF LIT STUDENTS

var numStud = 0;

 for (var i = 0; i < classrooms.length; i += 1){
    var classes = classrooms[i]["teacher"]["subject"];
        if (classes === "Literature") {
          for (var key in classrooms[i]["students"]) {
            numStud += 1;
          }
        }
      }
console.log(numStud);
