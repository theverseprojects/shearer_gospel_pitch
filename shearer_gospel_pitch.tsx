import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, DollarSign, Film, Users, Award, Heart } from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "VERSE ONE",
      subtitle: "The Shearer's Gospel",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl font-bold text-amber-600">VERSE ONE</div>
          <div className="text-3xl font-light">The Shearer's Gospel</div>
          <div className="mt-12 text-lg text-gray-600">A 13-Minute Animated Short Film</div>
          <div className="text-sm text-gray-500 mt-4">Original Script by Oyakhire Russel • 2025</div>
        </div>
      )
    },
    
    // Slide 2: The Story
    {
      title: "THE STORY",
      content: (
        <div className="space-y-4">
          <p className="text-xl leading-relaxed">
            A cynical teenage podcast host in Manchester posts an ad inviting Jesus to an interview. 
            When Jesus actually shows up, Ebun is pulled through time and space—from war-torn Syria 
            to the South African veldt to an otherworldly shearing barn.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Each location strips away another layer of Ebun's armor until he confronts the darkness 
            that's been holding him captive. This isn't the Jesus of stained glass windows—this is 
            the God who meets us in our mess, speaks our language, and refuses to let us go.
          </p>
          <div className="mt-6 p-4 bg-amber-50 rounded-lg">
            <p className="text-base italic text-gray-800">
              Genre-defying. Spiritually visceral. A global story told through intimate encounters.
            </p>
          </div>
        </div>
      )
    },

    // Slide 3: Why This Matters
    {
      title: "WHY THIS MATTERS",
      content: (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">Fresh Voice</div>
            <p className="text-sm">Faith content that doesn't preach—it experiences. Young, diverse, raw.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">Global Appeal</div>
            <p className="text-sm">Multiple languages, cultures, and continents in one story. Built for international distribution.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">Animation Power</div>
            <p className="text-sm">World-building without location limits. Surreal transitions, otherworldly realms, and visual poetry that would be impossible in live-action.</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-amber-600 mb-2">Festival Ready</div>
            <p className="text-sm">13 minutes of cinematic animation hits the sweet spot for festival circuits, streaming platforms, and viral reach.</p>
          </div>
        </div>
      )
    },

    // Slide 4: The Market
    {
      title: "THE MARKET OPPORTUNITY",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">$2 Billion+</div>
            <div className="text-lg">Faith-based film market (US alone)</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-gray-800">Gen Z</div>
              <div className="text-sm text-gray-600 mt-2">Hungry for authentic spiritual content</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-gray-800">Global South</div>
              <div className="text-sm text-gray-600 mt-2">Fastest growing Christian demographic</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-gray-800">Streaming Era</div>
              <div className="text-sm text-gray-600 mt-2">Shorts are king on every platform</div>
            </div>
          </div>

          <div className="mt-6 p-4 border-l-4 border-amber-600 bg-amber-50">
            <p className="text-sm font-semibold text-gray-800">
              Success stories like The Chosen prove audiences crave innovative faith storytelling. 
              We're positioning for the next wave.
            </p>
          </div>
        </div>
      )
    },

    // Slide 5: Budget Breakdown
    {
      title: "BUDGET BREAKDOWN",
      content: (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-green-600">$185,000</div>
            <div className="text-lg text-gray-600">Total Production Budget</div>
            <div className="text-sm text-gray-500 mt-2">Core animation: $10,000/min | Plus talent, marketing & contingency</div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
              <span className="font-semibold">Above the Line (Creative Talent)</span>
              <span className="text-xl font-bold text-blue-600">$30,000</span>
            </div>
            <div className="text-xs text-gray-600 ml-4 -mt-2">
              Director, Writer, Voice Actors, Producer, Storyboard Artists
            </div>

            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <span className="font-semibold">Below the Line (Animation Production)</span>
              <span className="text-xl font-bold text-green-600">$130,000</span>
            </div>
            <div className="text-xs text-gray-600 ml-4 -mt-2">
              Animation Team, Character Design, Backgrounds, Compositing, Sound, Music ($10K/min)
            </div>

            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
              <span className="font-semibold">Marketing & Distribution</span>
              <span className="text-xl font-bold text-purple-600">$15,000</span>
            </div>
            <div className="text-xs text-gray-600 ml-4 -mt-2">
              Festival Submissions, Promotional Materials, Social Media Campaign
            </div>

            <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
              <span className="font-semibold">Contingency & Miscellaneous</span>
              <span className="text-xl font-bold text-amber-600">$10,000</span>
            </div>
            <div className="text-xs text-gray-600 ml-4 -mt-2">
              Insurance, Legal, Unexpected Costs (5% buffer)
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Investment Perks
    {
      title: "INVESTOR BENEFITS",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-lg mb-6">
            <div className="text-2xl font-bold mb-2">Angel Studios Model</div>
            <div className="text-sm">You're not just funding a film—you're joining a creative movement</div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
              <DollarSign className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-lg">Revenue Participation</div>
                <div className="text-sm text-gray-700">Proportional share of all revenue (festivals, streaming, licensing, merchandise)</div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-lg">Executive Producer Credit</div>
                <div className="text-sm text-gray-700">Your name in the end credits and all promotional materials</div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
              <Users className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-lg">Creative Voice</div>
                <div className="text-sm text-gray-700">First option to greenlight and invest in future projects in the anthology</div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-lg">
              <Film className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-lg">Exclusive Access</div>
                <div className="text-sm text-gray-700">Behind-the-scenes animation process videos, work-in-progress reels, premiere invitations, and early screening access</div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
              <Heart className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-lg">Impact Investment</div>
                <div className="text-sm text-gray-700">Support groundbreaking faith content that reaches global audiences with authentic storytelling</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: The Team
    {
      title: "THE CREATIVE TEAM",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="font-bold text-xl mb-2">Oyakhire Russel</div>
            <div className="text-sm text-gray-600 mb-3">Writer & Creator</div>
            <p className="text-sm text-gray-700">
              Original voice with deep cultural fluency across Nigerian, British, and global contexts. 
              This script showcases mastery of multiple dialects and spiritual themes.
            </p>
          </div>

          <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
            <p className="text-sm font-semibold">
              Production team being assembled with proven track record in high-quality animation, 
              multi-lingual voice direction, and international co-productions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center p-4 bg-white rounded shadow-sm">
              <div className="text-2xl font-bold text-gray-800">2D/3D Hybrid</div>
              <div className="text-xs text-gray-600 mt-1">Cinematic animation style</div>
            </div>
            <div className="text-center p-4 bg-white rounded shadow-sm">
              <div className="text-2xl font-bold text-gray-800">Multi-Lingual</div>
              <div className="text-xs text-gray-600 mt-1">Authentic voice casting</div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Timeline & Distribution
    {
      title: "PRODUCTION TIMELINE",
      content: (
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">Q2</div>
              <div>
                <div className="font-semibold">Pre-Production</div>
                <div className="text-sm text-gray-600">Voice casting, storyboarding, animatics, character design, art direction</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">Q3</div>
              <div>
                <div className="font-semibold">Production</div>
                <div className="text-sm text-gray-600">Voice recording, animation (layout, cleanup, coloring), background painting</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">Q4</div>
              <div>
                <div className="font-semibold">Post-Production</div>
                <div className="text-sm text-gray-600">Compositing, effects, color grading, sound design, music composition</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">2026</div>
              <div>
                <div className="font-semibold">Festival Circuit & Distribution</div>
                <div className="text-sm text-gray-600">Sundance, SXSW, streaming platform negotiations</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-lg">
            <div className="font-bold text-lg mb-2">Distribution Strategy</div>
            <ul className="text-sm space-y-1">
              <li>• Major film festivals (Sundance, Tribeca, SXSW)</li>
              <li>• Faith-based platforms (Angel Studios, Pure Flix)</li>
              <li>• Streaming services (short-form content arms)</li>
              <li>• Church screenings and community events</li>
              <li>• YouTube Premium and social media rollout</li>
            </ul>
          </div>
        </div>
      )
    },

    // Slide 9: The Ask
    {
      title: "THE INVESTMENT",
      content: (
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-lg">
            <div className="text-5xl font-bold mb-2">$185,000</div>
            <div className="text-xl">Total Funding Goal</div>
            <div className="text-sm mt-2 opacity-90">Core animation: $10K/min + talent, marketing & contingency</div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">$15,000+</div>
              <div className="text-xs text-gray-600 mt-1">Executive Producer</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">$7,500+</div>
              <div className="text-xs text-gray-600 mt-1">Associate Producer</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">$3,500+</div>
              <div className="text-xs text-gray-600 mt-1">Supporting Investor</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-amber-50 rounded-lg text-left">
            <div className="font-bold text-lg mb-2">Structure</div>
            <p className="text-sm text-gray-700">
              Investment managed through dedicated SPV (Special Purpose Vehicle), 
              separate from production company. Clean, professional structure for all stakeholders.
            </p>
          </div>

          <div className="mt-6">
            <div className="text-sm text-gray-600">Ready to invest in groundbreaking animated faith storytelling?</div>
            <div className="text-lg font-semibold text-gray-800 mt-2">Let's bring this vision to life.</div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-12 min-h-[500px] sm:min-h-[600px] relative">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <h2 className="text-xl sm:text-2xl text-gray-600">{slides[currentSlide].subtitle}</h2>
            )}
          </div>

          <div className="mb-12 sm:mb-16">
            {slides[currentSlide].content}
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-12 right-4 sm:right-12 flex justify-between items-center">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-700 transition text-sm sm:text-base"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="text-xs sm:text-sm text-gray-500">
              {currentSlide + 1} / {slides.length}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-700 transition text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
