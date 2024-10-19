export default function PopularNews() {
  const popularVideos = [
    { id: 1, title: "Breaking News: Major Policy Change", thumbnail: "/video-thumbnail-1.jpg" },
    { id: 2, title: "Exclusive Interview with Tech CEO", thumbnail: "/video-thumbnail-2.jpg" },
    { id: 3, title: "In-depth Analysis: Economic Trends", thumbnail: "/video-thumbnail-3.jpg" },
  ];

  return (
    <section id="popular-news-on-youtube" className="my-12">
      <h2 className="text-2xl font-bold mb-4">Popular News on YouTube</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popularVideos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
              <a 
                href={`https://www.youtube.com/watch?v=${video.id}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-accent hover:underline"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

