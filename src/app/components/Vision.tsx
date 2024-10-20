export default function Vision() {
  const visionCards = [
    { title: "Integrity", description: "Upholding the highest ethical standards in journalism by ensuring accuracy, fairness, and objectivity. This commitment to truth builds public trust and sets a benchmark for journalistic excellence across the industry." },
    { title: "Innovation", description: "Leading the way in adopting new technologies and approaches to deliver news on diverse platforms. Constantly evolving to make news accessible, engaging, and relevant to audiences in a rapidly changing media landscape." },
    { title: "Empowerment", description: "Fostering a more informed and engaged citizenry by providing comprehensive and unbiased coverage of important issues. This empowers viewers to make informed decisions and actively participate in society." },
    { title: "Democracy", description: "Contributing to the strengthening of democratic values by providing a platform for diverse voices and perspectives. By presenting a wide range of viewpoints, CKTV India helps to build a more informed and inclusive society." },
  ];

  return (
    <section id="our-vision" className="my-12">
      <h2 className="text-2xl text-center font-bold mb-4">Our Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {visionCards.map((card, index) => (
          <div key={index} className="bg-primary text-white text-center p-4 rounded-lg">
            <h3 className="text-xl text-center font-semibold mb-2">{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
