export default {
  name: 'wohnung',
  title: 'Wohnung',
  type: 'document',
  fields: [
    {
      name: 'wohnflaeche',
      title: 'Wohnflaeche',
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
    },
    {
      name: 'Beschreibung',
      title: 'beschreibung',
      type: 'string',
    },
  ],
}
