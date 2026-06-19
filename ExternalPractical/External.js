function calculateResult() {
    let n = document.getElementById("subjects").value;
    let total = 0;
    for(let i=1 ; i<=n ; i++){
        let marks = parseFloat(prompt("Enter marks for Subject " + i));
        total = total + marks;
    } 
    let average = total/n;
    let grade;
    let result;
    if(average>=95){
        grade="A+";
    }
    else if(average >=85){
        grade="A";
    }
    else if(average >=75){
        grade="B";
    }
    else if(average >=65){
        grade="C";
    }
    else if(average >=55){
        grade="D";
    }
    else if(average >=50){
        grade="E";
    }
    else {
        grade="F";
    }
    
    document.getElementById("result").innerHTML =
    "Grade: " + grade + "<br>" +
    "Total Marks: " + total + "<br>" ;
}