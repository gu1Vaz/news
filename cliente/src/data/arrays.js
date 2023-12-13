let filtroBase = [
    {
      label: ['Criador', 'creador'],
      checks: ["/getCreadores"]
    },
    {
      label: ['Data(>=)', 'created_at'],
      input: { label: 'created_at', type:"date", value: null },
    },
    {
      label: ['Numero de Comentarios (>=)', 'num_comments'],
      input: { label: 'num_comments', type:"number", value: null },
    },
    {
      label: ['Introdução', 'intro'],
      input: { label: 'intro', type:"text", value: null },
    },
    {
      label: ['Desenvolvimento', 'dev'],
      input: { label: 'dev', type:"text", value: null },
    },
    {
      label: ['Conclusão', 'coc'],
      input: { label: 'coc', type:"text", value: null },
    },
    {
      label: ['Titulo', 'title'],
      input: { label: 'title', type:"text", value: null },
    },
    {
      label: ['Sub Titulo', 'subtitle'],
      input: { label: 'subtitle', type:"text", value: null },
    }
  ]

  export {filtroBase}