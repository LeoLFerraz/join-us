# Original.io: Teste do Processo Seletivo
### Por Leonardo Ferraz (@ldlferraz)
###### Características do projeto e comentários:

**Para rodar o client + o mock server, digite 'npm run serve' no root do projeto**

  - **Observações:**
    - O menu principal no Header e o menu de categorias no Index levam a duas views diferentes do mesmo
    modelo (Categorias). Ambas as views são especificadas no Figma, uma é mostrada em Sapatos e a outra em
    Bolsas e Acessórios, então decidi exibí-las uma em cada acesso de menu.
    - Existem componentes inacabados: autenticação, ordenação na tela de produtos, finalizar compra...
    - Responsividade só é garantida até 1280px, não houve tempo para nenhum ajuste de responsividade mobile;

  - **Framework:** Vue.js;
    - A escolha por Vue foi baseada em três fatores: 
      1. Facilidade em produzir uma SPA (opção justificada mais à frente); 
      2. Experiência com a ferramenta;
      3. Facilidade de plugin de ferramentas de auxílio (como o Bootstrap e o Vue Router);
  
  - **Renderer:** EJS/Vue Template;
    - Únicas ferramentas de templates que uso regularmente.
    - Conheço Pug e Mustache e já pesquisei por alto outras alternativas, mas nenhuma me fez querer sair da zona de conforto do EJS.
  
  - **Bundler:** Webpack;
    - Assim como EJS, minha opção por usar o Webpack é puramente baseada na inexperiência com as alternativas. Já trabalhei com Browserify - que não seria uma opção adequada para esse projeto - e já estudei Parcel.
    - As principais features que aproveito aqui são: minificação do código, bundling dos scripts e, talvez mais presente no projeto, bundling do CSS.

  - **Transpiler:** Babel;
    - Uso o loader do Babel através do Webpack para transpilar o código. Desconheço alternativas ao Babel.

  - **Linter:** _Nenhum_;
    - Em geral, uso o ESLint. Porém, como freelancer, uso diferentes configurações do linter para clientes diferentes a fim de me aproximar do estilo de código dos times in-house deles. Para esse projeto, preferi deixá-los avaliar meu estilo pessoal de escrita de código.
    
  - **Banco de Dados:** JSON;
    - A intenção original era usar o Firebase, mas por limites no tempo disponível, mockei todos os dados em JSON.

  - **Arquitetura do nível de aplicação:** SPA
    - Apesar de e-commerces se preocuparem muito com SEO, optei por fazer uma SPA. 
    - Com mais tempo disponível, seria possível torná-la SEO-friendly com um pre-renderer para páginas menos dinâmicas, como a lista de produtos não-personalizada.

  - **Pré-processador CSS:** SCSS
    - SCSS é minha única experiência com pré-processadores CSS.

  - **Demais módulos notáveis:**
    - Bootstrap para auxílio na UI;
    - Vue Router para facilitar a construção da SPA;
    - Axios para chamadas à API;
    
  - **Parametrização do Front-end:**
    - Todos os produtos, categorias, subcategorias, etc são resgatados do "BD". Basta adicionar novas entradas
    nos JSONs do mock server para ver o efeito.
    - Todos os parâmetros encontram-se em .env ou src>assets>vars.scss
    - Brandlogo (svg) e referências ao nome da loja/cliente (string) em .env;
    - Link de redes sociais e certificados (se não houver nenhuma rede social parametrizada, nada renderiza nessa parte do footer) em .env;
    - Cores da aplicação em vars.scss;
    - Fontes em vars.scss;
    - Root e Host da API em .env e .env.production;
    - Certificados no footer em .env (uma forma mais inteligente de fazer isso seria apenas laçar um folder 'certs'
    no template do componente, mas preferi manter a parametrização consistente com a dos demais elementos para que TUDO
    que foi parametrizado na aplicação esteja visível no .env e no vars.scss);

  - **Notas**
    - O menu em dropdown para as categorias de produtos foi propositadamente ignorado;
    - Como não há tela de seleção de produtos ainda, use a rote /produtos/:id. Dois exemplos com características distintas são:
    BG0568 (não tem tamanho nem preço promocional) e RT0568 (tem tamanho e preço promocional).
    - Dois componentes de listagem de subcategorias foram implementados: um referente ao "Sapatos" e outro referente
    ao "Bolsas" e "Acessórios". Para acessar o primeiro componente, acesse uma categoria via Index (clicando nos svgs de categoria). 
    Para acessar a outra, acesse uma categoria via nav principal;
    - A API do mock server não segue as práticas REST pelo bem da brevidade;
    - Por falta de tempo, não foi implementado um sistema de autenticação. O carrinho e demais funcionalidades dependentes
    de usuário logado usam o primeiro usuário do JSON;
    - Considerei como "off" todo produto que possuisse preço promocional != preço. Cada acesso à categoria "off" faz
    uma requisição a Produtos, mas num BD tradicional eu implementaria uma regra de tabela para marcar uma flag, que então
    seria usada no template que renderiza "off";
    - Tive problemas com a "Gotham Book/Bold." Baixei e configurei a fonte, mas os componentes que a usam não se assemelham
    ao que vejo no Figma. Isso se destaca em dois lugares: "ASSINE NOSSAS NEWS" e no nome de categorias em amarelo com outline
    no componente de listagem de subcategorias.
    - Não achei solução para os nomes das categorias separados por sílabas que não fosse guardar as sílabas de cada categoria
    no "BD". A outra opção seria escrevê-los na mão, mas isso derrota o propósito da renderização dinâmica.

  - **TODO List:**
    - Responsividade para <1280px;
    - Imgs da SubCat1 devem deixar de usar boxshadow (fica feio com os SVGs das subcats de sapatos);
    - Homogeneizar como os SVGs/Imgs são inseridos nos templates;
    - Links da SubCat2 estão sem microinterações, trazê-los para o padrão do resto do projeto;
      - DONE. Mas como a especificação pedia os links já na primary-color, fiz com que on-hover fizesse eles secondary-actionable-color.
    - Loader da tela de produto está no centro de 100vh, trazê-lo para o centro do container de main;
      - DONE.
    - Desabilitar ou desenvolver Order By na listagem de produtos;
      - DONE (mas botei poucas opções porque haja tempo).
    - Adicionar msg quando nenhum produto for encontrado na tela de listagem de produtos;
      - DONE.
    - "Guia de Medidas" na tela de produtos precisa das microinterações de link e abrir um modal;
    - "Quem Viu, Viu Também" precisa de nome nos produtos, apesar de não estar especificado;
    - "Quem Viu, Viu Também" precisa de microinterações nos botões do carousel;
    - No carousel de fotos do Produto, fade-in e fade-out na troca de imagens;
    - Carrinho deve fechar on-blur, como a search results;
      - DONE.
    - Degradé branco de filtro nas imgs de "Quem Viu, Viu Também";
    - Select de subcategorias deve ser atualizado e filtrado de acordo com a categoria selecionada;
    - O SectionCollapse deve funcionar sobre o router-view também, mas não criei o componente para esse caso de uso;
      - DONE (feito em transition, não com SectionCollapse).
    - Links do Footer;
      - DONE.
    - Guardar em vetor as "sílabas" das categorias para fazer uma solução minimamente responsiva na tela de subcategoria;
    - Coisas que provavelmente não terei tempo de fazer:
      - Container da search results deveria ter height máximo adaptado ao número de results;
      - Tela de "Finalizar Compra";
