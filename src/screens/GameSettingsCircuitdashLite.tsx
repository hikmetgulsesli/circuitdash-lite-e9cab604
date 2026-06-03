// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - CircuitDash Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Pause, Power, RefreshCw, Save, Settings, User, Volume1, Volume2, X } from "lucide-react";


export type GameSettingsCircuitdashLiteActionId = "overdrive-1" | "close-2" | "lite-3" | "normal-4" | "overdrive-5" | "reset-preferences-6" | "return-to-game-7" | "save-preferences-8" | "lvl-04-1" | "spd-x2-2" | "restart-3" | "pause-4" | "settings-5" | "exit-6" | "v-sync-7" | "buffer-normal-8";

export interface GameSettingsCircuitdashLiteProps {
  actions?: Partial<Record<GameSettingsCircuitdashLiteActionId, () => void>>;

}

export function GameSettingsCircuitdashLite({ actions }: GameSettingsCircuitdashLiteProps) {
  return (
    <>
      <div className="game-bg"></div>
      <div className="scanlines"></div>
      {/* TopNavBar */}
      <header className="bg-surface/80 backdrop-blur-xl fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 shadow-[0_0_10px_rgba(0,219,233,0.3)] border-b border-primary/30 text-primary font-label-tech text-label-tech uppercase">
      <div className="flex items-center gap-4">
      <span className="font-display-lg-mobile text-display-lg-mobile text-primary-container tracking-tighter">CIRCUIT_DASH_LITE</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
      <a className="text-outline-variant hover:text-primary hover:glow-md transition-colors scale-95 active:brightness-125" href="#" data-action-id="lvl-04-1" onClick={(event) => { event.preventDefault(); actions?.["lvl-04-1"]?.(); }}>LVL_04</a>
      <a className="text-outline-variant hover:text-primary hover:glow-md transition-colors scale-95 active:brightness-125" href="#" data-action-id="spd-x2-2" onClick={(event) => { event.preventDefault(); actions?.["spd-x2-2"]?.(); }}>SPD_X2</a>
      </div>
      <div className="flex items-center gap-6">
      <div className="flex flex-col items-end">
      <span className="text-[10px] text-outline-variant leading-none">SCORE</span>
      <span className="font-score-display text-score-display text-primary-container glow-sm">99,420</span>
      </div>
      <div className="flex flex-col items-end hidden md:flex">
      <span className="text-[10px] text-outline-variant leading-none">HI_SCORE</span>
      <span className="font-score-display text-score-display text-tertiary-container">124,500</span>
      </div>
      </div>
      </header>
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex bg-surface-container-low/60 backdrop-blur-lg fixed left-0 top-0 h-full z-40 flex-col items-center py-8 gap-gutter docked left-0 w-20 border-r border-secondary/20">
      <div className="mt-16 flex flex-col items-center gap-2 mb-8">
      <div className="w-10 h-10 rounded-full border border-secondary/50 flex items-center justify-center overflow-hidden bg-surface-container">
      <User className="text-secondary/50" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col items-center text-center">
      <span className="text-[10px] font-label-tech text-secondary tracking-widest leading-tight">OPERATOR_01</span>
      <span className="text-[8px] font-label-tech text-tertiary-fixed-dim">SIGNAL_STABLE</span>
      </div>
      </div>
      <div className="flex flex-col gap-4 w-full px-2">
      <a className="w-full aspect-square flex flex-col items-center justify-center gap-1 rounded-lg text-secondary/50 hover:text-secondary hover:bg-secondary/10 transition-colors duration-150 ease-in-out font-label-tech text-label-tech" href="#" data-action-id="restart-3" onClick={(event) => { event.preventDefault(); actions?.["restart-3"]?.(); }}>
      <RefreshCw aria-hidden={true} focusable="false" />
      <span className="text-[9px]">RESTART</span>
      </a>
      <a className="w-full aspect-square flex flex-col items-center justify-center gap-1 rounded-lg text-secondary/50 hover:text-secondary hover:bg-secondary/10 transition-colors duration-150 ease-in-out font-label-tech text-label-tech" href="#" data-action-id="pause-4" onClick={(event) => { event.preventDefault(); actions?.["pause-4"]?.(); }}>
      <Pause aria-hidden={true} focusable="false" />
      <span className="text-[9px]">PAUSE</span>
      </a>
      <a className="w-full aspect-square flex flex-col items-center justify-center gap-1 bg-secondary-container text-on-secondary-container rounded-lg shadow-[0_0_15px_#ff24e4] transition-colors duration-150 ease-in-out font-label-tech text-label-tech" href="#" data-action-id="settings-5" onClick={(event) => { event.preventDefault(); actions?.["settings-5"]?.(); }}>
      <Settings style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="text-[9px] font-bold">SETTINGS</span>
      </a>
      <a className="w-full aspect-square flex flex-col items-center justify-center gap-1 rounded-lg text-secondary/50 hover:text-secondary hover:bg-secondary/10 transition-colors duration-150 ease-in-out font-label-tech text-label-tech" href="#" data-action-id="exit-6" onClick={(event) => { event.preventDefault(); actions?.["exit-6"]?.(); }}>
      <Power aria-hidden={true} focusable="false" />
      <span className="text-[9px]">EXIT</span>
      </a>
      </div>
      <div className="mt-auto mb-4 w-full px-2">
      <button className="w-full py-2 bg-secondary/20 border border-secondary text-secondary font-label-tech text-[10px] hover:bg-secondary hover:text-on-secondary transition-colors shadow-[0_0_10px_rgba(255,172,232,0.3)]" type="button" data-action-id="overdrive-1" onClick={actions?.["overdrive-1"]}>OVERDRIVE</button>
      </div>
      </nav>
      {/* Main Content Canvas (Settings Modal) */}
      <main className="flex-1 flex items-center justify-center pt-16 md:pl-20 p-margin-mobile md:p-margin-desktop relative z-30">
      <div className="w-full max-w-[600px] bg-surface/80 backdrop-blur-xl border border-primary/30 shadow-[0_0_15px_rgba(0,219,233,0.2)] rounded-DEFAULT relative overflow-hidden flex flex-col">
      {/* Decorative top trace */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/20">
      <div className="h-full w-1/3 bg-primary-container shadow-[0_0_10px_#00f0ff] animate-pulse"></div>
      </div>
      {/* Modal Header */}
      <div className="p-6 border-b border-primary/20 flex items-center justify-between bg-surface-container-low/50">
      <h1 className="font-headline-md text-headline-md text-primary-container tracking-widest uppercase glow-sm">GAME SETTINGS</h1>
      <button className="text-outline-variant hover:text-primary transition-colors" type="button" aria-label="Close" data-action-id="close-2" onClick={actions?.["close-2"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Modal Body */}
      <div className="p-6 flex flex-col gap-8 overflow-y-auto max-h-[614px]">
      {/* Difficulty Section */}
      <section className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
      <div className="w-1 h-4 bg-primary-container"></div>
      <h2 className="font-label-tech text-label-tech text-on-surface uppercase tracking-widest text-[12px]">DIFFICULTY</h2>
      </div>
      <div className="grid grid-cols-3 gap-2">
      <button className="py-2 border border-outline-variant text-outline-variant font-label-tech text-[12px] hover:border-primary/50 hover:text-primary transition-colors rounded-DEFAULT" type="button" data-action-id="lite-3" onClick={actions?.["lite-3"]}>LITE</button>
      <button className="py-2 border border-primary bg-primary/10 text-primary-container font-label-tech text-[12px] font-bold shadow-[0_0_10px_rgba(0,240,255,0.2)] rounded-DEFAULT relative overflow-hidden" type="button" data-action-id="normal-4" onClick={actions?.["normal-4"]}>
                    NORMAL
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-container"></div>
      </button>
      <button className="py-2 border border-outline-variant text-outline-variant font-label-tech text-[12px] hover:border-secondary/50 hover:text-secondary hover:shadow-[0_0_10px_rgba(255,36,228,0.2)] transition-colors rounded-DEFAULT" type="button" data-action-id="overdrive-5" onClick={actions?.["overdrive-5"]}>OVERDRIVE</button>
      </div>
      </section>
      {/* Speed Section */}
      <section className="flex flex-col gap-3">
      <div className="flex justify-between items-end">
      <div className="flex items-center gap-2">
      <div className="w-1 h-4 bg-primary-container"></div>
      <h2 className="font-label-tech text-label-tech text-on-surface uppercase tracking-widest text-[12px]">SPEED</h2>
      </div>
      <span className="font-label-tech text-[12px] text-primary-container">1.2x</span>
      </div>
      <div className="w-full flex items-center gap-4 relative py-2">
      <input max="2.0" min="0.5" step="0.1" type="range" defaultValue="1.2" />
      </div>
      <div className="flex justify-between text-[10px] font-label-tech text-outline-variant">
      <span>SLUGGISH</span>
      <span>HYPERSPACE</span>
      </div>
      </section>
      {/* Audio Section */}
      <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
      <div className="w-1 h-4 bg-primary-container"></div>
      <h2 className="font-label-tech text-label-tech text-on-surface uppercase tracking-widest text-[12px]">AUDIO</h2>
      </div>
      <label className="flex items-center gap-2 cursor-pointer group">
      <span className="font-label-tech text-[10px] text-outline-variant group-hover:text-primary transition-colors">MUTE</span>
      <div className="w-8 h-4 bg-surface-container border border-outline-variant rounded-full relative transition-colors group-hover:border-primary/50">
      <div className="w-3 h-3 bg-outline-variant rounded-full absolute top-[1px] left-[1px] transition-colors"></div>
      </div>
      </label>
      </div>
      <div className="flex items-center gap-4">
      <Volume1 className="text-outline-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="flex-1" max="100" min="0" type="range" defaultValue="80" />
      <Volume2 className="text-primary/80 text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      </section>
      {/* Input Help Section */}
      <section className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
      <div className="w-1 h-4 bg-tertiary-container"></div>
      <h2 className="font-label-tech text-label-tech text-tertiary uppercase tracking-widest text-[12px]">INPUT HELP (HOW TO PLAY)</h2>
      </div>
      <div className="bg-surface-container-low/80 border border-outline-variant/30 p-3 flex flex-col gap-2 rounded-DEFAULT">
      <div className="flex items-center justify-between">
      <span className="font-label-tech text-[11px] text-on-surface-variant">PULSE / FIRE</span>
      <div className="bg-surface border border-outline px-2 py-1 rounded-[2px] font-label-tech text-[10px] text-on-surface shadow-[0_2px_0_theme('colors.outline')]">SPACEBAR</div>
      </div>
      <div className="w-full h-[1px] bg-outline-variant/20"></div>
      <div className="flex items-center justify-between">
      <span className="font-label-tech text-[11px] text-on-surface-variant">MOVEMENT</span>
      <div className="flex gap-1">
      <div className="bg-surface border border-outline px-1.5 py-1 rounded-[2px] font-label-tech text-[10px] text-on-surface shadow-[0_2px_0_theme('colors.outline')]">←</div>
      <div className="bg-surface border border-outline px-1.5 py-1 rounded-[2px] font-label-tech text-[10px] text-on-surface shadow-[0_2px_0_theme('colors.outline')]">↑</div>
      <div className="bg-surface border border-outline px-1.5 py-1 rounded-[2px] font-label-tech text-[10px] text-on-surface shadow-[0_2px_0_theme('colors.outline')]">↓</div>
      <div className="bg-surface border border-outline px-1.5 py-1 rounded-[2px] font-label-tech text-[10px] text-on-surface shadow-[0_2px_0_theme('colors.outline')]">→</div>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Modal Actions */}
      <div className="p-6 border-t border-primary/20 bg-surface-container-lowest/80 flex flex-col sm:flex-row items-center justify-between gap-4">
      <button className="text-[11px] font-label-tech text-outline-variant hover:text-error transition-colors uppercase tracking-widest border-b border-transparent hover:border-error pb-0.5 order-3 sm:order-1" type="button" data-action-id="reset-preferences-6" onClick={actions?.["reset-preferences-6"]}>RESET PREFERENCES</button>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto order-1 sm:order-2">
      <button className="px-6 py-2 border border-outline-variant text-on-surface hover:bg-surface-bright transition-colors font-label-tech text-[12px] uppercase rounded-DEFAULT" type="button" data-action-id="return-to-game-7" onClick={actions?.["return-to-game-7"]}>RETURN TO GAME</button>
      <button className="px-6 py-2 bg-primary-container/20 border border-primary-container text-primary-container font-label-tech text-[12px] font-bold uppercase shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:bg-primary-container hover:text-on-primary-container transition-colors rounded-DEFAULT flex items-center justify-center gap-2" type="button" data-action-id="save-preferences-8" onClick={actions?.["save-preferences-8"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" />
                  SAVE PREFERENCES
                </button>
      </div>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="fixed bottom-2 right-4 z-50 flex gap-4 bg-transparent font-label-tech text-[10px] text-tertiary-fixed-dim">
      <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse"></div>
      <span>v0.4.2_ALPHA // CORE_SYSTEM_ACTIVE</span>
      </div>
      <div className="flex gap-4">
      <a className="text-tertiary/40 hover:text-tertiary-fixed transition-colors" href="#" data-action-id="v-sync-7" onClick={(event) => { event.preventDefault(); actions?.["v-sync-7"]?.(); }}>V-SYNC</a>
      <a className="text-tertiary/40 hover:text-tertiary-fixed transition-colors" href="#" data-action-id="buffer-normal-8" onClick={(event) => { event.preventDefault(); actions?.["buffer-normal-8"]?.(); }}>BUFFER_NORMAL</a>
      </div>
      </footer>
    </>
  );
}
