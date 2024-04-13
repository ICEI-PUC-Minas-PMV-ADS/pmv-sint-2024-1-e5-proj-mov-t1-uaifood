# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A idealização do projeto foi baseada na necessidade dos produtores rurais venderem os seus produtos aos revendedores e eles conseguirem um acesso mais direto por meio desse software. O processo de criação se baseia no usuário, de modo que ele possa usufruir da ferramenta proposta de forma simples e intuitiva.

## Personas

A partir do público alvo definido e da pesquisa realizada com esse público, foram elaboradas as personas elencadas no quadro a seguir:

|Nome|Perfil|Expectativas|Atividades|
|----|------|------------|----------|
|Maria Emília (Agricultora Familiar)|Maria Emília é agricultora, tem 42 anos, classe baixa, brasileira, mãe de três filhos, mora em Belo Horizonte (MG) e trabalha com a agricultura familiar produzindo em seu quintal hortaliças e leguminosas.Ela gosta de trabalhar com a terra e se dedica também a criar galinhas. Tem profundo respeito com a natureza e gosta de cachorro. Ama os filhos e marido, adepta a novidades no mercado que possa facilitar o seu trabalho, gosta de ler, ver programas sobre agricultura na TV e passear com a família no parque.|Maria Emília tem como principal objetivo, conseguir vender sua produção de maneira mais acessível. Lamenta quando sai para vender seus produtos e volta com sobras para casa.|Ela almeja um produto que a possibilite escoar sua produção de maneira ampla, simples e funcional.Maria Emília prioriza sua produção conforme demanda, gostaria de obter uma agenda para se organizar em suas atividades.|
|José Duarte (Agricultor Familiar)|José Duarte tem 53 anos, brasileiro, residente em Sarzedo (MG). É pai de família e trabalha com a agricultura familiar e emprega como mão de obra os membros da família.Nos momentos de lazer ele assiste TV e leva a família para passear no zoológico, parque ou cinema. Gosta de animais como cavalo e cachorro e fica admirado com a imensidão do mar. Aprecia a natureza e sua maior preocupação é com o meio ambiente, busca conhecimento e procura praticar a preservação.|O grande desafio do José Duarte é conseguir escoar toda a sua produção, pois ele e sua família dedicam o tempo integral no cultivo das leguminosas e criação de patos. Tem vontade de voltar a estudar e ter um melhor conhecimento em tecnologias que agreguem valor ao seu negócio.|José Duarte faz sua administração de forma manual, gostaria de obter meios digitais para realizar esta tarefa e assim conseguir tempo para voltar estudar.|
|João Alberto (Comerciante)|João Alberto é comerciante e tem 48 anos, classe média, brasileiro, natural de Belo Horizonte, formado em administração e comerciante, casado e pai de dois filhos; Maria Alice e João Pedro. João trabalha com vendas de leguminosas e carne. João Alberto aprecia uma boa leitura e series de TV, especialmente documentários históricos. Gosta de pets e ama brincar com os filhos.|Seu maior desafio é ter diariamente produtos frescos, saudáveis e barato para oferecer aos seus clientes. João precisa acordar de madrugada 2 vezes por semana para ir a um centro distribuidor e obter produtos para fomentar seu comércio, sem contar que ele tem que atentar as informações sobre o clima da semana para poder comprar somente produtos que resistam a temperatura daquela semana e assim não ter prejuízo com a deterioração de algum produto.|João Alberto está sempre em busca de aprimorar a qualidade e preços de seus produtos e assim fazer a diferença no mercado, oferecendo produtos sem agrotóxicos e fertilizantes químicos.|

## Histórias de Usuário
Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... Maria Emília| QUERO/PRECISO ... de um aplicativo que me permita vender minha produção de maneira mais ágil e acessível. |PARA ...  alcançar mais clientes e garantir que seus produtos sejam pedidos e entregues de forma mais eficiente.                 |
|--------------------|------------------------------------|----------------------------------------|
|EU COMO... José Duarte| QUERO/PRECISO ... de um aplicativo que me ajude a agilizar o processo de escoar toda a produção |PARA ...  reduzir o indice de desperdício e que facilite a venda de seus produtos                 |
|EU COMO... João Alberto| QUERO/PRECISO ... de um aplicativo que me forneça acesso diário a produtos frescos, saudáveis e baratos |PARA ...  atender às necessidades dos meus clientes e manter a qualidade dos produtos para que sua clientela fique satiseita    |


## Arquitetura e Tecnologias

- Desenvolvimento front-end e back-end: Visual Studio Code, React Native, HTML, CSS, Javascript;
- Modelagem de Dados: 
- Banco de Dados:
- Comunicação equipe: Whatsapp, Microsoft Teams;
- Versionamento de Código: Git e Github;
- Planejamento: Metodologia Scrum e Trello.

## Project Model Canvas

Colocar a imagem do modelo construído apresentando a proposta de solução.

> **Links Úteis**:
> Disponíveis em material de apoio do projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001|O software deve possuir um catálogo de produtos exibindo uma lista incluindo informações como preço, descrição e imagens. |ALTA| 
|RF-002|O software deve permitir que o usuário se cadastre e faça login. |MÉDIA|
|RF-003|O software deve ter a capacidade de adicionar e cancelar itens do carrinho de compras.|ALTA| 
|RF-004|O sistema deve manter o controle de estoque de produtos disponíveis. |MÉDIA|
|RF-005|O software deve permitir cancelar a compra dos produtos. |ALTA| 
|RF-006|O sistema deve integrar diferentes formas de pagamento.| MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|O sistema deve ser responsivo para rodar em um dispositivos móveis. |MÉDIA| 
|RNF-002|Deve processar requisições do usuário em no máximo 3s. |MÉDIA| 
|RNF-003|O sistema deve garantir que os dados dos clientes sejam seguros e protegidos.|ALTA| 
|RNF-004|O aplicativo deve ser intuitivo e fácil de usar, mesmo para usuários inexperientes.|MÉDIA|
|RNF-005|O aplicativo deve estar disponível 24 horas por dia.|ALTA| 
|RNF-006|O aplicativo deve ser capz de lidar com um aumento repentino no número de usuários e transações.|ALTA|

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir:

|ID| Restrição                                                |
|--|----------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre.   |
|02| Não pode ser desenvolvido um módulo de backend.          |
|03| O projeto deverá ter um banco de dados.                  |
|04| O projeto deverá ser desenvolvido utilizando React native.|
|05| As informações cadastradas no sistema devem ter restrição de edição, garantindo a integridade das informações.|
|06| O sistema deve permitir o acesso apenas a usuários autorizados, como produtores e revendedores.|

## Diagrama de Casos de Uso

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-sint-2024-1-e5-proj-mov-t1-uaifood/blob/main/documents/img/casos-de-uso-uaifood.jpg
<!--(O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.)

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
-->
## Modelo ER (Projeto Conceitual)

![Projeto UaiFood](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2023-2-e4-proj-dist-t1-time2-projuaifood/assets/102733574/31471525-5ca3-4ad5-bf4b-be02a55a7200)

(O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

Sugestão de ferramentas para geração deste artefato: LucidChart e Draw.io.

A referência abaixo irá auxiliá-lo na geração do artefato “Modelo ER”.)

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Projeto da Base de Dados


(O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.)
