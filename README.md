# NDM
Desafio proposto por IGOR (Tech Lead do projeto) e Luiz, sócio do neǵocio. NDM é uma empresa cujo foco é assesoria Juridica para novos empreendimentos e Startups. O desafio esta na área de TI. Criar um servidor usando Node e que serve um frontend para o client usando REACTJS. O banco de dado é POSTGRESQL.

## Orientações:
1) Dentro da pasta do arquivo abra um terminal de comandos e rode:
~~~
docker compose -f database.yaml up
~~~
Aguarde o servidor do banco de dados estabilizar. \

3) Vá até a pasta 'page' e monte a imagem para o servidor frontend
~~~
cd frontend/page
~~~
~~~
docker build -t frontGSA:1.0.0 .
~~~
~~~
docker run --name frontReact -d -p 3000:3000 -v $(pwd)/src:/app/src frontGSA:1.0.0
~~~
Espere o servidor estabilizar e entre na [página WEB (dev)](http://localhost:3000/)
