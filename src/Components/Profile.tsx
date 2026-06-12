import { Star, Mail, Bookmark, Check } from "lucide-react";

/**
 * Design Testing - "Which is Better" Page
 * 
 * Design Philosophy: Minimalist Grid-Based Comparison
 * - Clean white background with subtle grid overlay
 * - Two-column side-by-side comparison layout
 * - Serif font (Playfair Display) for main heading
 * - Sans-serif font (Poppins) for body text
 * - Soft shadows and rounded corners for depth
 * - Smooth animations on hover and interaction
 */


export default function Profile() {
  return (
   //  <div className="min-h-screen bg-black/10 border-2 w-full" style={{
   //    backgroundImage: 'linear-gradient(to right,rgb(34, 34, 35) 1px, transparent 1px), linear-gradient(to bottom,rgb(34, 34, 35) 1px, transparent 1px)',
   //    backgroundSize: '90px 90px'
   //  }}>
    <div>
          <div className="w-96 rounded-3xl border-2 border-gray-800 bg-gray-900 overflow-hidden transition-all duration-300 hover:scale-105">
            {/* Image Container */}
            <div className="relative w-full h-80 bg-gradient-to-br from-orange-300 via-yellow-300 to-green-400 overflow-hidden">
              {/* Placeholder for image - gradient background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm font-semibold">Profile Image B</div>
                </div>
              </div>
              {/* Bookmark Icon */}
              <button className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
                <Bookmark className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content - Dark Background */}
            <div className="p-8 bg-gray-900 text-white">
              {/* Name and Badge */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold font-sans">
                  Natasha Romanoff
                </h3>
                <Check className="w-5 h-5 text-blue-400" />
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-6 font-sans">
                I&apos;m a Brand Designer who focuses on clarity & emotional connection.
              </p>

              {/* Stats */}
              <div className="flex gap-8 mb-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-white">4.8</span>
                  </div>
                  <span className="text-xs text-gray-400 font-sans">Rating</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white">$45k+</span>
                  <span className="text-xs text-gray-400 font-sans">Earned</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white">$50/hr</span>
                  <span className="text-xs text-gray-400 font-sans">Rate</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex gap-3">
                <button className="flex-1 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold font-sans transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </button>
                <button className="px-4 py-3 rounded-full bg-gray-800 text-white border border-gray-700 font-semibold transition-all duration-200 hover:shadow-md active:scale-95">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

     );
}
