import html from "html-literal";
import * as views from "./";

export default state => {
  console.log(views, state.view);
  return html`
    ${views[state.view](state)}
  `;
};
