import { useState } from 'react'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Featured destinations data
const destinations = [
  {
    id: 1,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    tagline: "Neon lights meet ancient temples",
    funFact: "Home to the world's busiest train station"
  },
  {
    id: 2,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop",
    tagline: "Cliffside paradise with endless blue",
    funFact: "Famous for the most beautiful sunsets"
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=300&fit=crop",
    tagline: "Lost city in the clouds",
    funFact: "Built without using a single wheel"
  },
  {
    id: 4,
    name: "Reykjavik, Iceland",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
    tagline: "Land of fire and ice",
    funFact: "Powered almost entirely by renewable energy"
  },
  {
    id: 5,
    name: "Marrakech, Morocco",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=300&fit=crop",
    tagline: "Pink city of spices and stories",
    funFact: "The city walls are built from red sandstone"
  },
  {
    id: 6,
    name: "Banff, Canada",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    tagline: "Rocky Mountain wilderness",
    funFact: "Home to some of the clearest lake water on Earth"
  }
]

// User stories data
const userStories = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
    quote: "TravelQuest turned my weekend trips into exciting adventures. I've discovered places I never knew existed!",
    badges: 47
  },
  {
    id: 2,
    name: "Marcus Johnson",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "The location challenges made me explore my own city like a tourist. I earned 15 badges just in London!",
    badges: 32
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote: "Competing with friends makes traveling so much more fun. We plan trips just to beat each other's scores!",
    badges: 58
  }
]

const ExplorePage = () => {
  const [currentStory, setCurrentStory] = useState(0)

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % userStories.length)
  }

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + userStories.length) % userStories.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="mb-8">
              <i className="fas fa-map-marked-alt text-6xl text-white/90 mb-6"></i>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Your Passport to Discovery
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Explore unique destinations, track your visits, and unlock fun facts and badges.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex justify-center pt-8"
            >
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Start Exploring Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing places around the world and start your next adventure
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{destination.tagline}</p>
                  <p className="text-sm text-primary-600 mb-4">
                    <i className="fas fa-lightbulb mr-2"></i>
                    {destination.funFact}
                  </p>
                  <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your gamified travel adventure in three simple steps
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Browse & Discover</h3>
              <p className="text-gray-600 text-lg">
                Explore our interactive map to find exciting destinations and challenges near you or around the world.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center">
              <div className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Location Challenges</h3>
              <p className="text-gray-600 text-lg">
                Visit locations, take photos, answer trivia, and complete fun challenges to earn points and unlock rewards.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Earn Travel Badges</h3>
              <p className="text-gray-600 text-lg">
                Collect unique badges, climb leaderboards, and show off your travel achievements to friends.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* User Stories Carousel */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Traveler Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how TravelQuest has transformed the way people explore the world
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    src={userStories[currentStory].image}
                    alt={userStories[currentStory].name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                    "{userStories[currentStory].quote}"
                  </blockquote>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {userStories[currentStory].name}
                      </h4>
                      <p className="text-gray-600">{userStories[currentStory].location}</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 md:mt-0">
                      <i className="fas fa-trophy text-accent-500"></i>
                      <span className="text-lg font-semibold text-gray-900">
                        {userStories[currentStory].badges} Badges Earned
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevStory}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <i className="fas fa-chevron-left text-gray-600"></i>
            </button>
            <button
              onClick={nextStory}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <i className="fas fa-chevron-right text-gray-600"></i>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {userStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentStory ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 px-4 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Quest?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Download TravelQuest now and turn every journey into an unforgettable adventure filled with discoveries and rewards.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-16"
                />
              </a>
              <a 
                href="#"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-16"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ExplorePage