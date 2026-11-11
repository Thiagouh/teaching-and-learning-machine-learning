export const trails = [
  { id: 'fundamentos', title: 'Fundamentos de Machine Learning', description: 'Da intuição à matemática e à implementação dos primeiros modelos.' },
  { id: 'ferramentas', title: 'Python e ferramentas', description: 'As ferramentas que ajudam a transformar uma ideia em um experimento.' },
  { id: 'visao-computacional', title: 'Visão computacional aplicada', description: 'Imagens, vídeos e os problemas que aparecem ao trabalhar com dados reais.' },
] as const;

export const statusLabels = { published: 'Publicado', 'in-progress': 'Em escrita', planned: 'Planejado' } as const;

// Sem página ou link até a escrita começar.
export const plannedLessons = [
  { trail: 'fundamentos', title: 'Treino, validação e teste', description: 'Como avaliar o modelo com dados que ele ainda não viu.' },
  { trail: 'fundamentos', title: 'Meu primeiro modelo: prevendo preços de casas', description: 'Reunindo regressão, custo e gradiente em um notebook.' },
  { trail: 'ferramentas', title: 'Jupyter, NumPy e Pandas', description: 'Preparando o ambiente e trabalhando com os dados.' },
  { trail: 'ferramentas', title: 'Organizando experimentos no Colab e no Kaggle', description: 'Entradas, ambiente, execução e registro dos resultados.' },
  { trail: 'visao-computacional', title: 'Imagens e vídeos com OpenCV', description: 'Pixels, resolução, FPS e leitura de frames.' },
  { trail: 'visao-computacional', title: 'Detecção de objetos e bounding boxes', description: 'O que a caixa de uma detecção consegue nos dizer.' },
  { trail: 'visao-computacional', title: 'Homografia: da imagem para a quadra', description: 'Pontos de referência e projeção no minimapa.' },
  { trail: 'visao-computacional', title: 'Tracking, IDs e oclusões', description: 'Por que acompanhar uma pessoa ao longo de um vídeo é difícil.' },
  { trail: 'visao-computacional', title: 'Como comparar os resultados dos modelos', description: 'Separando contagens, observação visual e avaliação com referências.' },
] as const;
