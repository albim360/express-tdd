function createSlug (title) {
    return title.toLowerCase().replace(/\s+/g, '-');
}

module.exports = createSlug;