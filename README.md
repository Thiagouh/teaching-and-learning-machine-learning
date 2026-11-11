# Aprendendo Machine Learning

Minhas anotações de estudos sobre Machine Learning, da intuição e da matemática à prática. A ideia é aprender ensinando: explicar os conceitos que estudo e compartilhar o que encontro ao aplicá-los em projetos.

**[Acesse o site](https://aprendendo-machine-learning.vercel.app)** · [Trilhas de estudo](https://aprendendo-machine-learning.vercel.app/blog/)

## De volta aos estudos: em construção

Estou retomando o site para revisar os primeiros textos e acrescentar conteúdos a partir das experiências que adquiri desde então, principalmente em visão computacional. Os artigos disponíveis continuam abertos para leitura enquanto o roteiro cresce.

Cada conteúdo indica seu estado:

- **Publicado:** texto disponível para leitura.
- **Em escrita:** texto acessível, mas ainda sendo completado.
- **Planejado:** próximo assunto do roteiro, ainda sem página.

## O que você vai encontrar

### Fundamentos de Machine Learning

Os primeiros textos acompanham meus estudos do curso de Machine Learning da DeepLearning.AI, com explicações e exemplos próprios:

1. Introdução ao Machine Learning (em escrita).
2. Regressão Linear e Função de Custo.
3. Gradiente Descendente.
4. Regressão Linear Múltipla.
5. Vetorização.
6. Gradiente Descendente Múltiplo (em escrita).

Próximos conteúdos planejados: treino, validação e teste; um primeiro modelo de previsão de preços de casas.

### Python e ferramentas

Trilha planejada para Jupyter, NumPy, Pandas e organização de experimentos no Colab e no Kaggle.

### Visão computacional aplicada

Trilha planejada para imagens e vídeos com OpenCV, detecção de objetos, homografia, tracking, oclusões e avaliação dos resultados, conectando os conceitos aos estudos com vídeos de basquete.

## Sobre o projeto

Sou Thiago Lorhan, estudante de Engenharia da Computação na UFPB e integrante da TAIL. Criei este espaço para registrar meu aprendizado e compartilhar explicações com quem também está começando. O conteúdo será ampliado e revisado conforme os estudos avançarem.

O site utiliza Astro, Markdown/MDX e KaTeX para as expressões matemáticas.

## Executar localmente

Com uma versão de Node.js compatível com o Astro 5 e npm instalados:

```bash
npm ci
npm run dev
```

Abra o endereço mostrado no terminal, normalmente `http://localhost:4321`. O navegador acompanha as alterações salvas nos arquivos.

```bash
npm run build    # Gera a versão estática em dist/
npm run preview  # Abre uma prévia do build local
```

## Continuar preenchendo

- Os artigos ficam em `src/content/blog/`, em Markdown ou MDX.
- A home e a página de estudos compartilham o roteiro de `src/components/StudyRoadmap.astro`.
- As trilhas e os assuntos planejados ficam em `src/data/trilhas.ts`.
- Os campos dos artigos são definidos em `src/content.config.ts`.
- As imagens públicas ficam em `public/images/` e são referenciadas por `/images/nome-do-arquivo.png`.

Ao criar um artigo, preencha seus metadados:

```yaml
---
title: 'Título do artigo'
description: 'O que será explicado'
pubDate: 2026-10-28
trail: fundamentos
order: 7
status: in-progress
prerequisites: ['Conceito que o leitor deve conhecer']
pending: 'O que ainda falta completar neste texto.'
---
```

Use `fundamentos`, `ferramentas` ou `visao-computacional` em `trail`. O campo `order` define a sequência dentro da trilha e a navegação anterior/próximo. Os estados de artigos são `published` e `in-progress`; assuntos apenas planejados ficam no roteiro, sem criar páginas vazias.

Ao começar um assunto planejado, remova-o de `plannedLessons` e crie o artigo. Ao completá-lo, altere `status` para `published` e retire `pending`. Para revisões, preserve `pubDate` e acrescente `updatedDate` com a data da atualização.

## Referências

- [Machine Learning Specialization, DeepLearning.AI](https://www.deeplearning.ai/courses/machine-learning-specialization/)
- [Documentação do Astro](https://docs.astro.build/)
- [Documentação do NumPy](https://numpy.org/doc/)

O visual inicial utiliza o template de blog do Astro, baseado no [Bear Blog](https://github.com/HermanMartinus/bearblog/).
