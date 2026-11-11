---
title: 'Introdução ao Machine Learning'
description: 'Entendendo os fundamentos antes dos algoritmos'
pubDate: 'Dec 20 2025'
heroImage: '/images/intro_classificacao.png'
tags: ['ml-basics', 'teoria']
updatedDate: 2026-10-28
trail: fundamentos
order: 1
status: in-progress
prerequisites: ['Nenhum conhecimento prévio de Machine Learning']
pending: 'Falta ampliar os exemplos e apresentar outras formas de aprendizado.'
---

Quando falamos de Aprendizado de Máquina, nos referimos a métodos de inteligência artificial que aprendem padrões a partir de dados. E esse aprendizado pode ocorrer de diferentes formas. Dois tipos importantes são:

## 1. Aprendizado Supervisionado

É um treinamento no qual entregamos uma série de entradas (features, ou 'x') que já possuem consigo suas respostas (labels, ou 'y'). Ou seja, entregamos o "gabarito" para que o modelo saiba prever a resposta mais adequada para uma entrada na qual não se sabe a resposta ainda (ou o modelo não deve saber, já que ele tem que prever).

> Damos a ele a pergunta (x) e a resposta (y). O objetivo do modelo é aprender a mapear um para o outro.

**Exemplos**:

* **Regressão**: Quando queremos prever um número. (Ex.: Preço de casas, Temperatura)
* **Classificação**: Quando queremos prever uma categoria. (Ex.: "É um Cachorro ou um Gato?", "É um tumor ou não?")

## 2. Aprendizado Não-Supervisionado

Diferente do anterior, aqui não entregamos o gabarito. Nesse caso, o modelo procura padrões nos dados sem receber as respostas esperadas. Uma possibilidade é agrupar os dados conforme a similaridade entre eles, mas o aprendizado não supervisionado não se limita a isso.

**Exemplo:**

* 1. **Clusterização**: O modelo analisa muitos dados (tipo mil) e separa em grupos (três, por exemplo), onde cada grupo possui padrões distintos. Isso é muito útil!
