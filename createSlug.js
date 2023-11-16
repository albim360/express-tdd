function createSlug (title) {
    return title.replace(/\s+/g, '-')
}

module.exports = createSlug;