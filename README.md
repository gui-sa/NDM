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
### Configuração do banco de dados

Naturalmente as credenciais ficam em variaveis de ambientes e não devem ser mostradas. Vale enfatizar que este exercicio é demonstrativo e por isso as variaveis de ambiente estão abertas. \
Para [configurar o banco de dados](http://localhost:8080/):
-   Postgresql
-   user: admin
-   senha: password
Ao entrar clique no banco de dados 'esport', em seguida em 'Comando SQL' e execute os comandos que estão nos arquivos [DDL.sql](https://github.com/gui-sa/NDM/blob/main/DDL.sql) e [DML-examples.sql](https://github.com/gui-sa/NDM/blob/main/DML-examples.sql). \
Os comandos DML-examples serve apenas para demonstrações posteriores. \

Aguarde os servidores estabilizar e entre na [página WEB (dev)](http://localhost:3000/)

## Desativando e excluindo os containers:
~~~
docker compose -f app.yaml down
~~~
~~~
docker rmi frontgsa:1.0.0
~~~
~~~
docker rmi backendgsa:1.0.0
~~~