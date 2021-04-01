//lab 7 script, 03/26/2021, Jimmy Lee
const courseList = [{
    code: "ACIT 1620",
    name: "Web Fundamental Technologies"
  },
  {
    code: "ORGB 1105",
    name: "Organizational Behaviour"
  },
  {
    code: "MATH 1310",
    name: "Techical Math for CIT"
  }
];

function digits_count(n) {
  //(cite) count code from w3resource JavaScript: Count the digits of an integer
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

let userNum;
do {
  userNum = prompt("Enter a 4 digit course number: ");
}
while (isNaN(userNum) === true && digits_count(userNum) == 4);
for (let i of courseList) {
  if (i.code.includes(userNum) === true) {
    alert(`Correct ${digits_count(userNum)} digits! Yes, I am taking the course ${i.code} - ${i.name}`);
  }
}

boolean(isNaN(userNum) == true); {
  if (i.code.includes(userNum) === false) {
    courseList.push({
      code: userNum,
      name: null
    });
    console.log(`${userNum} is newly added to course, successfully`);
  }
}
