import React from 'react';

const AiveryonePanel = () => {
  return (
    <div className="aivery-container">
      <style>{`
        .aivery-container {
          --primary-blue: #0055ff;
          --light-blue: #dbeafe;
          --text-dark: #ececec;
          --bg-card: #2f2f2f; /* Couleur adaptée au mode sombre LibreChat */
          --yt-red: #FF0000;
          
          padding: 14px;
          background: transparent;
          width: 100%;
          font-family: -apple-system, sans-serif;
        }

        .aivery-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .aivery-logo h1 {
          font-size: 1.1rem;
          font-weight: 900;
          letter-spacing: 0.2em;
          color: var(--text-dark);
        }

        /* --- Liste des Boutons --- */
        .prompts-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .btn-main {
          background-color: var(--primary-blue);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          text-align: left;
          width: 100%;
          cursor: pointer;
          transition: transform 0.1s ease, background-color 0.2s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .btn-main:hover {
          background-color: #0044cc;
          transform: translateY(-1px);
        }

        .btn-main svg {
          width: 18px;
          height: 18px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2.5;
        }

        /* --- Vidéos --- */
        .video-section {
          margin-top: 25px;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 15px;
        }

        .video-section h3 {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          color: #888;
        }

        .btn-video {
          background-color: var(--yt-red);
          color: white;
          border: none;
          border-radius: 10px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-size: 0.85rem;
          margin-bottom: 8px;
        }

        .btn-video svg {
          fill: white;
          width: 16px;
          height: 16px;
        }
      `}</style>

      <div className="aivery-logo">
        <h1>AIVERY.ONE</h1>
      </div>

      <div className="prompts-list">
        {/* Bouton 1 */}
        <button className="btn-main">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="9 11 12 14 22 4"/></svg>
          <span>Vérifie ta réponse</span>
        </button>

        {/* Bouton 2 */}
        <button className="btn-main">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span>Méthode 5W (Qui, Quoi...)</span>
        </button>

        {/* Bouton 3 */}
        <button className="btn-main">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="9 11 12 14 22 4"/></svg>
          <span>Aide-moi à compléter</span>
        </button>

        {/* Bouton 4 */}
        <button className="btn-main">
          <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          <span>Rends la réponse plus simple</span>
        </button>

        {/* Bouton 5 */}
        <button className="btn-main">
          <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
          <span>Sors un tableau</span>
        </button>
      </div>

      <div className="video-section">
        <h3>60 secondes pour apprendre</h3>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="btn-video">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          <span>Le secret d'un bon Prompt</span>
        </a>
      </div>
    </div>
  );
};

export default AiveryonePanel;
