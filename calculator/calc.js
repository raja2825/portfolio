const d=document.getElementById("dis");
dis="";
const a1=document.getElementById("one");
const a2=document.getElementById("two");
const a3=document.getElementById("three");
const a4=document.getElementById("four");
const a5=document.getElementById("five");
const a6=document.getElementById("six");
const a7=document.getElementById("seven");
const a8=document.getElementById("eight");
const a9=document.getElementById("nine");
const a0=document.getElementById("zero");
const add=document.getElementById("add");
const sub=document.getElementById("sub");
const mul=document.getElementById("mul");
const di=document.getElementById("di");
const eq=document.getElementById("equal");
const clr=document.getElementById("clr");

a1.onclick=function(){
    dis+='1';
    d.textContent=dis;
    console.log(dis);
}
a2.onclick=function(){
    dis+='2';
    d.textContent=dis;
    console.log(dis);
}
a3.onclick=function(){
    dis+='3';
    d.textContent=dis;
    console.log(dis);
}
a4.onclick=function(){
    dis+='4';
    d.textContent=dis;
    console.log(dis);
}
a5.onclick=function(){
    dis+='5';
    d.textContent=dis;
    console.log(dis);
}
a6.onclick=function(){
    dis+='6';
    d.textContent=dis;
    console.log(dis);
}
a7.onclick=function(){
    dis+='7';
    d.textContent=dis;
    console.log(dis);
}
a8.onclick=function(){
    dis+='8';
    d.textContent=dis;
    console.log(dis);
}
a9.onclick=function(){
    dis+='9';
    d.textContent=dis;
    console.log(dis);
}
a0.onclick=function(){
    dis+='0';
    d.textContent=dis;
    console.log(dis);
}
add.onclick=function(){
    if(dis.length==0){
        window.alert("cant include operator at the begining");
    }
    if(dis.length>1){
    dis+='+';
    d.textContent=dis;
    console.log(dis);}
}
sub.onclick=function(){
    if(dis.length==0){
        window.alert("cant include operator at the begining");
    }
    dis+='-';
    d.textContent=dis;
    console.log(dis);
}
mul.onclick=function(){
    if(dis.length==0){
        window.alert("cant include operator at the begining");
    }
    dis+='*';
    d.textContent=dis;
    console.log(dis);
}
di.onclick=function(){
    if(dis.length==0){
        window.alert("cant include operator at the begining");
    }
    dis+='/';
    d.textContent=dis;
    console.log(dis);
}
eq.onclick=function(){
   
        let s=dis.charAt(dis.length-1);
        if(s=='+'||s=='-'||s=='/'||s=='*'){
            window.alert("Invalid expression");
        }
        let i=0;
        s='.';
        b=0,r="";
        while(i<dis.length){
            
            if(dis.charAt(i)=='+'||dis.charAt(i)=='-'||dis.charAt(i)=='/'||dis.charAt(i)=='*'){
               if(s=='.'){
                b=Number(r);
                s=dis.charAt(i);
                r="";
               }
               else{
                if(s=='+'){
                    b=b+Number(r);
                    r="";
                }
                else if(s=='-'){
                    b=b-Number(r);
                    r="";
                }
                else if(s=='*'){
                    b=b*Number(r);
                    r="";
                }
                else{
                    b=b/Number(r);
                    r="";
                }
                s=dis.charAt(i);
               }
            }
        else{
            r=r+dis.charAt(i);
        }
            i++;
        }
        if(s=='+'){
            b=b+Number(r);
            r="";
        }
        else if(s=='-'){
            b=b-Number(r);
            r="";
        }
        else if(s=='*'){
            b=b*Number(r);
            r="";
        }
        else{
            b=b/Number(r);
            r="";
        }
        d.textContent=b;
        console.log(b);
    
}
clr.onclick=function(){
    dis=dis.substring(0,dis.length-1);
    d.textContent=dis;
    console.log(dis);
}
