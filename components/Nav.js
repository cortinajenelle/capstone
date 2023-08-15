import html from "html-literal";

export default links => html`
  <nav>
    <div class="logo">
      <a href="https://landscape-capstone.netlify.app">
        <img
          src="./assets/logo.png"
          width="200"
          height="200"
          alt="landScape logo"
        />
      </a>
    </div>
    <i class="fas fa-bars menu-toggle"></i>
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
