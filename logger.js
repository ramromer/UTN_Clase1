//logger
// const fs = require('fs')

// export default registarEvento = (data) =>{
//     fs.writeFileSync('log.txt',data,(err)=>{
//         if (err) throw err;
//     });
// }


var basico=500;
var intermedio=1000;
var premium=1500;


{document.getElementById("basico").addEventListener("click", function(){
    document.getElementById("precio").innerHTML=basico;
})
document.getElementById("intermedio").addEventListener("click",function(){
    document.getElementById("precio").innerHTML=intermedio;
})
document.getElementById("premium").addEventListener("click",function(){
    document.getElementById("precio").innerHTML=premium;
})
}
