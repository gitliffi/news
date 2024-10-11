import React, { useEffect, useState } from 'react';
import { fetchTopHeadlines } from './services/newsApi';
import { Article, NewsApiResponse } from './types/news';
import NewsCard from './components/NewsCard';
import {ModeToggle} from '@/components/mode-toggle.tsx';
import { ThemeProvider } from '@/components/theme-provider';

const App: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const validArticles = articles.filter((article) => article.title !== "[Removed]");

    useEffect(() => {
        fetchTopHeadlines()
            .then((data: NewsApiResponse) => {
                setArticles(data.articles);
                setLoading(false);
            })
            .catch((err: Error) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="flex text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center mt-10">Error: {error}</p>;

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-extrabold text-center my-4">
                        Top Headlines
                    </h1>
                    <ModeToggle/>
                </div>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-6">
                {validArticles.map((article, index) => (
                        <NewsCard key={index} article={article} />
                    ))}
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;
