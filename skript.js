// შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;


function argument(...n){
    let sum=0;
   for(let x of n){
       if(x>0){
         sum+=x;
       }
   }
   return sum;
}

let s=argument(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

                                                      //console.log(s);

// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
let mas=[10, 50, 6, 7, 8, 11, 6, 3, 9];

let sums=function(array){
     let s=0;
     for(let x of array){
        s+=x;
     }
     console.log(s);
}
                                         //sums(mas);

 mas.forEach((y,x) => {
  
   //console.log("indexi:-"+x+". elementi:-"+y);
 });       
 
    mas.forEach(myFunction);  
              
    function myFunction(item, index) {

      let s="";
      s+=index+": "+item;
      //console.log(s);
     
    }

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
  
//   ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
  function userName(){
      if(user.isloggedin==true){
          console.log(user.firstname+" "+user.lastname);
      }
      if (user.isloggedin==false) {
          console.log(false);
      }
  }
  
                                            //userName();

// შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
  let aray1=[12,32,54,2,67,45,23,2];
max=mas=>{
    let maxNums=mas[0];
   for (let index = 1; index < mas.length; index++) {
     if (mas[index]>maxNums){
         maxNums=mas[index]
     }
   }
   return maxNums;
}

                                        //console.log(max(aray));

//მასივის დალაგება
let aray2=[23,12,54,2,67,45,23,2];
bSort=aray=>{
  for(let i=0; i<aray.length; i++){
    for(let j=0; j<aray.length-1-i; j++){
        if(aray[j]>aray[j+1]){  
          let min=aray[j+1]  
          aray[j+1]=aray[j];
          aray[j]=min

        }
      
    }

  }
  for(let x of aray){
                                                  // console.log(x);
  }
}
bSort(aray2);

//masivis dalageba
let aray3=[23,12,54,2,67,45,23,2];
let bsort2=function(aray){
  for(let i=0; i<aray.length; i++){
    for(let j=0+i; j<aray.length; j++){
      if(aray[i]>aray[j]){
         let min=aray[j];
         aray[j]=aray[i];
         aray[i]=min
      }
     }
    }
    for(let x of aray){
      console.log(x);
    }
}

                                                       //bsort2(aray3);


sSort=aray=>{
    for(let i=0; i<aray.length; i++){
      let minindex=i;
      for(let j=1+i; j<aray.length; j++){
          if(aray[minindex]>aray[j]){
            minindex=j;
      }
     }
     if(minindex>0){
       let temp=aray[i];
       aray[i]=aray[minindex];
       aray[minindex]=temp
     }
    }
    for(let x of aray){
      console.log(x);
    }
}
                               //sSort(aray3);