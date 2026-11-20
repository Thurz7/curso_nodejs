import express from "express";

const servidor = express();

servidor.get("/helloword", (req, resp) =>{
    resp.send("Hello word ;)")
})

servidor.listen(5001, () => console.log("A CONEXÃO COM A PORTA 5001 FOI BEM SUCEDIDA"));