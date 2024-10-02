Worlds in Collision - Next.js Project
Este projeto foi desenvolvido pelo grupo como parte de um trabalho acadêmico, utilizando o framework Next.js com TypeScript. O tema é o livro "Worlds in Collision" de Immanuel Velikovsky. A aplicação é composta por quatro páginas principais, cada uma contendo ilustrações e informações sobre as principais ideias do autor, bem como uma página interativa de cálculo proposto por Velikovsky.

📝 Descrição Geral
Este projeto consiste em uma aplicação web que aborda as principais teorias discutidas no livro "Worlds in Collision". As páginas apresentam informações ilustradas sobre os eventos descritos no livro, incluindo a hipótese de catástrofes cósmicas e seus efeitos na Terra.

🚀 Tecnologias Utilizadas
Next.js com TypeScript: Para construção da aplicação web.
Tailwind CSS: Framework de estilização utilizado para o design e layout.
API da NASA: Integração com a API pública da NASA para exibição dinâmica de imagens espaciais relacionadas aos eventos descritos no livro.
Git/GitHub: Versionamento do projeto e colaboração em equipe.
📂 Estrutura do Projeto
Páginas
Página Principal (/): Introdução ao livro e breve apresentação das principais ideias discutidas.
Páginas de Ideias (/idea/[slug]): Três páginas dinâmicas apresentando cada uma das principais ideias do livro, baseadas nos slugs passados pela URL.
Página de Cálculo (/calculation): Página interativa para realização de um cálculo relacionado às hipóteses de Velikovsky.
Página de Erro Personalizada (not-found.tsx): Uma página que é exibida caso uma rota não seja encontrada, utilizando o componente de imagem do Next.js.
Componentes
NasaImages: Componente que busca e exibe imagens da API da NASA.
Estrutura de Arquivos
pages: Contém todas as páginas da aplicação, incluindo a página principal, páginas de ideias, cálculo, e a página de erro.
components: Componentes reutilizáveis, como NasaImages.
styles: Arquivos de estilos globais.
🌌 Funcionalidades
1. Rota Dinâmica (/idea/[slug])
As páginas de ideias são geradas dinamicamente com base nos slugs passados pela URL. Isso permite apresentar de forma organizada e acessível as diferentes hipóteses discutidas no livro.

2. Cálculo Proposto por Velikovsky
A página de cálculo permite ao usuário inserir valores e visualizar o resultado de um cálculo hipotético relacionado aos eventos cósmicos descritos por Velikovsky.

3. Integração com a API da NASA
Foi desenvolvido um endpoint em /api/route que faz a requisição das imagens da API da NASA. Essas imagens são exibidas dinamicamente nas páginas de ideias e no componente NasaImages.

4. Página de Erro Personalizada
Uma página de erro (not-found.tsx) foi criada para oferecer uma experiência agradável ao usuário caso ele tente acessar uma rota inexistente.

⚙️ Instalação e Execução
Pré-requisitos
Node.js (versão 14+)
npm ou yarn
Passos para Executar o Projeto
Clone o repositório:

bash
Copiar código
git clone <https://github.com/Cardoso2626/cp5-front.git>
Navegue até a pasta do projeto:

bash
Copiar código
cd worlds-in-collision
Instale as dependências:

bash
Copiar código
npm install
Execute o servidor de desenvolvimento:

bash
Copiar código
npm run dev
Acesse o projeto em http://localhost:3000.

🛠️ Desenvolvimento
Configuração do Tailwind CSS
O projeto utiliza o Tailwind CSS como único framework de estilização. As classes do Tailwind foram aplicadas em todos os componentes e páginas para manter um design consistente e responsivo.

Endpoints e API da NASA
Foi criado um endpoint em /api/route que realiza uma requisição HTTP GET à API da NASA. A API retorna uma lista de imagens que são utilizadas nas páginas de ideias para ilustrar os eventos descritos no livro.

Versionamento
O projeto foi versionado utilizando Git e GitHub. A equipe utilizou branches para desenvolvimento de funcionalidades específicas e realizou pull requests para colaborar e revisar o código antes de integrar na branch principal.

Main Branch: Branch principal contendo a versão estável do projeto.
Feature Branches: Cada membro do grupo trabalhou em uma branch de feature específica, garantindo que o desenvolvimento fosse modular e bem organizado.
Fluxo de Trabalho
Cada integrante do grupo contribuiu de forma ativa e efetiva, realizando no mínimo 10 commits durante o desenvolvimento do projeto. A revisão de código foi feita através de pull requests no GitHub, garantindo que todos os integrantes estivessem cientes das mudanças realizadas.

🖼️ Ilustrações
As imagens são fornecidas pela API da NASA e são exibidas dinamicamente em componentes como NasaImages. Isso enriquece a experiência do usuário, mostrando ilustrações reais dos corpos celestes discutidos no livro.

📦 Entrega
Após a conclusão do desenvolvimento, o projeto foi compactado e entregue conforme solicitado.


👥 Colaboradores
Integrante 1: Cauã Sanches de Santana
Integrante 2: Pedro Henrique Cardoso Saraiva
Integrante 3: Tamara Pantarotto Boni