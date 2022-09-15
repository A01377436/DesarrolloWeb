const path = require("path");

//Proceso cuando se llame a la ruta 
exports.getpalindromo=(req,res)=>{
    //res.send('<h1>Formulario de consola</h1>');
    res.sendFile(path.join(__dirname,'..','views','palindromo.html'));
}

exports.postpalindromo=(req,res)=>{
    console.log(req.body);
    console.log(req.body.frasePalindromo);
    let x = checkPalindromo(req.body.frasePalindromo);
    if(x){
        res.json({resultado:"Es Palindromo"})
    }else{
        res.json({resultado:"No Es Palindromo"})
    }
}

function checkPalindromo(str){
    var re = /[\W_]/g;
    var strMin = str.toLowerCase().replace(re, '');
    var strRev = strMin.split('').reverse().join(''); 
    return strRev === strMin;
}