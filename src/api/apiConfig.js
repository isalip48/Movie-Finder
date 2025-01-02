const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'faa8d25f442bbebc8996e686deb5ceee',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;