# full-cycle-3.0

Este repositório contêm o código-fonte dos desafios propostos durante os módulos do curso Full Cycle 3.0.

## Docker

O primeiro módulo apresenta dois desafios.

1. Uma simples aplicação Golang para exibir uma determinada mensagem quando rodada em um  container/image docker.
2. Uma aplicação Node.js que se comunica com o banco de dados para ler um nome cadastrado no momento de build. Está aplicação é disponibilizada através de um proxy reverso implementado pelo Nginx.

### Aplicação Golang
Está aplicação deverá mostrar na tela a mensagem "Full Cycle Rocks" quando executada. A aplicação está disponível através de uma imagem Docker armazenada no meu repositório do Docker Hub. Para executá-la, basta rodar o comando a seguir:

```bash
    docker run --rm fredroo/go-full-cycle
```

O código-fonte do desafio go+docker está disponível em [desafio-go](/docker/desafio-go/).

### Aplicação Node
Está aplicação deverá exibir a mensagem "Full Cycle Rocks" juntamente com a listagem de nomes cadastrados no banco de dados. Para iniciá-la, basta rodar o comando a seguir:

```bash
    npm run serve
```

Ou, alternativamente:

```bash
    docker-compose up --build -d
```
pode dar um delay no nginx então atualize o navegador 2 vezes para não aparecer error 502

[acesse neste link http://localhost:8080](http://localhost:8080)

O código-fonte do desafio node+docker está disponível em [desafio-node](/docker/desafio-node/).