//basic setup
//determinee winner 
var table;
const circle='O';
const exe='X';
const combi=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];
const cells=document.querySelectorAll('.cell');
start();
function start(){
    document.querySelector(".endgame").style.display="none";
    table=Array.from(Array(9).keys());
    for(var i=0;i<cells.length;i++){
        cells[i].innerText='';
        cells[i].style.removeProperty('backgroundColor');
        cells[i].addEventListener('click',turnClick,false);
    }
}

function turnClick(square){
    console.log(square.target.id);
}