
const StepUpAudio = (() => {
  const state = {
    musicOn: localStorage.getItem('stepupMusic') !== 'off',
    sfxOn: localStorage.getItem('stepupSound') !== 'off',
    music: null,
    unlocked: false
  };

  function createAudio(src, loop=false, volume=1) {
    const audio = new Audio(src);
    audio.preload = 'auto';
    audio.loop = loop;
    audio.volume = volume;
    audio.playsInline = true;
    return audio;
  }

  function ensureMusic() {
    if (!state.music) {
      state.music = createAudio('assets/audio/world1-music.wav', true, 0.58);
    }
    return state.music;
  }

  async function unlock() {
    state.unlocked = true;
    if (state.musicOn) {
      const music = ensureMusic();
      try { await music.play(); } catch (_) {}
    }
    syncButtons();
  }

  function startMusic() {
    state.musicOn = true;
    localStorage.setItem('stepupMusic', 'on');
    const music = ensureMusic();
    music.volume = 0.58;
    if (state.unlocked) music.play().catch(() => {});
    syncButtons();
  }

  function stopMusic() {
    state.musicOn = false;
    localStorage.setItem('stepupMusic', 'off');
    const music = ensureMusic();
    music.pause();
    syncButtons();
  }

  function toggleMusic() {
    state.musicOn ? stopMusic() : startMusic();
  }

  function toggleSfx() {
    state.sfxOn = !state.sfxOn;
    localStorage.setItem('stepupSound', state.sfxOn ? 'on' : 'off');
    if (state.sfxOn) playClick();
    syncButtons();
  }

  function playFile(src, volume=1) {
    if (!state.sfxOn) return;
    const audio = createAudio(src, false, volume);
    audio.play().catch(() => {});
  }

  function playTone(freq=440, duration=0.06, volume=0.03, type='sine') {
    if (!state.sfxOn) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.stop(ctx.currentTime + duration);
    osc.onended = () => ctx.close();
  }

  function playClick() { playTone(520, 0.055, 0.028, 'square'); }
  function playStep() { playTone(260, 0.045, 0.022, 'square'); }
  function playStar() { playFile('assets/audio/star.wav', 0.88); }
  function playComplete() { playFile('assets/audio/mission-complete.wav', 0.95); }
  function playError() { playFile('assets/audio/error.wav', 0.82); }

  function syncButtons() {
    document.querySelectorAll('[data-music-button]').forEach(btn => {
      btn.textContent = state.musicOn ? '♫ เพลง: เปิด' : '♫ เพลง: ปิด';
    });
    document.querySelectorAll('[data-sfx-button]').forEach(btn => {
      btn.textContent = state.sfxOn ? '🔊 เสียง: เปิด' : '🔇 เสียง: ปิด';
    });
  }

  document.addEventListener('pointerdown', unlock, { once:true });
  document.addEventListener('keydown', unlock, { once:true });
  document.addEventListener('DOMContentLoaded', syncButtons);

  return {
    unlock, startMusic, stopMusic, toggleMusic, toggleSfx,
    playClick, playStep, playStar, playComplete, playError, syncButtons
  };
})();
