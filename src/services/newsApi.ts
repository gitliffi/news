const API_KEY = '65f407d4808446daa1e8574a547d150c';
const BASE_URL = 'https://newsapi.org/v2';

export async function fetchTopHeadlines(country: string = 'us') {
    const response = await fetch(
        `${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch news');
    }
    return response.json();
}
