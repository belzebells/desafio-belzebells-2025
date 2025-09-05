# 🐾 Desafio Abrigo de Animais 2025  

![Node.js](https://img.shields.io/badge/node-18.x-green)  
![Jest](https://img.shields.io/badge/tests-passing-brightgreen)  
![GitHub repo size](https://img.shields.io/github/repo-size/belzebells/desafio-belzebells-2025)  
![GitHub last commit](https://img.shields.io/github/last-commit/belzebells/desafio-belzebells-2025)  
![License](https://img.shields.io/badge/license-MIT-blue)  

_

# 🐾 Desafio Abrigo de Animais 2025  

Este projeto foi desenvolvido como parte de um **desafio técnico**.  
O objetivo é simular um sistema de adoção em um **Abrigo de Animais**, respeitando regras de afinidade com brinquedos, limites de adoção e casos especiais.  

---

## 🧩 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)  
- [Jest](https://jestjs.io/) para testes automatizados  
- Git + GitHub  

---

## 📜 Regras do sistema

1. Cada animal tem uma lista de brinquedos favoritos (em ordem).  
2. Uma pessoa pode adotar no máximo **3 animais**.  
3. Cada pessoa pode adotar **no máximo 1 gato**.  
4. O **Loco (jabuti)** só pode ser adotado se tiver **companhia**.  
5. Animais ou brinquedos inválidos são rejeitados.  

---

## 📂 Estrutura do projeto

StartDB-2025/
│── src/
│ ├── abrigo-animais.js # Código principal
│ ├── abrigo-animais.test.js # Testes automatizados
│── package.json
│── README.md
│── .gitignore


---

## 🚀 Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/belzebells/desafio-belzebells-2025.git
   cd desafio-belzebells-2025
  2. Instale as dependências:
     npm install
  3. Execute os testes:
     npm test

✅ Exemplo de saída dos testes
 PASS  src/abrigo-animais.test.js
  Abrigo de Animais
    ✓ Deve rejeitar animal inválido
    ✓ Deve encontrar pessoa para um animal
    ✓ Deve encontrar pessoa para um animal intercalando brinquedos
    ✓ Deve rejeitar brinquedo inválido
    ✓ Deve rejeitar animal duplicado na ordem
    ✓ Deve limitar adoção a no máximo 3 animais por pessoa
    ✓ Deve impedir que uma pessoa adote mais de 1 gato
    ✓ Deve adotar o Loco apenas se tiver companhia

📖 Autor
Feito com ❤️ por belzebells
 
