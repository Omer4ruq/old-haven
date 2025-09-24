//  <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
//           {/* Geriatric Inmates */}
//           <div 
//             className="relative text-center group cursor-pointer"
//             onMouseEnter={() => setHoveredStat('geriatric')}
//             onMouseLeave={() => setHoveredStat(null)}
//           >
//             {/* Corner borders - top-left and bottom-right */}
//             <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'geriatric' ? 'border-t-4 border-l-4 border-gray-600 w-12 h-12' : ''}`}></div>
//             <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'geriatric' ? 'border-b-4 border-r-4 border-gray-600 w-12 h-12' : ''}`}></div>

//             <div className="relative p-8">
//               {/* Background icon with low opacity */}
//               <div className={`absolute inset-0 flex items-center ml-48 transition-all duration-300 ${hoveredStat === 'geriatric' ? 'transform scale-125' : ''}`}>
//                 <Stethoscope className="w-16 h-16 text-gray-500 opacity-20"/>
//               </div>
              
//               <div className={`text-5xl font-light text-gray-800 mb-2 transition-all duration-300 relative z-10`}>
//                 {animatedStats.geriatric}+
//               </div>
//               <div className="text-xs text-gray-600 uppercase tracking-widest relative z-10">
//                 GERIATRIC INMATES
//               </div>
//             </div>
//           </div>

//           {/* Senior Citizen's Home */}
//           <div 
//             className="relative text-center group cursor-pointer"
//             onMouseEnter={() => setHoveredStat('senior')}
//             onMouseLeave={() => setHoveredStat(null)}
//           >
//             {/* Corner borders - top-left and bottom-right */}
//             <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'senior' ? 'border-t-4 border-l-4 border-gray-600 w-12 h-12' : ''}`}></div>
//             <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'senior' ? 'border-b-4 border-r-4 border-gray-600 w-12 h-12' : ''}`}></div>

//             <div className="relative p-8">
//               {/* Background icon with low opacity */}
//               <div className={`absolute inset-0 flex items-center ml-48 transition-all duration-300 ${hoveredStat === 'senior' ? 'transform scale-125' : ''}`}>
//                 <Heart className="w-16 h-16 text-gray-500 opacity-20" />
//               </div>
              
//               <div className={`text-5xl font-light text-gray-800 mb-2 transition-all duration-300 relative z-10`}>
//                 {animatedStats.senior}+
//               </div>
//               <div className="text-xs text-gray-600 uppercase tracking-widest relative z-10">
//                 SENIOR CITIZEN'S HOME
//               </div>
//             </div>
//           </div>

//           {/* Physicians & Nurses */}
//           <div 
//             className="relative text-center group cursor-pointer"
//             onMouseEnter={() => setHoveredStat('physicians')}
//             onMouseLeave={() => setHoveredStat(null)}
//           >
//             {/* Corner borders - top-left and bottom-right */}
//             <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'physicians' ? 'border-t-4 border-l-4 border-gray-600 w-12 h-12' : ''}`}></div>
//             <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'physicians' ? 'border-b-4 border-r-4 border-gray-600 w-12 h-12' : ''}`}></div>

//             <div className="relative p-8">
//               {/* Background icon with low opacity */}
//              <div className={`absolute inset-0 flex items-center ml-48 transition-all duration-300 ${hoveredStat === 'senior' ? 'transform scale-125' : ''}`}>
//                 <HeartPulse className="w-16 h-16 text-gray-500 opacity-20" />
                
//               </div>
              
//               <div className={`text-5xl font-light text-gray-800 mb-2 transition-all duration-300 relative z-10`}>
//                 {animatedStats.physicians}+
//               </div>
//               <div className="text-xs text-gray-600 uppercase tracking-widest relative z-10">
//                 PHYSICIANS & NURSES
//               </div>
//             </div>
//           </div>

//           {/* Years of Service */}
//           <div 
//             className="relative text-center group cursor-pointer"
//             onMouseEnter={() => setHoveredStat('years')}
//             onMouseLeave={() => setHoveredStat(null)}
//           >
//             {/* Corner borders - top-left and bottom-right */}
//             <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'years' ? 'border-t-4 border-l-4 border-gray-600 w-12 h-12' : ''}`}></div>
//             <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'years' ? 'border-b-4 border-r-4 border-gray-600 w-12 h-12' : ''}`}></div>

//             <div className="relative p-8">
//               {/* Background icon with low opacity */}
//               <div className={`absolute inset-0 flex items-center ml-48 transition-all duration-300 ${hoveredStat === 'years' ? 'transform scale-125' : ''}`}>
                
//                 <CalendarSync className="w-16 h-16 text-gray-500 opacity-20" />
//               </div>
              
//               <div className={`text-5xl font-light text-gray-800 mb-2 transition-all duration-300 relative z-10`}>
//                 {animatedStats.years}+
//               </div>
//               <div className="text-xs text-gray-600 uppercase tracking-widest relative z-10">
//                 YEARS OF SERVICE
//               </div>
//             </div>
//           </div>
//         </div>