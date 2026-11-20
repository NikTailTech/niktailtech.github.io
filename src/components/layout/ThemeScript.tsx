/**
 * Applies the stored theme before first paint. Mirrors useTheme (localStorage key: nicholas-theme).
 * Render inside <head>.
 */
const code = `(function(){try{var k='nicholas-theme';var m=localStorage.getItem(k);var d=m==='dark'||(m!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
