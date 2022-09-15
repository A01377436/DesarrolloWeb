const path = require("path");

//Proceso cuando se llame a la ruta 
exports.getIdiomaF=(req,res)=>{
    //res.send('<h1>Formulario de consola</h1>');
    res.sendFile(path.join(__dirname,'..','views','idiomaf.html'));
}

exports.postIdiomaF=(req,res)=>{
    console.log(req.body.fraseIdiomaf);
    console.log(typeof req.body.fraseIdiomaf)
    req.body.fraseIdiomaf=req.body.fraseIdiomaf.toLowerCase();
    req.body.fraseIdiomaf=req.body.fraseIdiomaf.replaceAll("afa","a");
    req.body.fraseIdiomaf=req.body.fraseIdiomaf.replaceAll("efe","e");
    req.body.fraseIdiomaf=req.body.fraseIdiomaf.replaceAll("ifi","i");
    req.body.fraseIdiomaf=req.body.fraseIdiomaf.replaceAll("ofo","o");
    req.body.fraseIdiomaf=req.body.fraseIdiomaf.replaceAll("ufu","u");
    res.json({resultado:req.body.fraseIdiomaf})
}