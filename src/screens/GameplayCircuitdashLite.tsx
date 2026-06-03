// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - CircuitDash Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { CornerDownLeft, Keyboard, Pause, Play, Power, RefreshCw, Settings, Smile } from "lucide-react";


export type GameplayCircuitdashLiteActionId = "restart-1" | "pause-2" | "settings-3" | "exit-4" | "start-game-5" | "resume-link-6" | "restart-seq-7" | "abort-8";

export interface GameplayCircuitdashLiteProps {
  actions?: Partial<Record<GameplayCircuitdashLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayCircuitdashLite({ actions, runtime }: GameplayCircuitdashLiteProps) {
  void runtime;
  return (
    <>
      {/* Top Navigation (HUD) */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop md:px-margin-desktop px-margin-mobile h-16 bg-surface/80 backdrop-blur-xl border-b border-primary/30 shadow-[0_0_10px_rgba(0,219,233,0.3)]">
      <div className="font-display-lg md:font-display-lg text-display-lg md:text-display-lg text-primary-container tracking-tighter">
                  CIRCUIT_DASH_LITE
              </div>
      <div className="hidden md:flex gap-8 items-center">
      <div className="flex items-center gap-2">
      <span className="font-label-tech text-label-tech text-outline-variant uppercase">SCORE:</span>
      <span className="font-score-display text-score-display text-primary-container font-bold glow-sm">12,450</span>
      </div>
      <div className="flex items-center gap-2 border-l border-primary/30 pl-8">
      <span className="font-label-tech text-label-tech text-outline-variant uppercase">HI_SCORE:</span>
      <span className="font-score-display text-score-display text-primary">99,420</span>
      </div>
      <div className="flex items-center gap-2 border-l border-primary/30 pl-8">
      <span className="font-label-tech text-label-tech text-outline-variant uppercase">LVL_04</span>
      </div>
      <div className="flex items-center gap-2 border-l border-primary/30 pl-8">
      <span className="font-label-tech text-label-tech text-outline-variant uppercase">SPD_X2</span>
      </div>
      </div>
      <div className="md:hidden flex flex-col items-end">
      <div className="font-score-display text-score-display text-primary-container">12,450</div>
      <div className="font-label-tech text-[10px] text-outline-variant">HI: 99,420</div>
      </div>
      </nav>
      {/* Side Navigation (Web Only) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full z-40 flex-col items-center py-24 gap-gutter bg-surface-container-low/60 backdrop-blur-lg border-r border-secondary/20 w-20">
      <div className="mb-8 flex flex-col items-center gap-2">
      <div aria-label="User HUD Avatar" className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center bg-secondary/10 relative">
      <Smile className="text-secondary text-lg" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-tech text-[10px] text-secondary/70">OP_01</span>
      </div>
      <button className="w-12 h-12 rounded-lg flex flex-col items-center justify-center gap-1 text-secondary/50 hover:text-secondary hover:bg-secondary/10 transition-colors duration-150 ease-in-out group relative" type="button" data-action-id="restart-1" onClick={actions?.["restart-1"]}>
      <RefreshCw className="text-xl" aria-hidden={true} focusable="false" />
      <span className="font-label-tech text-[8px] opacity-0 group-hover:opacity-100 absolute -right-16 bg-surface px-2 py-1 border border-secondary/30 rounded">RESTART</span>
      </button>
      <button className="w-12 h-12 rounded-lg flex flex-col items-center justify-center gap-1 text-secondary/50 hover:text-secondary hover:bg-secondary/10 transition-colors duration-150 ease-in-out group relative" type="button" data-action-id="pause-2" onClick={actions?.["pause-2"]}>
      <Pause className="text-xl" aria-hidden={true} focusable="false" />
      <span className="font-label-tech text-[8px] opacity-0 group-hover:opacity-100 absolute -right-14 bg-surface px-2 py-1 border border-secondary/30 rounded">PAUSE</span>
      </button>
      <button className="w-12 h-12 rounded-lg flex flex-col items-center justify-center gap-1 text-secondary/50 hover:text-secondary hover:bg-secondary/10 transition-colors duration-150 ease-in-out group relative" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings className="text-xl" aria-hidden={true} focusable="false" />
      <span className="font-label-tech text-[8px] opacity-0 group-hover:opacity-100 absolute -right-16 bg-surface px-2 py-1 border border-secondary/30 rounded">SETTINGS</span>
      </button>
      <div className="mt-auto">
      <button className="w-12 h-12 rounded-lg flex flex-col items-center justify-center gap-1 text-secondary/50 hover:text-secondary hover:bg-secondary/10 transition-colors duration-150 ease-in-out group relative" type="button" data-action-id="exit-4" onClick={actions?.["exit-4"]}>
      <Power className="text-xl" aria-hidden={true} focusable="false" />
      <span className="font-label-tech text-[8px] opacity-0 group-hover:opacity-100 absolute -right-12 bg-surface px-2 py-1 border border-secondary/30 rounded">EXIT</span>
      </button>
      </div>
      </aside>
      {/* Main Playfield Canvas */}
      <main className="flex-1 w-full h-full relative grid-bg pt-16 md:pl-20 overflow-hidden">
      {/* Scanline Overlay */}
      <div className="absolute inset-0 scanline z-10"></div>
      {/* Signal Strength HUD */}
      <div className="absolute top-20 right-margin-desktop z-20 flex flex-col gap-2 p-4 bg-surface-container/50 border border-primary/20 backdrop-blur-md rounded-lg w-48">
      <div className="flex justify-between items-center">
      <span className="font-label-tech text-label-tech text-primary">SIGNAL</span>
      <span className="font-label-tech text-label-tech text-primary-container">85%</span>
      </div>
      <div className="w-full h-2 bg-surface border border-primary/30 flex p-[1px]">
      <div className="h-full bg-primary-container w-[85%] shadow-[0_0_5px_#00f0ff]"></div>
      </div>
      </div>
      {/* The 'Playfield' Entities */}
      <div className="absolute inset-0 flex items-center justify-center perspective-[1000px] z-0">
      {/* Central Pulsing Signal */}
      <div className="w-6 h-6 rounded-full bg-primary-container shadow-[0_0_20px_#00f0ff,inset_0_0_10px_#fff] glow-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"></div>
      {/* Approaching Circuit Gate (Rotating) */}
      <div className="absolute w-64 h-64 border-4 border-primary/50 border-dashed rounded-full animate-[spin_10s_linear_infinite] shadow-[0_0_15px_rgba(0,219,233,0.2)] flex items-center justify-center transform-gpu -translate-z-64 opacity-60">
      {/* Inner gate detail */}
      <div className="w-48 h-48 border-2 border-secondary/40 rounded-full absolute flex items-center justify-center">
      {/* Data nodes on gate */}
      <div className="absolute top-0 w-2 h-4 bg-secondary shadow-[0_0_8px_#fface8]"></div>
      <div className="absolute bottom-0 w-2 h-4 bg-secondary shadow-[0_0_8px_#fface8]"></div>
      <div className="absolute left-0 w-4 h-2 bg-secondary shadow-[0_0_8px_#fface8]"></div>
      <div className="absolute right-0 w-4 h-2 bg-secondary shadow-[0_0_8px_#fface8]"></div>
      </div>
      </div>
      {/* Distant Circuit Gate */}
      <div className="absolute w-32 h-32 border-2 border-primary/30 rounded-full shadow-[0_0_5px_rgba(0,219,233,0.1)] flex items-center justify-center transform-gpu -translate-z-128 opacity-30"></div>
      {/* Overload Zone (Magenta) */}
      <div className="absolute bottom-1/4 left-1/4 w-32 h-1 border-t-2 border-secondary border-dashed transform -rotate-45 shadow-[0_0_10px_#fface8] opacity-50"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-1 border-t-2 border-secondary border-dashed transform rotate-12 shadow-[0_0_10px_#fface8] opacity-50"></div>
      </div>
      {/* Start Game Overlay (Initially Active for prompt) */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-40" id="start-overlay">
      <h1 className="font-display-lg text-display-lg text-primary mb-8 tracking-widest text-center shadow-black drop-shadow-lg">SYSTEM<br />READY</h1>
      <button className="bg-primary/10 border-2 border-primary text-primary px-8 py-4 font-headline-md text-headline-md uppercase tracking-wider hover:bg-primary/20 hover:shadow-[0_0_20px_#00f0ff] transition-colors duration-300 relative group overflow-hidden" type="button" data-action-id="start-game-5" onClick={actions?.["start-game-5"]}>
      <span className="relative z-10 flex items-center gap-2">
      <Play aria-hidden={true} focusable="false" />
                          START_GAME
                      </span>
      <div className="absolute inset-0 bg-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
      </button>
      <div className="mt-8 flex gap-4 text-outline-variant font-label-tech text-label-tech">
      <span className="flex items-center gap-1 border border-outline-variant/30 px-2 py-1"><Keyboard className="text-sm" aria-hidden={true} focusable="false" /> ARROWS TO MOVE</span>
      <span className="flex items-center gap-1 border border-outline-variant/30 px-2 py-1"><CornerDownLeft className="text-sm" aria-hidden={true} focusable="false" /> SPACE TO BOOST</span>
      </div>
      </div>
      {/* Pause Overlay (Hidden by default, structure provided) */}
      <div className="hidden absolute inset-0 bg-surface-container-low/90 backdrop-blur-md flex flex-col items-center justify-center z-40 border-[4px] border-secondary/20 m-4 rounded-lg" id="pause-overlay">
      <div className="font-display-lg text-display-lg text-secondary mb-2 tracking-[0.2em] shadow-[0_0_20px_#fface8] drop-shadow-lg">PAUSED</div>
      <div className="font-label-tech text-label-tech text-secondary/70 mb-12">SIGNAL_INTERRUPT</div>
      <div className="flex flex-col gap-4 w-64">
      <button className="w-full bg-secondary-container text-on-secondary-container px-6 py-3 font-headline-md text-headline-md uppercase text-center border border-secondary shadow-[0_0_15px_#ff24e4] hover:bg-secondary hover:text-on-secondary transition-colors" type="button" data-action-id="resume-link-6" onClick={actions?.["resume-link-6"]}>
                          RESUME_LINK
                      </button>
      <button className="w-full bg-surface-bright text-on-surface px-6 py-3 font-label-tech text-label-tech uppercase text-center border border-outline-variant hover:border-secondary hover:text-secondary transition-colors" type="button" data-action-id="restart-seq-7" onClick={actions?.["restart-seq-7"]}>
                          RESTART_SEQ
                      </button>
      <button className="w-full bg-surface-bright text-error px-6 py-3 font-label-tech text-label-tech uppercase text-center border border-error/50 hover:bg-error/10 transition-colors mt-4" type="button" data-action-id="abort-8" onClick={actions?.["abort-8"]}>
                          ABORT
                      </button>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="fixed bottom-2 right-4 z-50 flex gap-4 bg-transparent hidden md:flex">
      <span className="font-label-tech text-[10px] text-tertiary-fixed-dim">v0.4.2_ALPHA // CORE_SYSTEM_ACTIVE</span>
      <span className="font-label-tech text-[10px] text-tertiary/40 hover:text-tertiary-fixed cursor-pointer">V-SYNC</span>
      <span className="font-label-tech text-[10px] text-tertiary/40 hover:text-tertiary-fixed cursor-pointer">BUFFER_NORMAL</span>
      </footer>
      
    </>
  );
}
