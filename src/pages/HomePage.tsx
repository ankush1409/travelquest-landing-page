import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-16 px-4 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="mb-8">
              <i className="fas fa-map-marked-alt text-6xl text-white/90 mb-6"></i>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Gamify Your Journey with TravelQuest
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90">
              Explore. Complete Challenges. Earn Rewards.
            </p>
            
            <p className="text-lg text-white/80 max-w-lg">
              Turn every trip into an adventure with our gamified travel platform. 
              Discover new places, compete with friends, and unlock amazing rewards!
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/explore"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg text-center"
                >
                  Explore Places
                </Link>
                <a
                  href="#features"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 text-center"
                >
                  Learn More
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a href="#" className="transform hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on App Store"
                    className="h-14"
                  />
                </a>
                <a href="#" className="transform hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-14"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-[580px] bg-gray-900 rounded-[40px] p-4 shadow-2xl animate-float">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-green-500 rounded-[30px] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative p-6 text-white">
                    <div className="flex items-center mb-8">
                      <i className="fas fa-compass text-2xl mr-3"></i>
                      <span className="text-xl font-bold">TravelQuest</span>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
                      <div className="flex items-center mb-3">
                        <i className="fas fa-mountain text-yellow-400 text-2xl mr-3"></i>
                        <span className="font-semibold">Mountain Explorer</span>
                      </div>
                      <div className="w-full bg-white/30 rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-400/20 rounded-xl p-4 flex items-center">
                      <i className="fas fa-trophy text-yellow-400 text-xl mr-3"></i>
                      <span className="font-semibold">+50 XP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose TravelQuest?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make traveling more exciting and rewarding
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-map-marker-alt",
                title: "Explore Places",
                description: "Discover hidden gems and popular destinations with our interactive map and location-based challenges."
              },
              {
                icon: "fas fa-users",
                title: "Compete with Friends",
                description: "Challenge your friends, join travel communities, and see who can collect the most badges and points."
              },
              {
                icon: "fas fa-trophy",
                title: "Earn Badges & Rewards",
                description: "Complete challenges, visit landmarks, and unlock exclusive badges, discounts, and travel perks."
              },
              {
                icon: "fas fa-route",
                title: "Track Your Journey",
                description: "Keep a digital record of your travels, create memories, and share your adventures with the community."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 px-4 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join thousands of travelers who are already gamifying their journeys
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#" className="transform hover:scale-105 transition-transform duration-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-16"
                />
              </a>
              <a href="#" className="transform hover:scale-105 transition-transform duration-200">
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

export default HomePage