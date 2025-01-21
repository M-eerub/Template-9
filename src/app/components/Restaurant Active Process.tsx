import Image from 'next/image'
import Link from 'next/link'

export default function EightHero() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2  mb-8 md:mb-0">
          <Image
            src="/last1.jpeg"
            alt="Delicious food dish"
            width={1518}
            height={350}
            className="rounded-lg object-cover h-[350] w-[950px]"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-amber-500 text-lg mb-2 font-serif">Restaurant Active Process</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We <span className="text-amber-500">Document Every Food</span> Bean Process until it is saved
          </h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
          </p>
          <div className="flex space-x-4">
            <Link href="/details" className=''>
            <button className="px-6 py-2 border border-amber-500 text-amber-500 rounded-full hover:bg-amber-500 hover:text-white transition duration-300">
              Read More
            </button>
            </Link>
            <button className="px-6 py-2 bg-amber-500 text-white rounded-full flex items-center hover:bg-amber-600 transition duration-300">
              <span className="mr-2">Play Video</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}