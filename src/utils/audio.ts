// Web Audio API ambient soundscape and tactile interaction sounds

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isPlayingAmbient: boolean = false;
  private ambientGain: GainNode | null = null;
  private ambientNodes: OscillatorNode[] = [];

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      try {
        this.ctx.resume().catch(() => {});
      } catch {
        // Safe autoplay handling
      }
    }
    return this.ctx;
  }

  // Play an authentic, resonant temple brass bell chime
  public playTempleBell() {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      // Master bell gain
      const masterBellGain = ctx.createGain();
      masterBellGain.connect(ctx.destination);
      masterBellGain.gain.setValueAtTime(0.35, now);
      masterBellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      // Harmonics for a rich brass temple bell (Ghanti)
      const freqs = [880, 1760, 2640, 3520, 528];
      const gains = [0.5, 0.3, 0.15, 0.08, 0.35];
      const decays = [3.2, 2.5, 1.8, 1.2, 3.0];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq + (Math.random() * 4 - 2), now);

        g.gain.setValueAtTime(gains[idx], now);
        g.gain.exponentialRampToValueAtTime(0.0001, now + decays[idx]);

        osc.connect(g);
        g.connect(masterBellGain);

        osc.start(now);
        osc.stop(now + decays[idx]);
      });
    } catch {
      // Audio context might be restricted before interaction
    }
  }

  // Soft meditative devotional ambient drone (morning sunlight, sitar/tanpura harmonic shimmer)
  public startAmbient() {
    if (this.isPlayingAmbient) return;
    try {
      const ctx = this.getContext();
      const now = ctx.currentTime;

      this.ambientGain = ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, now);
      // Soft gentle fade in over 2.5 seconds
      const targetGain = this.isMuted ? 0.001 : 0.06;
      this.ambientGain.gain.exponentialRampToValueAtTime(targetGain, now + 2.5);
      this.ambientGain.connect(ctx.destination);

      // Warm Tanpura C# tuning chords (C#3, G#3, C#4, F#3)
      const frequencies = [138.59, 207.65, 277.18, 185.00];

      this.ambientNodes = frequencies.map((freq, i) => {
        const osc = ctx.createOscillator();
        osc.type = i === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, now);

        // Gentle subtle vibrato/shimmer
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + i * 0.1, now);
        lfoGain.gain.setValueAtTime(1.5, now);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start(now);

        const subGain = ctx.createGain();
        subGain.gain.setValueAtTime(0.25 / frequencies.length, now);
        osc.connect(subGain);
        if (this.ambientGain) {
          subGain.connect(this.ambientGain);
        }

        osc.start(now);
        return osc;
      });

      this.isPlayingAmbient = true;
    } catch {
      // Audio autoplay restrictions
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.ctx && this.ambientGain) {
      const now = this.ctx.currentTime;
      this.ambientGain.gain.cancelScheduledValues(now);
      this.ambientGain.gain.setValueAtTime(this.ambientGain.gain.value, now);
      this.ambientGain.gain.linearRampToValueAtTime(
        this.isMuted ? 0.0001 : 0.06,
        now + 0.3
      );
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }
}

let instance: SoundEngine | null = null;

export const getSoundEngine = (): SoundEngine => {
  if (!instance && typeof window !== 'undefined') {
    instance = new SoundEngine();
  }
  return instance as SoundEngine;
};
