$(document).ready(function(){

    var url = "https://randomuser.me/api/?results=1";
    var p ="";


    fetch(url)
        .then((response) => response.json())
        .then(function(data){
           url = "https://randomuser.me/api/?results=1";
           fetchInformation(url);
        })


    function fetchInformation(url){
        fetch(url)
        .then((response) => response.json())
        .then(function(data){

           data.results.forEach(person => {

               p = `<div class="well">
               
               <span style="margin-left:100px;">${person.name.title}  ${person.name.first} ${person.name.last}</span>
               <span style="margin-left:100px;">Email: ${person.email}</span>
               </div>`;
               console.log(p);
               $("#result").append(p);
               
           }); 

         
        
           
        })
    }




});
