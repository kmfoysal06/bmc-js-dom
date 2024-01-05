// let a = 100;
// let b = 200;

// function addAB(a,b){
// 	return a + b;
// }

// console.log(addAB(a,b));


// let a = 100;
// let b = 300;
// let sum = (a,b) => a + b;

// console.log(sum(a,b));
//output 400

// function spreads(...a){
// 	a.map((nthValue,n)=>{
// 		a[n] = nthValue * nthValue;
// 	})
// 	return a;
// }
// console.log(spreads(1,2,3,4)) 
//output [1,4,9,16]

// const spreads = (...a) => a.map((v,i) => a[i] = v * v);
// console.log(spreads(1,6,2))
//output [1,36,4]

// const developer = {name:'foysal',languages:['wordpress']}
// developer.languages.push('php');
// developer.languages.push('js');
// console.log(developer.languages);

// output ['wordpress','php','js']


// const arr = [1,24,54,45,435,35,443];
// arr[3] = 54; //[1,24,54,54,435,35,443]
// arr.push(443); //[1,24,54,54,435,35,443,443]
// arr[arr.length-2] = 0; //[1,24,54,54,435,35,0,443]
// console.log(arr)
// // output [1,24,54,54,435,35,0,443]