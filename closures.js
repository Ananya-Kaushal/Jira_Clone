//a funtion with in a function which is dependent on variable is called closure() function
//function returning another function
function hello(params) {
    let count=0;
    return()=>{
        console.log(++count);
    }
}

hello()//1

let x=hello();
x();//1
x();//2
x();//3

let y=hello();//as it creates new space for y variable
y();//1
y();//2

let p=0;
function hell() {
    console.log("inside",++p);
}

hell();//inside 1
console.log("outside",count);//outside 1
hell();//inside 2