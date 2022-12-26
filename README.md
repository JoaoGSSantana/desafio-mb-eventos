
## Bem vindo a aplicação MB Eventos!

Aplicação para busca e compra de ingressos de eventos empresarias e universitários.

- Desenvolvido com React Native, Expo e TypeScript;
- Principais bibliotecas utilizadas: Styled Components, React Navigation, Expo Fonts e Axios;
- Utilização da biblioteca JSON Server para criar uma fake API.

### Rodando o projeto

- Rode o comando `npm install` na raiz do projeto para instalar a dependências;
- Rode o comando `npx expo start` ou `expo start` para rodar a aplicação.

## Fake API - JSON Server

Para utilizar a fake API do JSON Server é necessário executar um script disponibilizado em:

`package.json ->  scripts`  

É disponibilizado dois scripts relacionados ao JSON Server: 

O `server:physical` e `server:localhost`, onde o localhost executa o server em `localhost` como o próprio nome diz. E o `physical` serve para executar juntamente com a aplicação, para isso é necessário manter os dois executando com o mesmo IP.

### Deixando o server e o expo com mesmo IP

Depois de executar o Expo verifique em qual IP seu app está sendo executado. Após descobrir o IP vá até `package.json` e encontre o script `server:physical`, onde terá algo como:

`"json-server db.json --host 192.168.0.0 -m ./node_modules/json-server-auth"`

Agora altere o IP após `--host`, tendo como resultado:

`"json-server db.json --host <SEU-IP> -m ./node_modules/json-server-auth"`

Quase tudo pronto, basta rodar o comando `server:physical` e acessar no projeto: `./src/services/api.ts` e alterar na base URL o IP para seu novo IP do server e pronto.