# NDM
Desafio proposto por IGOR (Tech Lead do projeto) e Luiz, sócio do neǵocio. NDM é uma empresa cujo foco é assesoria Juridica para novos empreendimentos e Startups. O desafio esta na área de TI. Criar um servidor usando Node e que serve um frontend para o client usando REACTJS. O banco de dado é POSTGRESQL.

## Requisitos:
Durante o desenvolvimento, por questões de treinamento, imutabilidade, versionamento e requisitos de instalação, utilizei a ferramenta DOCKER (meu sistema operacional base é o LINUX UBUNTU). 

Entretando, na pasta, todos os códigos estão a mostra. As imagens do docker rodam o mesmo código ali exposto, logo, caso seja preferido, simplesmente rode usando os comando na aba Orientações sem DOCKER. 

## Orientações via DOCKER:
1) Dentro da pasta do arquivo abra um terminal de comandos e rode:
~~~
docker build -t backendgsa:1.0.0 ./backend/
~~~
~~~
docker build -t frontgsa:1.0.0 ./frontend/page/
~~~
~~~
docker compose -f app.yaml up
~~~
Aguarde os servidores estabilizar e entre na [página WEB (dev)](http://localhost:3000/)

### Desativando e excluindo os containers:
~~~
docker compose -f app.yaml down
~~~
~~~
docker rmi frontgsa:1.0.0
~~~
~~~
docker rmi backendgsa:1.0.0
~~~
### Observação:
As variaveis de ambiente (.env) foram comitadas para demonstrar os passos como um todo (assim como suas presença no app.yaml). Porém, na pratica, essas variaveis de ambientes seriam omitidas.