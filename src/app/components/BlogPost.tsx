import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
    image: '/one.jpeg', // Remove query string for image
    date: '10 February 2022',
  },
  {
    id: 2,
    title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
    image: '/two.jpeg', // Remove query string for image
    date: '10 February 2022',
  },
  {
    id: 3,
    title: 'Curabitur rutrum velit ac congue malesuada',
    image: '/three.jpeg', // Remove query string for image
    date: '10 February 2022',
  },
]

export default function NineHero() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-amber-500 text-2xl font-serif text-center mb-2">Blog Post</h2>
        <h3 className="text-4xl font-bold text-center mb-12">Latest News & Blog</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden">
              {/* Ensure Image component is used correctly */}
              <Image
                src={post.image}
                alt={post.title}
                width={400} // Can be adjusted to fit the container
                height={300} // Adjust if needed
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-amber-500 text-sm mb-2">{post.date}</p>
                <h4 className="text-xl font-semibold mb-4">{post.title}</h4>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-amber-500 hover:underline">
                    Learn More
                  </a>
                  <div className="flex space-x-3">
                    <button className="text-gray-400 hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}