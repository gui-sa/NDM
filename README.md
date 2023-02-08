# NDM
Desafio proposto por IGOR (Tech Lead do projeto) e Luiz, sócio do neǵocio. NDM é uma empresa cujo foco é assesoria Juridica para novos empreendimentos e Startups. O desafio esta na área de TI. Criar um servidor usando Node e que serve um frontend para o client usando REACTJS. O banco de dado é POSTGRESQL.

## Requisitos:
Durante o desenvolvimento, por questões de treinamento, imutabilidade, versionamento e requisitos de instalação, utilizei a ferramenta DOCKER (meu sistema operacional base é o LINUX UBUNTU). 

Entretando, na pasta, todos os códigos estão a mostra. As imagens do docker rodam o mesmo código ali exposto, logo, caso seja preferido, simplesmente rode usando os comando na aba Orientações sem DOCKER. 

## Orientações via DOCKER:
1) Dentro da pasta do arquivo abra um terminal de comandos e rode:
~~~
docker compose -f database.yaml up
~~~
Aguarde o servidor do banco de dados estabilizar. /

2) Vá até a pasta 'backend', contrua a imagem do docker do backend e crie seu container.
~~~
cd backend
~~~
~~~
docker build -t backendgsa:1.0.0 .
~~~
~~~
docker run --name backnode -d -p 5000:5000 -v $(pwd)/src:/app/src backendgsa:1.0.0
~~~

Retorne até o diretorio raiz deste repositorio (/NDM) /

3) Vá até a pasta 'page' , contrua a imagem do docker do front e crie seu container.
~~~
cd frontend/page
~~~
~~~
docker build -t frontgsa:1.0.0 .
~~~
~~~
docker run --name frontreact -d -p 3000:3000 -v $(pwd)/src:/app/src frontgsa:1.0.0
~~~
Espere o servidor estabilizar e entre na [página WEB (dev)](http://localhost:3000/)

### Desativando e excluindo os containers:
