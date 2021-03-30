function submit(){
var display_array=[];
var name_array=[];
for(var j=1; j<=4;j++){
var name=document.getElementById("student_"+j).value;
name_array.push(name);
}
var length= name_array.length;
console.log(name_array);
for(var k=0; k<length;k++){
display_array.push("NAME-"+name_array[k]);
}
console.log(display_array);

document.getElementById("display_name_with_commas").innerHTML=display_array;
var remove_commas=display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}