


let input;

function btn(){
   input ={name:`${document.getElementById('name').value}` , 
    number:`${document.getElementById('number').value}`}
    

}

function output(){

    let myJSON =  JSON.stringify(input);
    console.log(myJSON)
    document.getElementById('show').value= myJSON;
}
