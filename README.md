# back-end-finance

**API RESTful para o sistema Finance solução completa de controle financeiro pessoal, focada em registrar e organizar receitas e despesas de forma estruturada, confiável e extensível.**

---

## 📌 Visão Geral

O `back-end-finance` é a camada de dados e regras de negócio da aplicação **Finance**, conectando-se diretamente ao `front-end-finance` via HTTP. Responsável por persistência, lógica e orquestração de transações financeiras.

---

## 🔗 Repositórios Relacionados

- **Front-end:** [`front-end-finance`](https://github.com/PHziinn/front-end-finance.git)

---

## 🛠️ Stack Técnica

- **Node.js** – Ambiente de execução
- **Express.js** – Framework web leve e escalável
- **Prisma ORM** – Abstração de banco de dados moderna e typesafe
- **PostgreSQL** – Banco de dados relacional robusto
- **dotenv** – Gerenciamento de variáveis de ambiente

---

## ✅ Funcionalidades Implementadas

- Registro de **ganhos (receitas)** e **gastos (despesas)**
- Listagem de todas as transações
- Exclusão de transações
- Cálculo de **saldo total** (entradas - saídas)
- Resumo financeiro para dashboard do frontend

---

## 🔌 Instalação e Execução Local

### Pré-requisitos

- Node.js (LTS)
- PostgreSQL
- Prisma CLI

### Setup

```bash
git clone https://github.com/PHziinn/back-end-finance.git

cd back-end-finance

npm install
```

## ⚖️ Licença

Este projeto está licenciado sob a
[licença MIT](./LICENCE).
