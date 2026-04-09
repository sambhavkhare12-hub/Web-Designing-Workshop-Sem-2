function calculateResult() {
    let total = 0 ;
    let n =document.getElementById("subjects").value;

    for(let i=1; i<=n; i++){
        let marks = parseFloat(prompt("Enter marks for Subject " + i));
        total = total + marks;
    }
    let average =total/n;
    let grade ;
    let result;
    if(average>=95){
        grade="A+";
    }
    else if(average >=90){
        grade="A";
    }
    else if(average >=80){
        grade="B";
    }
    else if(average >=70){
        grade="C";
    }
    else if(average >=60){
        grade="D";
    }
    else if(average >=50){
        grade="E";
    }
    else {
        grade="F";
    }
    if(average >=50){
        result="PASS";
    }
    else{
        result="FAIL";
    }
    document.getElementById("result").innerHTML =
    "Grade: " + grade + "<br>" +
    "Result: " + result + "<br>" +
    "Total Marks: " + total + "<br>" ;
}