'use client'
import React, { useEffect, useState } from 'react';
import './articles.css';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articlesResponse, usersResponse, albumsResponse, photosResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/albums"),
          fetch("https://jsonplaceholder.typicode.com/photos")
        ]);

        const dataArticles = await articlesResponse.json();
        const dataUsers = await usersResponse.json();
        const dataAlbums = await albumsResponse.json();
        const dataPhotos = await photosResponse.json();

        setArticles(dataArticles);
        setUsers(dataUsers);
        setAlbums(dataAlbums);
        setPhotos(dataPhotos);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="dot-spinner">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => {
          const user = users.find(u => u.id === article.userId);
          const album = albums.find(a => a.userId === article.userId);
          const photo = photos.find(p => p.albumId === album?.id);

          return (
            <div key={article.id} className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700">{article.body}</p>
              {user && (
                <h5 className="mt-4 text-gray-600">
                  Written by: {user.name}
                </h5>
              )}
              {album && (
                <h6 className="mt-2 text-gray-500">
                  Album: {album.title}
                </h6>
              )}
              {photo && (
                <div className="mt-4">
                  <img src={photo.thumbnailUrl} alt={photo.title} className="rounded-lg w-full h-40 object-cover" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
