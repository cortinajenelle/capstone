import html from "html-literal";
import * as views from "./";

export default state => html`
  ${views[state.view](state)}
`;
export default (state) => html` ${views[state.view](state)} `;
