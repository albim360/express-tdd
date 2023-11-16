function createSlug(title, posts) {
    if (!title || typeof title !== 'string') {
      throw new Error('Il titolo non è presente o ha un formato errato');
    }
  
    if (!posts || !Array.isArray(posts)) {
      throw new Error('L\'array dei post è mancante');
    }
  
    let baseSlug = title.toLowerCase().replace(/\s+/g, '-');
    let slug = baseSlug;
    let count = 1;
  
    // Verifica se l'array dei post è definito prima di utilizzarlo
    while (posts && posts.includes(slug)) {
      slug = `${baseSlug}-${count}`;
      count++;
    }
  
    return slug;
  }
  
  module.exports = createSlug;
  