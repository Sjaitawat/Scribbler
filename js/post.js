function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML = "<p style='background-color:white; margin-top:20px; padding-top:15px; height:auto;'>"+addEventName+'</p>'+ document.getElementById('addEventNames').innerHTML;          
    a.value=a.defaultValue;
}
//Enter your code here
var like = 0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML='<i class="fa fa-thumbs-up" aria-hidden="true"></i> <span class="material-icons"> thumb_up</span>Liked!';
    like = like+1;
    if(like == 1){
        document.getElementById("commentCount").innerHTML=1 + " person likes this!";
    }
    else{
        document.getElementById("commentCount").innerHTML=like + " people have liked this!";
    }
}

var editbtn = 0;
function edit(){
    if(editbtn==0){
        document.getElementById("sj").innerHTML = 'Save <i class="fa fa-floppy-o" aria-hidden="true"></i>';
        var b = document.getElementById("blogtext").innerHTML;
        document.getElementById("textreadonly").style.display="block"; 
        document.getElementById("textreadonly").innerHTML = b;
        document.getElementById("blogtext").style.display= "none";
        var d = document.getElementById('Title').innerHTML;
        document.getElementById('titlespace').innerHTML = d;
        document.getElementById('Title').style.display = "none";
        document.getElementById('titlespace').style.display = "block";
        editbtn = 1;
    }
    else{
        
        var c = document.getElementById('textreadonly').value;
        document.getElementById('blogtext').innerHTML = c;
        document.getElementById("sj").innerHTML = 'Edit <span class="material-icons">edit </span> <i class="fa fa-edit"></i>';
        document.getElementById('textreadonly').style.display="none";
        document.getElementById('blogtext').style.display = "block";
        var a = document.getElementById('titlespace').value;
        document.getElementById('Title').innerHTML = a;
        document.getElementById('Title').style.display = "block";
        document.getElementById('titlespace').style.display = 'none';
        editbtn = 0;
    }
        
        
    

}