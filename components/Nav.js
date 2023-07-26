import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars">
    <ul>
      <li>Home</li>
      <li>Origins</li>
      <li>Farmers</li>
      <li>Freelancers</li>
      <li>Contact</li>
    </ul>ç
    </i>
    <ul class="hidden--mobile nav-links">
      ${links.map(link => {
        return `<li>
                  <a href="/${link.title}" title="${link.title}" data-navigo>
                    ${link.text}
                  </a>
                </li>`;
      })}
    </ul>
  </nav>
`;
