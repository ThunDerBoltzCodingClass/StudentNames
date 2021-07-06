student_name_array=[];

function submit(){

var name_1= document.getElementById("Name_1").value;
var name_2= document.getElementById("Name_2").value;
var name_3= document.getElementById("Name_3").value;
var name_4= document.getElementById("Name_4").value;

student_name_array.push(name_1);
student_name_array.push(name_2);
student_name_array.push(name_3);
student_name_array.push(name_4);

console.log(student_name_array);
document.getElementById("display_name").innerHTML= student_name_array;
document.getElementById("submit_bt").style.display= "none";
document.getElementById("sort_bt").style.display= "inline-block";


}

function sort(){
    student_name_array.sort();
    console.log(student_name_array);
    document.getElementById("display_name").innerHTML= student_name_array;
}