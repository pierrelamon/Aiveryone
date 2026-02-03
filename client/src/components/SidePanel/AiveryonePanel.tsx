import React, { useState } from 'react';

const AiveryonePanel = () => {
  const [activeZone, setActiveZone] = useState('zone1');
  const [showToast, setShowToast] = useState(false);
  const videos = [];

  // --- 1. LA LOGIQUE DE TÉLÉCOMMANDE (INCHANGÉE) ---
  const piloterPrompt = (idSnippet: string) => {
    // Petit feedback visuel (Toast) lors du clic
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);

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
        /* --- 2. LE SCALPEL AIVERYONE : NETTOYAGE DU SIDE PANEL --- */
        /* RENDRE LA ZONE PROMPTS INVISIBLE */
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
          border-color: rgba(255, 0, 0, 0.2) !important;
        }

        /* --- STYLES DU NOUVEAU DESIGN RUBAN --- */
        .aivery-container {
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background: var(--bg-main, #ffffff);
          border: 1px solid #e2e2e2;
          border-radius: 8px;
          overflow: hidden;
          user-select: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          position: relative;
        }

        .tabs-header {
          display: flex;
          background: #f8f9fa;
          border-bottom: 1px solid #e2e2e2;
          padding: 0 4px;
          overflow-x: auto;
        }

        .tab-btn {
          padding: 10px 12px;
          border: none;
          background: none;
          font-size: 9px;
          font-weight: 700;
          color: #666;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: color 0.2s;
          position: relative;
          white-space: nowrap;
        }

        .tab-btn.active {
          color: #0078d4;
        }

        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10px;
          right: 10px;
          height: 3px;
          background: #0078d4;
          border-radius: 3px 3px 0 0;
        }

        .ribbon-content {
          padding: 12px;
          min-height: 100px;
          display: flex;
          align-items: center;
          background: white;
        }

        .ribbon-zone {
          display: flex;
          gap: 0;
          align-items: stretch;
          width: 100%;
          justify-content: space-around;
        }

        .btn-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 8px 4px;
          border-radius: 6px;
          transition: all 0.15s ease;
          border-right: 1px solid #eeeeee;
          flex: 1;
        }

        .btn-group:last-child { border-right: none; }
        .btn-group:hover { background: #f0f0f0; }
        .btn-group:active { background: #e8e8e8; transform: translateY(1px); }

        .icon {
          font-size: 24px; 
          margin-bottom: 4px;
          filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
        }

        .label {
          font-size: 10px;
          font-weight: 500;
          color: #444;
          text-align: center;
          line-height: 1.1;
        }

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
        
        #toast {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: #333;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          transition: all 0.3s ease;
          z-index: 100;
          opacity: 0;
        }
        #toast.show { top: 10px; opacity: 1; }
      `}</style>

      <div className="text-center">
        <h2 className="text-[10px] font-black tracking-[0.3em] text-text-secondary uppercase mb-4">
          AIVERY.ONE
        </h2>

        {/* --- NOUVEAU RUBAN D'ICÔNES --- */}
        <div className="aivery-container">
          <div id="toast" className={showToast ? 'show' : ''}>Envoyé dans le prompt</div>
          
          <div className="tabs-header">
            <button className={`tab-btn ${activeZone === 'zone1' ? 'active' : ''}`} onClick={() => setActiveZone('zone1')}>CONTRÔLE</button>
            <button className={`tab-btn ${activeZone === 'zone2' ? 'active' : ''}`} onClick={() => setActiveZone('zone2')}>APPROFONDIR</button>
            <button className={`tab-btn ${activeZone === 'zone3' ? 'active' : ''}`} onClick={() => setActiveZone('zone3')}>FORMATER</button>
            <button className={`tab-btn ${activeZone === 'zone4' ? 'active' : ''}`} onClick={() => setActiveZone('zone4')}>CRÉATIF</button>
          </div>

          <div className="ribbon-content">
            {activeZone === 'zone1' && (
              <div className="ribbon-zone">
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-Compléter')}>
                  <span className="icon">➕</span>
                  <span className="label">Compléter</span>
                </div>
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-Bavard')}>
                  <span className="icon">🤫</span>
                  <span className="label">Moins Bavard</span>
                </div>
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-Vérifier')}>
                  <span className="icon">✅</span>
                  <span className="label">Vérifier</span>
                </div>
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-Simplifier')}>
                  <span className="icon">⚪</span>
                  <span className="label">Simplifier</span>
                </div>
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-Critiquer')}>
                  <span className="icon">🛑</span>
                  <span className="label">Critiquer</span>
                </div>
              </div>
            )}

            {activeZone === 'zone2' && (
              <div className="ribbon-zone">
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-QQOQCP')}>
                  <span className="icon">🔍</span>
                  <span className="label">QQOQCP</span>
                </div>
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-5-Pourquoi')}>
                  <span className="icon">🖐️</span>
                  <span className="label">5 Pourquoi</span>
                </div>
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-Variantes')}>
                  <span className="icon">💡</span>
                  <span className="label">Variantes</span>
                </div>
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-Reformuler')}>
                  <span className="icon">🔄</span>
                  <span className="label">Reformuler</span>
                </div>
              </div>
            )}

            {activeZone === 'zone3' && (
              <div className="ribbon-zone">
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-Structurer')}>
                  <span className="icon">📋</span>
                  <span className="label">Structurer</span>
                </div>
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-To-Do')}>
                  <span className="icon">✔️</span>
                  <span className="label">To do List</span>
                </div>
              </div>
            )}

            {activeZone === 'zone4' && (
              <div className="ribbon-zone">
                <div className="btn-group" onClick={() => piloterPrompt('card-snippet-1-Creativite')}>
                  <span className="icon">🎨</span>
                  <span className="label">Inspirer</span>
                </div>
              </div>
            )}
          </div>
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
