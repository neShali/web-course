import { defineConfig } from 'vite';

export default defineConfig({
  // !!! ВАЖНО для GitHub Pages
  // 1) Если репозиторий username.github.io → оставь '/'.
  // 2) Если репозиторий, например, 'vasya-portfolio',
  //    для GitHub Pages по адресу https://username.github.io/vasya-portfolio/
  //    поставь base: '/vasya-portfolio/'.
  base: '/',
});
