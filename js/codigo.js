function provar()
{
    
    alert("Comprobar la union");
}
function calc(){
    let categori="";
    let n1=document.getElementById('nota01').value;
    
    if (n1<12){
        categori="D";
    }
    if (14>n1>=12){
        categori="C";
    }
    if (17>n1>=14){
        categori="B";
    }
    if(n1>=17){
        categori="A";
    }
    if(n1>20){
        categori="Error"
    }
    if(n1<0){
        categori="Error"
    }
    document.curso.categoria.value=categori;
}
function limp(){
    document.getElementById('nota01').value="";
    document.getElementById('categoria').value="";
}
function traba(){
    let cate=document.getElementById('cat').value;
    let bru=0;
    let nhjo=document.getElementById('nhijo').value;
    let bonijo=0;
    let njo=0;
    let cion=document.getElementById('condi').value;
    let conlab=0
    let total=0;

    if(cate=="A"){
        bru=2350
    }
    if(cate=="B"){
        bru=2000
    }
    if(cate=="C"){
        bru=1850
    }
    if(cate=="D"){
        bru=1500
    }
    
    if(nhjo>3){
        njo=nhjo-3;
        bonijo=njo*10+75;
    }
    if(nhjo<=3){
        bonijo=nhjo*25;
    }

    if(cion=="C"){
        conlab=((bru/100)*10)
    }
    if(cion=="N"){
        conlab=((bru/100)*15)
    }
    total=bru+bonijo+conlab
    document.curso.sueldo.value=total;
}
function planlimpi(){
    document.getElementById('cat').value=""; 
    document.getElementById('nhijo').value="";
    document.getElementById('condi').value="";
    document.getElementById('sueldo').value="";
}
function cal(){
    let boni=document.getElementById('niños').value;
    let totboni=0;
    let vent=document.getElementById('ventas').value;
    let totvent=0;
    let bruto=0;
    let neto=0;
    let des=0;

    totboni=boni*50;
    totvent=(vent/100)*7.5
    bruto=totboni+totvent+600
    des=((bruto/100)*11)
    neto=bruto-((bruto/100)*11)
    document.curso.suelbru.value=bruto
    document.curso.comision.value=totvent
    document.curso.descu.value=des
    document.curso.suelnet.value=neto
    document.curso.bono.value=totboni
}
function limpiezaaaa(){
    document.getElementById('niños').value="";
    document.getElementById('ventas').value="";
    document.getElementById('bono').value="";
    document.getElementById('comision').value="";
    document.getElementById('suelbru').value="";
    document.getElementById('descu').value="";
    document.getElementById('suelnet').value="";
}