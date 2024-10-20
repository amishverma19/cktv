export default function PopularNews() {
  const popularVideos = [
    { id: 'c5eeA_Fx-Vw',  },
    { id: 'Li7RxjqgUI8', },
    { id: 'zxdV67zx7KA',  },
  ];

  const getEmbedUrl = (videoId: string) => {
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  };

  return (
    <section id="popular-news-on-youtube" className="my-12">
      <h2 className="text-2xl font-bold mb-4">Popular News on YouTube</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {popularVideos.map((video) => {
          return (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 h-64 md:h-70">
                <iframe
                  src={getEmbedUrl(video.id)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            
            </div>
          );
        })}
      </div>
    </section>
  );
}
