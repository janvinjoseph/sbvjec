import Link from 'next/link'
import Review from '@/components/Home/Review'

const Home = () => {
  return (
    <>
      <main>
        <h1>Your future of better learning starts here</h1>
        <p>Make global connections along your path</p>
        <p>Become an IEEE member</p>
        <div>
          <button>
            <Link href="/events">EVENTS</Link>
          </button>
        </div>
      </main>
      <div>
        <h2>Institute of Electrical and Electronics Engineers</h2>
        <p>Advancing technology for the benefit of humanity</p>
        <p>
          IEEE is the world’s largest technical professional organization
          dedicated to advancing technology for the benefit of humanity. IEEE
          and its members inspire a global community to innovate for a better
          tomorrow through its more than 400,000 members in over 160 countries,
          and its highly cited publications, conferences, technology standards,
          and professional and educational activities. IEEE is the trusted
          “voice” for engineering, computing, and technology information around
          the globe.
        </p>
        <p>
          <a href="https://www.ieee.org//">Learn more at ieee.org</a>
        </p>
      </div>
      <Review />
    </>
  )
}

export default Home
