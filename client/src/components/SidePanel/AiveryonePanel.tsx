import React from 'react';

const AiveryonePanel = () => {
  const videos = [];

// --- 1. LA LOGIQUE DE TÉLÉCOMMANDE ---
  const piloterPrompt = (idSnippet: string) => {
    const cible = document.getElementById(idSnippet);
    if (cible) {
      (cible as HTMLElement).click();
    } else {
      // Si le panneau est fermé, on cherche le bouton "IA" pour l'ouvrir
      const btnMenu = document.querySelector('button[id*="ai-button"]') as HTMLElement;
      if (btnMenu) {
        btnMenu.click();
        // On attend que React injecte les éléments avant de cliquer
        setTimeout(() => (document.getElementById(idSnippet) as HTMLElement)?.click(), 500);
      }
    }
  };
  
  return (
    <div className="p-4 bg-background-secondary border-b border-border-medium flex flex-col gap-4">
      <style>{`
        .video-btn {
          background-color: #FF0000;
          color: white;
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: transform 0.2s, opacity 0.2s;
        }
        .video-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        /* 2. LE SCALPEL AIVERYONE : NETTOYAGE DU SIDE PANEL */
/* --- RENDRE LA ZONE PROMPTS INVISIBLE --- */
div.overflow-y-auto.overflow-x-hidden {
            visibility: hidden !important;
            height: 0px !important;
            min-height: 0px !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
        }

        /* Masque Paramètres (Icône Settings2) */
        button:has(.lucide-settings2) { display: none !important; }

        /* Masque Signets (Icône Bookmark) */
        button:has(.lucide-bookmark) { display: none !important; }

        /* Masque Joindre des fichiers (Cible le tracé SVG spécifique du trombone) */
        button:has(path[d*="M9 7C9 4.23858"]) { display: none !important; }

        /* 3. OPTIONNEL : ON AÈRE LE BOUTON PROMPTS */
        button:has(.lucide-message-square-quote) {
          margin-top: 4px !important;
          border-color: rgba(255, 0, 0, 0.2) !important; /* Petit rappel rouge discret */
        }
      `}</style>

      <div className="text-center">
        <h2 className="text-[10px] font-black tracking-[0.3em] text-text-secondary uppercase mb-4">
          AIVERY.ONE
        </h2>

        {/* --- 2. TON NOUVEAU BOUTON "VÉRIFIER" --- */}
        <div 
          onClick={() => piloterPrompt('card-snippet-1-Aide')}
          className="flex items-center justify-center gap-1 cursor-pointer hover:opacity-70 transition-opacity mb-4"
        >
          <span className="text-sm">✅</span> 
          <span className="text-[11px] font-bold text-text-primary underline decoration-blue-500/50">
            Vérifier
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {videos.map((v, i) => (
          <a key={i} href={v.u} target="_blank" rel="noreferrer" className="video-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="truncate">{v.t}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AiveryonePanel;
