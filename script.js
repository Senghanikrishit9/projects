function cursuccess(pos){
    const coords = pos.coords;

   console.log(`latitude: ${coords.latitude}`);
   console.log(`longitude: ${coords.longitude}`);
   console.log(`within: ${coords.accuracy} meters`);
}

function curError(err) {
    console.log(`Error : + ${err.code} +  ${err.message}`);
}
function options(){
   console.log()
}


navigator.geolocation.getCurrentPosition(cursuccess, curError, options);