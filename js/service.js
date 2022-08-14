var gImgs

function createFiltImgs(keyWord) {
    return gImgs.filter(img => {
        return img.keyWords.some(word => word === keyWord)
    })
}

function createImgs() {
    return [
        {
            name: 1,
            keyWords: ['nature', 'animals']
        },
    {
            name: 2,
            keyWords: ['animals']
        },

    {
            name: 3,
            keyWords: ['nature', 'animals']
        },

    {
            name: 4,
            keyWords: []
        },

    {
            name: 5,
            keyWords: ['nature', 'view']
        },

    {
            name: 6,
            keyWords: ['nature', 'view']
        },

    {
            name: 7,
            keyWords: ['nature', 'animals']
        },

    {
            name: 8,
            keyWords: ['nature', 'view']
        },

    {
            name: 9,
            keyWords: ['food']
        },

    {
            name: 10,
            keyWords: []
        },

    {
            name: 11,
            keyWords: []
        },

    {
            name: 12,
            keyWords: ['nature', 'view']
        },

    {
            name: 13,
            keyWords: ['nature', 'view']
        },

    {
            name: 14,
            keyWords: ['nature', 'view']
        },

    {
            name: 15,
            keyWords: ['view']
        },

    {
            name: 16,
            keyWords: ['food']
        },

    {
            name: 17,
            keyWords: []
        },

    {
            name: 18,
            keyWords: ['food']
        },

    {
            name: 19,
            keyWords: ['nature', 'view']
        }
    ]
}