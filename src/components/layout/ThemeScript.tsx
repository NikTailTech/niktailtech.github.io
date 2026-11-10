/**
 * Inline script to prevent theme flash before hydration.
 * Mirrors the logic in useTheme (localStorage key: nicholas-theme).
 */
export function ThemeScript() {
  const code = `(function(){try{var k='nicholas-theme';var m=localStorage.getItem(k);var d=m==='dark'||(m!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
