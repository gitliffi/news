import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Article } from '../types/news';

interface NewsCardProps {
    article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
    return (
        <Card className="transform hover:scale-105 transition-transform duration-100">
            {article.urlToImage && (
                <AspectRatio ratio={16 / 9}>
                    <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="object-cover w-full h-full rounded-t-md"
                    />
                </AspectRatio>
            )}
            <CardHeader>
                <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
                {article.description && (
                    <p className="text-gray-700">{article.description}</p>
                )}
            </CardContent>
            <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          {new Date(article.publishedAt).toLocaleDateString()}
        </span>
                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    Read more
                </a>
            </CardFooter>
        </Card>
    );
};

export default NewsCard;
