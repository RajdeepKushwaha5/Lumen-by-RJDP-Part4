// theme-toggle.js — simple theme toggler that persists choice in localStorage
(function () {
  const key = 'site-theme'
  const root = document.documentElement
  function apply(theme) {
    root.setAttribute('data-theme', theme)
    try { localStorage.setItem(key, theme) } catch (e) { }
  }
  function toggle() {
    const current = root.getAttribute('data-theme') || 'dark'
    apply(current === 'dark' ? 'neon' : 'dark')
  }
  // init
  const saved = (function () { try { return localStorage.getItem(key) } catch (e) { return null } })() || 'dark'
  apply(saved)
  // expose for button
  window.__toggleTheme = toggle
})();
