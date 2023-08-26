import html from "html-literal";
import farmersbanner from "../../assets/farmerbanner.png";

export default state => html`
  <h1>Farmers</h1>
  <br />
  <div class="column">
    <div id="left">
      <div id="savvybanner"><img src=${farmerbanner} /></div>
    </div>
    <div id="middle">
      <table class="farmers">
        <tr>
          <th class="farmers"><h3>Name</h3></th>
          <th class="farmers"><h3>Address</h3></th>
          <th class="farmers"><h3>City</h3></th>
          <th class="farmers"><h3>State</h3></th>
          <th class="farmers"><h3>Zip</h3></th>
          <th class="farmers"><h3>Farmgoods</h3></th>
          <th class="farmers"><h3>Opportunity</h3></th>
        </tr>
        ${state.farmers
          .map(farmer => {
            return `<tr><td>${farmer.name}</td><td>${farmer.address1}</td><td>${farmer.city}</td><td>${farmer.state}</td><td>${farmer.zip}</td><td>${farmer.farmgoods}</td><td>${farmer.opportunity}</td></tr>`;
          })
          .join("")}
      </table>
    </div>
    <div id="right">
      THREE - Farmers - This page will host a directory of farms to share the
      following: overview of history, vision and mission of the farm; photo
      gallery; list of what is available in the CSA box; digital freelance
      needs; hours of operation; contact info for the farm which must include a
      physical, verifiable address and phone number, etc Freelancers - This page
      will host a directory of freelancers to share the following: skill
      inventory; links to portfolio/completed projects; certifications; public
      reference info; a timebank for hours logged with farmers; contact info
      which must incl. a verifiable phone number and at least a zip code for
      geo-location mapping in the future.
    </div>
  </div>
`;
