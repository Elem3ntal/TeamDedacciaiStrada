
function menu(id){
    if(id==0){
        document.getElementById("home").classList.add('active');
        document.getElementById("gallery").classList.remove('active');
        document.getElementById("members").classList.remove('active');
    }
    else if(id==1){
        document.getElementById("gallery").classList.add('active');
        document.getElementById("home").classList.remove('active');
        document.getElementById("members").classList.remove('active');
    }
    else if(id==2){
        document.getElementById("members").classList.add('active');
        document.getElementById("home").classList.remove('active');
        document.getElementById("gallery").classList.remove('active');
    }
    else{

    }
}
//document.getElementById("MyElement").classList.add('MyClass');

//document.getElementById("MyElement").classList.remove('MyClass');
