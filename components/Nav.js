import html from "html-literal";

export default links => html`
  <nav>
    <div class="logo" alt text="landScape"></div>
    <a href="https://landscape-capstone.netlify.app">
      <img src="./assets/logo.png" alt="Logo image" />
    </a>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
`;
