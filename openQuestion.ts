export default {
  name: 'openQuestion',
  title: 'Open Question',
  type: 'document',
  fields: [
    {
      name: 'userId',
      title: 'User Id',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'blockContent', // ✅ now supports alignment you must pass it as a string here
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
  ],
}

