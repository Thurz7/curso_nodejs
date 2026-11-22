import express from 'express';

const servidor =  express();
servidor.use(express.json());

servidor.get('/helloword', (req, resp) =>{
    resp.send('Ola mundo :)');
})

servidor.get('/menssagem/ocupado', (req, resp) =>{
    resp.send('Estou ocupado neste momento.');
})

servidor.get('/menssagem/disponivel', (req, resp) =>{
    resp.send('Estou dispoivel neste momento.');
})

servidor.get('/v2/menssagem/ocupado', (req, resp) =>{
    resp.send('Estou ocupado no instante');
})

servidor.get('/v2/menssagem/disponivel', (req, resp) =>{
    resp.send('Estou disponivel no instante');
})

servidor.get('/calculadora/soma/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;

    resp.send(`A resposta de ${n1} + ${n2} é igual a ${soma}`);
})
servidor.get('/calculadora/soma/:n1', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.query.n2);
    let soma = n1 + n2;

    resp.send(`A resposta de ${n1} + ${n2} é igual a ${soma}`);
})

servidor.get('/calculadora/subtracao/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let subtracao = n1 - n2;

    resp.send(`A resposta de ${n1} - ${n2} é ${subtracao}`)
})

servidor.get('/calculadora/divisao/:n1/:n2', (req, resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2)
    let divisao = n1 / n2;

    resp.send(`A resposta de ${n1} dividido por ${n2} é ${divisao}`);
})

servidor.get('/calculadora/multiplicacao/:n1/:n2', (req, resp) =>{
    let n1 =  Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let divisao = n1 * n2;

    resp.send(`A resposta de ${n1} x ${n2} é ${divisao}`);
})

servidor.get('/v2/calculadora/soma', (req, resp) =>{
    let n1 = Number(req.query.n1) ?? 'Numero não informado';
    let n2 = Number(req.query.n2) ?? 'Numero não informado';
    let soma = n1 + n2;

    resp.send(`A resposta de ${n1} + ${n2} é ${soma}`);

})

servidor.post('/media', (req, resp) =>{
    let n1 = (req.body.nota1);
    let n2 = (req.body.nota2);
    let n3 = (req.body.nota3);
    let media = (n1 + n2 + n3) /3;

    resp.send('A sua média é ' + media);
})

servidor.listen(5001, ()=> console.log('A API foi subida com sucesso na porta 5001'));