# 🔧 Backend - Sistema de Lista de Tarefas

Backend RESTful API desenvolvido em Node.js para gerenciamento de tarefas, seguindo arquitetura em camadas e boas práticas de desenvolvimento.

## 📋 Sobre

API desenvolvida como parte do **processo seletivo para vaga de estágio em Desenvolvimento Web**. Implementa todas as operações CRUD necessárias para o sistema de gerenciamento de tarefas, com validações completas e arquitetura organizada.

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web minimalista
- **PostgreSQL** - Banco de dados relacional


## 🏗️ Arquitetura

O projeto segue o padrão de **arquitetura em camadas**, separando responsabilidades:
- Controller
- Repository
- Routes
- Config
- Api

## 📊 Modelo de Dados

### Tabela: `tarefas`

| Campo         | Tipo            | Restrições                    |
|---------------|-----------------|-------------------------------|
| id            | SERIAL          | PRIMARY KEY                   |
| nome_tarefa   | VARCHAR(255)    | UNIQUE, NOT NULL              |
| custo         | DECIMAL(10,2)   | NOT NULL, CHECK (custo >= 0)  |
| data_limite   | DATE            | NOT NULL                      |
| ordem         | INTEGER         | NOT NULL                      |



**Resposta (200 OK):**
```json
[
  {
    "id": 1,
    "nome_tarefa": "Desenvolver frontend",
    "custo": "500.00",
    "data_limite": "2026-03-15",
    "ordem": 1
  },
  {
    "id": 2,
    "nome_tarefa": "Configurar banco de dados",
    "custo": "200.00",
    "data_limite": "2026-03-10",
    "ordem": 2
  }
]
```

### 2. Buscar tarefas
```http
GET /tarefas
```

**Resposta (200 OK):**
```json
{
  "id": 1,
  "nome_tarefa": "Desenvolver frontend",
  "custo": "500.00",
  "data_limite": "2026-03-15",
  "ordem": 1
}
```

### 3. Criar nova tarefa
```http
POST /tarefas
Content-Type: application/json
```

**Body:**
```json
{
  "nome_tarefa": "Nova Tarefa",
  "custo": 250.00,
  "data_limite": "2026-04-20"
}
```

**Resposta (201 Created):**
```json
{
  "mensagem": "Tarefa criada com sucesso"
}
```

**Resposta (400 Bad Request) - Nome duplicado:**
```json
{
  "mensagem": "Já existe uma tarefa com este nome"
}
```

### 4. Atualizar tarefa
```http
PUT /tarefas
Content-Type: application/json
```

**Body:**
```json
{
  "id":1,
  "nome_tarefa": "Tarefa Atualizada",
  "custo": 300.00,
  "data_limite": "2026-05-10",
}
```

**Resposta (200 OK):**
```json
{
  "mensagem": "Tarefa atualizada com sucesso"
}
```

### 5. Excluir tarefa
```http
DELETE /tarefas/:id
```

**Resposta (200 OK):**
```json
{
  "mensagem": "Tarefa excluída com sucesso"
}
```

### 6. Atualizar Ordem
```http
PATCH /tarefas
Content-Type: application/json
```

**Body:**
```json
{
  "id":1,
  "ordem":10
}
```

**Resposta (200 OK):**
```json
{
  "mensagem": "Tarefa atualizada com sucesso"
}
```


## 🚀 Deploy

### Vercel

## 👨‍💻 Desenvolvedor

**Lucas André* - Candidato à vaga de Estágio em Desenvolvimento Web
- GitHub:   https://github.com/lucas-andre-dev?tab=repositories
- LinkedIn: https://www.linkedin.com/in/lucas-andr%C3%A9-3351381a0/
- Email:    lucasandrecardoso@hotmail.com

---

💼 **Projeto desenvolvido como parte do processo seletivo - Fevereiro/2026**

