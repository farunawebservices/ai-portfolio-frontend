export default function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neural network nodes representing AI */}
      <circle cx="20" cy="20" r="18" fill="url(#gradient1)" opacity="0.2"/>
      <circle cx="20" cy="20" r="14" fill="url(#gradient2)" opacity="0.3"/>
      
      {/* African-inspired geometric pattern + Letter F */}
      <path d="M12 10 L12 30 L20 30 L20 22 L16 22 L16 18 L20 18" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"/>
      
      {/* Letter G (connected) */}
      <path d="M24 14 C28 14 28 18 28 20 C28 22 28 26 24 26 C20 26 20 22 20 20" 
            stroke="url(#gradient3)" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            fill="none"/>
      <line x1="24" y1="20" x2="28" y2="20" 
            stroke="url(#gradient3)" 
            strokeWidth="2.5" 
            strokeLinecap="round"/>
      
      {/* Connection nodes (AI neural network aesthetic) */}
      <circle cx="12" cy="10" r="2" fill="#60A5FA"/>
      <circle cx="20" cy="18" r="2" fill="#F97316"/>
      <circle cx="28" cy="14" r="2" fill="#10B981"/>
      <circle cx="24" cy="26" r="2" fill="#8B5CF6"/>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#F97316"/>
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA"/>
          <stop offset="100%" stopColor="#FBBF24"/>
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
