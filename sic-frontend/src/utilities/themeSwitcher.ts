export function themeSwitcher(mode: boolean) {

  if (mode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}