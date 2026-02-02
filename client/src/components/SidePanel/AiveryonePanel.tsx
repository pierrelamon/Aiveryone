import React from 'react';

const AiveryonePanel = () => {
  const videos = [
    { t: "C'est quoi l'IA ?", u: "https://youtube.com/watch?v=cX9V3iNBUoo" },
    { t: "Le secret d'un bon Prompt", u: "https://www.youtube.com/watch?v=YcIbZGTRMjI" },
    { t: "Attention aux Hallucinations", u: "https://www.youtube.com/watch?v=0xS3-g8fCOI" }
  ];

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
        <h3 className="text-sm font-bold text-text-primary mb-3">
          60 secondes pour apprendre
        </h3>
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
