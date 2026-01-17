import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, DollarSign, Film, Users, Award, TrendingUp, Heart } from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
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
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <span className="font-semibold">Below the Line (Animation Production)</span>
              <span className="text-xl font-bold text-green-600">$130,000</span>
