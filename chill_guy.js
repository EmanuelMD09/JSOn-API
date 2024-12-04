import fastify from "fastify"
import cors from '@fastify/cors'

const server = fastify();

server.register(cors, {
    origin: '*',
    method: ['GET', 'POST']
})

const banco = [
    {
        email: 'chillguy@gmail.com',
        senha: '123'
    }
];

server.post('/login', (request) => {
    const usuario = request.body
    for (const userBanco of banco) {
        if (userBanco.email === usuario.email && usuario.senha === userBanco.senha){
            return {mensagem:'Pode Entrar'};
        } else {
            return {mensagem:'Credenciais Invalidas'};
        }
    }
});

server.get('/Emanuel', () => {
    return 'Chill Guy'
});

server.listen({
    port: 3333
});
