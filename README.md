### API Rest Sequelize Typescript

Esta API irá simular o back-end de uma aplicação de vagas de emprego. Nela, candidatos vão poder se cadastrar e então se candidatar a vagas. Enquanto isso, empresas também podem se cadastrar e criar vagas de emprego para que os candidatos se candidatem.

## Etapas do Projeto

As etapas de criação do projeto serão as seguintes:

1. Preparação - Criaremos o projeto, instalaremos o typescript e as outras dependências e prepararemos o terreno com as configurações básicas para deixar ele funcional.
2. Banco de Dados - Configuraremos a CLI do Sequelize, criaremos o banco de dados, a tabela de candidatos através de migrations, um seeder e o seu model.
3. Endpoints de Candidatos - Separaremos a lógica da nossa aplicação em um arquivo de rotas e controladores que trabalharão com as requisições recebidas e criaremos as rotas do padrão Rest para o model de candidatos (create, read, update e delete).
4. Empresas - Repetiremos o processo de criação do recurso de candidatos para as empresas. Criaremos a migration, o model, o controller com métodos Rest e rotas para esses métodos.
5. Relacionamento um-para-muitos - Criaremos a tabela de vagas que terá um relacionamento com a tabela de empresas. E também criaremos os endpoints para interagir com essa tabela.
6. Relacionamento muitos-para-muitos - Criaremos uma tabela intermediária entre candidatos e vagas que representará as candidaturas. Veremos como podemos lidar com esse relacionamento no sequelize.