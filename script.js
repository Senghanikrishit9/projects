let arr  = [10,20,30,40,30,40];

function Notdupilcate(){
    let Notdup = arr.filter((items,index) => {
        return arr.indexOf(items) === index ;
    })
    console.log(Notdup);
    
}
function largevalue () {
    let large = Math.min(...arr)
    console.log(large);
    
}

largevalue();
Notdupilcate();