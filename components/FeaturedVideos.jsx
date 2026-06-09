"use client";
import { useState, useRef } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { usePostHog } from "posthog-js/react";

export default function FeaturedVideos() {
  const posthog = usePostHog();
  
  const videoData = [
    {
      id: "special-project",
      title: "Special Project - Al-Madinah Orchard",
      description: "Explore the state-of-the-art gated community offering 3.5, 5, 8, and 10 Marla residential plots on a flexible 5-year installment plan with world-class amenities in Al-Madinah Orchard by Zaamin City.",
      src: "/assets/al-madinah/Al-Madina.mp4",
      whatsappText: "Hello Al Madina Developers, I am interested in the Al-Madinah Orchard project shown in your Special Project video.",
    },
    {
      id: "modern-living",
      title: "Special Project - Al-Madinah Gardens",
      description: "A visual tour of the rapid infrastructure developments, security systems, central parks, and mosque installations in Al-Madinah Gardens by Zaamin City.",
      src: "/assets/al-madinah/pak arab.mp4",
      whatsappText: "Hello Al Madina Developers, I am interested in the Al-Madinah Gardens project shown in your Special Project video.",
    },
  ];

  return (
    <section id="featured-videos" className="py-20 bg-white overflow-hidden relative border-b border-gray-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full opacity-5 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy rounded-full opacity-5 blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="w-12 h-[2px] bg-gold"></span>
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Project Showcases
            </span>
            <span className="w-12 h-[2px] bg-gold"></span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
            Featured Project Videos
          </h2>
          <p className="text-gray-600 text-lg">
            Watch real on-ground site developments, community features, and payment plan presentations directly from our project teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          {videoData.map((video, idx) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              index={idx}
              posthog={posthog}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video, index, posthog }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        posthog?.capture("video_paused", { video_id: video.id, brand_name: "Al Madina Developers" });
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        posthog?.capture("video_played", { video_id: video.id, brand_name: "Al Madina Developers" });
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.2, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Video Container */}
      <div className="relative aspect-video w-full bg-slate-900 overflow-hidden border-b border-gray-100 flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={video.src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={isPlaying}
          onClick={togglePlay}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Custom Play overlay when paused */}
        {!isPlaying && (
          <div 
            onClick={togglePlay}
            className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-black/50 z-20"
          >
            <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center shadow-lg transition-transform duration-300 transform group-hover:scale-110">
              <PlayIcon className="w-8 h-8 ml-1" />
            </div>
          </div>
        )}

        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 bg-navy text-gold text-xs font-bold uppercase tracking-wider rounded border border-gold/30">
            {index === 0 ? "Special Project" : "Modern Living"}
          </span>
        </div>
      </div>

      {/* Info & CTA */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold font-serif text-navy mb-3 group-hover:text-gold transition-colors duration-300">
          {video.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm md:text-base font-light">
          {video.description}
        </p>

        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-4 mt-auto">
          <a
            href={`https://wa.me/923001332279?text=${encodeURIComponent(video.whatsappText)}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white font-semibold rounded-md shadow-md hover:bg-opacity-95 transition-all text-center text-sm"
          >
            WhatsApp Inquiry
          </a>
          <button
            onClick={togglePlay}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-md shadow-md hover:bg-gold transition-colors text-center text-sm gap-2"
          >
            {isPlaying ? (
              <>
                <PauseIcon className="w-4 h-4 text-gold" />
                Pause Video
              </>
            ) : (
              <>
                <PlayIcon className="w-4 h-4 text-gold" />
                Watch Presentation
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
