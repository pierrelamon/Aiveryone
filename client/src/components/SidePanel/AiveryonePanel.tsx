import React from 'react';
import { useChatContext } from '~/hooks'; 
import { cn } from '~/utils';
import { EarthIcon, Zap } from 'lucide-react'; // Utilise les icônes de leur bibliothèque

const AiveryonePanel = () => {
  const { setText } = useChatContext() || {};

  const prompts = [
    { label: "Vérifie ta réponse", text: "Vérifie ta réponse précédente pour détecter d'éventuelles erreurs." },
    { label: "Méthode 5W (Qui, Quoi...)", text: "Applique la méthode QQOQCCP pour analyser ce sujet." },
    { label: "Sors un tableau", text: "Présente les informations précédentes sous la forme d'un tableau comparatif." }
  ];

  const handleAction = (promptText: string) => {
    if (setText) {
      setText(promptText);
      setTimeout(() => document.getElementById('prompt-textarea')?.focus(), 50);
    }
  };

  return (
    <div className="flex flex-col gap-1 p-2 bg-background-secondary border-b border-border-medium">
      {/* Header style "LibreChat" */}
      <div className="flex items-center gap-2 px-2 py-1 mb-1">
        <Zap className="w-3 h-3 text-blue-500" />
        <span className="text-[10px] font-bold tracking-widest uppercase text-text-secondary">
          AIVERY.ONE PRIORITÉS
        </span>
      </div>

      {/* Liste de boutons imitant DashGroupItem.tsx */}
      <div className="flex flex-col gap-1">
        {prompts.map((p, i) => (
          <button
            key={i}
            onClick={() => handleAction(p.text)}
            className={cn(
              "group flex items-center gap-3 px-3 py-2 text-sm text-text-primary",
              "hover:bg-surface-hover rounded-lg transition-colors border border-transparent hover:border-border-light text-left"
            )}
          >
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <EarthIcon size={16} />
            </div>
            <span className="font-medium truncate">{p.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AiveryonePanel;
