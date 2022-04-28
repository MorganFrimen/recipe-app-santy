export default {
    name: 'resipes',
    title: 'Resipes',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name:'title',
            title: 'title',
            type: 'string',
        },
        {
            name: 'ingridients',
            title: 'ingridients',
            type: 'array',
            of: [
                {type: 'string'},
            ]
        },
        {
            name: 'steps',
            title: 'steps',
            type: 'text'
        }
    ]
}