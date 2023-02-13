# NDM
Desafio proposto por IGOR (Tech Lead do projeto) e Luiz, sócio do neǵocio. NDM é uma empresa cujo foco é assesoria Juridica para novos empreendimentos e Startups. O desafio esta na área de TI. Criar um servidor usando Node e que serve um frontend para o client usando REACTJS. O banco de dado é POSTGRESQL.

## Requisitos:
Durante o desenvolvimento, por questões de treinamento, imutabilidade, versionamento e requisitos de instalação, utilizei a ferramenta DOCKER (meu sistema operacional base é o LINUX UBUNTU). <br/>

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

Naturalmente as credenciais ficam em variaveis de ambientes e não devem ser mostradas. Vale enfatizar que este exercicio é demonstrativo e por isso as variaveis de ambiente estão abertas. <br/>
Para [configurar o banco de dados](http://localhost:8080/):
-   Postgresql
-   user: admin
-   senha: password <br/>
Ao entrar clique no banco de dados 'esport', em seguida em 'Comando SQL' e execute os comandos que estão nos arquivos [DDL.sql](https://github.com/gui-sa/NDM/blob/main/DDL.sql) e [DML-examples.sql](https://github.com/gui-sa/NDM/blob/main/DML-examples.sql). <br/>
Os comandos DML-examples serve apenas para demonstrações posteriores. <br/>

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

## Resultados:
  Tanto o logo tanto a imagem da pagina home foi criada usando uma API do unsplash (para ganhar tempo). <br/>
  A aplicação é responsiva. 
 
![image](https://user-images.githubusercontent.com/58073678/218465098-6be3db1d-1822-4295-8bae-102e941d848f.png)

![image](https://user-images.githubusercontent.com/58073678/218465168-d94bad80-39a9-410a-b712-0699a08464c4.png)

![image](https://user-images.githubusercontent.com/58073678/218465209-c1c85d7c-9da2-4fbe-8782-6d36c3f8ca8c.png)

![image](https://user-images.githubusercontent.com/58073678/218465246-489cebe2-2830-4c0e-ac03-ad1e3c7701a4.png)

![image](https://user-images.githubusercontent.com/58073678/218463935-666c08dc-860b-4cb0-bb16-e3441eaf100c.png)

![image](https://user-images.githubusercontent.com/58073678/218464011-0861820b-f69a-4f42-bd9c-e8b13e16ef45.png)

![image](https://user-images.githubusercontent.com/58073678/218464058-abf2d7f1-747b-4859-83ce-0641af958d52.png)

![image](https://user-images.githubusercontent.com/58073678/218464098-2e3fbcb4-e6a3-419b-80b6-d80fd7002712.png)

### Regras de negócios:
  A regra de negócio: cada time pode ter somente 5 jogadores foi implementado no servidor backend:

![image](https://user-images.githubusercontent.com/58073678/218464377-5739f759-2c62-4a70-bfac-04db59439985.png)

  A regra de cada jogador poder fazer parte de um único time foi resolvido pela forma com que o schema do banco de dados foi criado.
  
  
### Features:
  O front não deixa o usuario digitar valores invalidos, e ele não envia ao backend formularios que não possuam dados. <br/>
  Ao registrar um time, este aparece dinamicamente na barra de seleção de times no cadastro de jogadores. <br/>
  Ao registrar um jogador em um time, este aparece dinamicamente na pagina de overview. 
  
