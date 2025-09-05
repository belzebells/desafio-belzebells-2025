# 🐾 Desafio Abrigo de Animais

Este repositório contém a solução do desafio **Abrigo de Animais**, onde a missão é encontrar pessoas aptas a levar animais para casa respeitando um conjunto de regras.

---

## 📋 Regras do Desafio

- O animal vai para a pessoa que mostrar todos seus brinquedos favoritos **na ordem desejada**.  
- Uma pessoa pode intercalar brinquedos que o animal queira ou não, desde que estejam na ordem desejada.  
- **Gatos não dividem** seus brinquedos (só um gato por pessoa).  
- Se ambas as pessoas tiverem condições de adoção, ninguém fica com o animal (vai para o abrigo).  
- Uma pessoa não pode levar mais de **três animais**.  
- **Loco** (jabuti) não se importa com a ordem, mas só pode ser adotado se tiver outro animal como companhia.  

---

## 🚀 Como rodar o projeto

1. Clone este repositório
´´´bash
git clone https://github.com/belzebells/desafio-belzebells-2025.git
cd desafio-belzebells-2025

3. Instale as dependências:
´´´bash npm install

4. Execute os testes
´´´bash npm test

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

🛠️ Tecnologias utilizadas

Node.js
Jest para os testes automatizados
Git e GitHub para versionamento e entrega

📌 Estrutura do projeto
📦 desafio-belzebells-2025
 ┣ 📂 src
 ┃ ┣ 📜 abrigo-animais.js        # Implementação da lógica
 ┃ ┗ 📜 abrigo-animais.test.js   # Testes automatizados
 ┣ 📜 package.json
 ┗ 📜 README.md

✨ Autora
Desenvolvido por belzebells 💜





