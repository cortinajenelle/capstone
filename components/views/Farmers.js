import html from "html-literal";

export default state => html`
  <h1>Farmers</h1>
  <br />
  <div id="column">
    <div id="left">ONE</div>
    <div id="middle">
      <table id="farmers">
        <tr>
          <th>Name</th>
          <th>Address1</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Farmgoods</th>
          <th>Opportunity</th>
        </tr>
        ${state.farmers
          .map(farmer => {
            return `<tr><td>${farmer.name}</td><td>${farmer.address1}</td><td>${farmer.city}</td><td>${farmer.state}</td><td>${farmer.zip}</td><td>${farmer.farmgoods}</td><td>${farmer.opportunity}</td></tr>`;
          })
          .join("")}
      </table>
    </div>
    <div id="right">THREE</div>
  </div>
`;
