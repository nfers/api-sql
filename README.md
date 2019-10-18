# api-sql

- Api de backend desenvolvida em NodeJs, utilizando o frameWork ORM do Sequelize.

* O banco de dados utilizado no desenvolvimento é o PostgreSQL, caso deseje alterar, 
é necessário modificar o arquivo 'config/database.js' com suas credenciais.

### Clonando o projeto 

- execute no terminal _git clone git@github.com:nfers/api-sql.git_
- após clonado acesse a pasta _cd api-sql_

### Instalando Dependências

- acesse o *terminal* e digite _npm install_ para que todas as dependências sejam instaladas

### Instalando Dependências

- após configurar o arquivo 'config/database.js' com suas credenciais, execute o comando abaixo para criar o banco de dados: 
_npx sequelize db:create_

e pronto, sua base já foi criada de acordo com os dados que você informou.

#### Conferindo instalação do _Sequelize_

- o cli do sequelize deve ser instalado, execute o comando _npx sequelize -h_ 
para conferir se serão listadas as opções do mesmo, caso retorne erro, 
execute o comando _npm install sequelize-cli -D_ para instalar nas dependências e auxiliar no processo de desenvolvimento apenas.


#### Dúvidas sobre o uso do SEQUELIZE ORM

[![Sequelize Status](https://sequelize.org/master/manual/getting-started.html)]




    