let table = document.getElementById("tableBody");

let start = 0;
let end = 3;

// get input from alert
let month = prompt("Enter current month");
let day = prompt("Enter current day");
let howManyPage = prompt("How many page do you want to see?");
// end = 21;
// end = 21*2;
// end = 21*3;


let total = [

]

let eachPage = [

]

for(let j=0;j<howManyPage;j++){
  for(let i=1;i<=8;i++) {
    if(j==0) {
      eachPage.push([
        i  , 
        8*1+i  ,
        8*2+i  
      ]);
    } else {
      eachPage.push([
        i + total[j-1][8-1][2] , // add with the last elemtn of last total index
        8*1+i + total[j-1][8-1][2]  ,
        8*2+i + total[j-1][8-1][2] 
      ]);
    }
  }
  total.push(eachPage);
  eachPage = [];
}


console.log(total);


let content = `` ;
//console.log(`start processing at ${start}`);

total.forEach(element => {
  element.forEach(e => {
    content += `<tr>`;
    e.forEach( value => {
      //console.log(value);
      content += `<td>${month}-${day}-${value}</td>`;
    });
    content += `</tr>`;
  });
});

// for(let i = start; i <= end; i++){
//   content += `
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   `;
// }

// content += `
// <div class="column">
//   <div class="cell">${month}-${day}-${i}</div>
//   <div class="cell">${month}-${day}-${i+1}</div>
//   <div class="cell">${month}-${day}-${i+2}</div>
// </div>
// `;

//console.log(`end processing at ${end}`);

table.innerHTML = content;