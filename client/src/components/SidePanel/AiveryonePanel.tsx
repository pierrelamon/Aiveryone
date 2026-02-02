import React from 'react';
import { useChatContext } from 'librechat-data-provider';
import { cn } from '~/utils'; // On utilise leur outil de style pour être raccord

const AiveryonePanel = () => {
  const { setText } = useChatContext();

  const prompts = [
    { label: "Vérifie ta réponse", text: "Peux-tu vérifier ta réponse précédente ? Assure-toi qu'il n'y a pas d'erreur et que c'est bien concret." },
    { label: "Méthode 5W (Qui, Quoi...)", text: "Applique la méthode QQOQCCP pour analyser ce sujet." },
    { label: "Aide-moi à compléter", text: "Voici mon début de prompt : [TEXTE]. Aide-moi à le rendre plus efficace." },
    { label: "Rends ça plus simple", text: "Réécris ton explication précédente pour qu'elle soit compréhensible par un débutant total." },
    { label: "Sors un tableau", text: "Présente les informations précédentes sous la forme d'un tableau comparatif." }
  ];

  const handleAction = (promptText: string) => {
    if (setText) {
      setText(promptText);
      // Le fameux focus automatique
      setTimeout(() => {
        const textarea = document.getElementById('prompt-textarea');
        textarea?.focus();
      }, 50);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 border-b border-border-medium bg-background-secondary">
      <div className="flex justify-center mb-2">
        <h2 className="text-xs font-black tracking-[0.2em] text-text-primary uppercase">
          AIVERY.ONE
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {prompts.map((p, i) => (
          <button
            key={i}
            onClick={() => handleAction(p.text)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 text-sm font-medium text-white",
              "bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm active:scale-95"
            )}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AiveryonePanel;
