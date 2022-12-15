export default {
    name: 'mehrfamilien',
    title: 'Mehrfamilien',
    type: 'document',
    fields: [
      {
        name: 'wohnfläche',
        title: 'Wohnfläche',
        type: 'number',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        },
      },
      {
        name: 'etage',
        title: 'Etage',
        type: 'number',
      },
      {
        name: 'wohnbau',
        title: 'Wohnbau',
        type: 'string',
      }
    ],
  }