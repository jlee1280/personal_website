const courseList = [
    {code: "ACIT 1620" , name: "Web Fundamental Technologies"},
    {code: "ORGB 1105" , name: "Organizational Behaviour"},
    {code: "MATH 1310" , name: "Techical Math for CIT"}
];

boolean (i.code.includes(userNum) === false);
{
    courseList.push({code: userNum, name: null})
    console.log(`${userNum} is successfully added to list`);
}



let userNum;
do{
    userNum = prompt("Enter a 4 digit course number: ");
}
while(isNaN(userNum) === true && userNum.length == 4);
    for(let i of courseList){
        if(i.code.includes(userNum) === true){
            alert(`Yes I am taking the course ${i.code} - ${i.name}`);
        }
        else if(i.code.includes(userNum) === false){
            console.log(boolean(i.code.includes(userNum)))
        }
}
