import express from 'express';

const app = express(); //variável const do tipo app que é = express

app.get('/users', (request, response) => { //criando a rota users// resquest serve para obter dados da aplicação e o response serve para devolver os dados
    console.log('Listagem de usuário'); //função executada qdo usuário acessar a rota users

    response.json([
        'Jéssica',
        'Maria',
        'Alice',
        'Gigi'
    ]);
});

app.listen(3333); //porta de acesso