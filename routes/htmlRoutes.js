var path = require("path");


module.exports =function(app){

app.get("/", function(req, resp){
    resp.sendFile(path.join(__dirname, "../public/index.html"));
})

app.get("/notes", function(req, res){
// go to notes
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    

})
}

