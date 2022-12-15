export default {
  name: 'wohnbau',
  title: 'Wohnbau',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'art',
      title: 'Art',
      type: 'string',
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
      name: 'jahr',
      title: 'Jahr',
      type: 'number',
    },
    {
      name: 'wohnfläche',
      title: 'Wohnfläche',
      type: 'number',
    },
    {
      name: 'preis',
      title: 'Preis',
      type: 'number',
    },
    {
      name: 'standort',
      title: 'Standort',
      type: 'string',
    },
    {
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'string',
    },
    {
      name: 'ist_angebot',
      title: 'Ist_Angebot',
      type: 'boolean',
    },
  ],
}
