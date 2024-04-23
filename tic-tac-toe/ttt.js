let box=document.querySelectorAll(".butt");
let reset=document.querySelector("#reset");
let start=document.querySelector("#start");
let msg=document.querySelector("#msg");
let msgc=document.querySelector(".msgc");
let se=document.querySelector("#h2");
let name1=prompt("enter player name who want choose 'O'");
let name2=prompt("enter player name  who want choose 'X'");
let player ="0";
let s1=document.querySelector("#s1");
let s2=document.querySelector("#s2");
let sc1=0;
let sc2=0;
let again1=document.querySelector("#again");
const check = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let count=0;

n1.innerText=name1; 

n2.innerText=name2; 

const resetgame= ()=>{
    for (let a of box) {
        a.disabled=false;
        a.innerText="";
        
    }
    name1=prompt("enter player name who want choose 'O'");
    name2=prompt("enter player name  who want choose 'X'");
    player ="0";
    count =0;
    n1.innerText=name1; 
    n2.innerText=name2; 
    sc1=0;
    sc2=0;
    s1.innerText=sc1;
    s2.innerText=sc2;
    n11=name1;
    se.innerHTML=`${n11}'s turn`;
    msgc.classList.add("hide");
};


const gamedraw = () =>{
    msg.innerHTML='game is draw ';
    msgc.classList.remove("hide");
    player ="0";
    count =0;
    n11=name1;
    se.innerHTML=`${n11}'s turn`;
};


const disabledbox= () =>{
    for (let a1 of box) {
        a1.disabled=true;
    }
};
const enabledbox = () =>{
    for (let a1 of box) {
        a1.enabled=true;
    }
};

const continuegame =() =>{
    msgc.classList.add("hide");
    for (let a of box) {
        a.disabled=false;
        a.innerText="";
    }
    count =0;
    n11=name1;
    se.innerHTML=`${n11}'s turn`;
    
};
reset.addEventListener("click",resetgame);
start.addEventListener("click",resetgame);
again1.addEventListener("click",continuegame);

box.forEach((a) => {
    let n1=name1;
       se.innerHTML=`${n1}'s turn`;
   
    a.addEventListener("click",()=> {
        let n1=name1;
        let n2=name2;
        if(player==="0")
        {   
            se.innerHTML=`${n2}'s turn`;
            console.log(n1);
            a.innerText="O";
            player="1";
        }
        else
        {
            
            se.innerText=`${n1}'s turn`;
            a.innerText="X";
            player="0";
        }
        a.disabled=true;
        count++;
        let winner=checkwinner();
        if(count ==9 && !winner)
        {
            gamedraw();
        }
    });
});
const setwinner= (a)=>{
    if (a=="O")
    {
        a=name1;
        sc1++;
        s1.innerText=sc1;
    }
    else if(a=="X")
    {
        a=name2;
        sc2++;
        s2.innerText=sc2;
    }
    msg.innerText=` winner is ${a} `;
    msgc.classList.remove("hide");
    disabledbox();
}
const checkwinner=()=>
{
    for (const a of check) {
        a1=box[a[0]].innerText;
        a2=box[a[1]].innerText;
        a3=box[a[2]].innerText; 
        if (a1!="" && a2!="" && a3!="") {
            if (a1===a2 && a2===a3) {
                setwinner(a1);
                return true;
            }
            
        }

    }
};



