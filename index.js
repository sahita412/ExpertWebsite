import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let redirectURL = "";

app.get("/",(req,res) =>{
    redirectURL = req.url;
    res.render('index.ejs');
    //get in touch form
});
app.post("/submit", (req,res)=>{
    let details = [req.body["email"],req.body["number"],req.body["customername"]];
    console.log(details);
    console.log(redirectURL);
    res.redirect(`${redirectURL}`);
});

app.get("/blog",(req,res)=>{
    //blog
    res.render('blog.ejs');
});

app.get("/contact",(req,res)=>{
    //form conatct and location
    redirectURL = req.url;
    res.render('contact.ejs');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});