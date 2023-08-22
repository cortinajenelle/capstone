import html from "html-literal";

export default state => html`
  <h1>Contact</h1>
  <br />
  <div id="map"></div>
  <div id="contact">
    <div id="contactfarmers">
    <p>Are you a local farmer in need of a digital freelancer to support with web
      design, operations support, social media, file organizing, web
      development, marketing+branding or copywriting?
    </p>
    <h2>Offer Yer Farmgoods & Get Digital Help:</h2>
    <br/>
    <div>
    <form id="form" method="POST" action="">
        <label for="name">Farm Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Farm Name"
          required
        />
        <br/>
        <label for="address1">Address1:</label>
        <input
          type="text"
          name="address1"
          id="address1"
          placeholder="Enter Address"
          required
        />
        <br/>
        <label for="address2">Address2:</label>
        <input
          type="text"
          name="address2"
          id="address2"
          placeholder="Suite, Unit or Box #"
          required
        />
        <br/>
        <label for="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter City"
          required
        />
     <br/>
        <label for="state">State:</label>
        <select id="state" name="state">
          <option value="">Select a State</option>
          <option value="TN">Tennessee</option>
          <option value="GA">Georgia</option>
          <option value="AL">Alabama</option>
          <option value="MS">Mississippi</option>
          <option value="KY">Kentucky</option>
        </select>
        <br/>
        <label for="zip">Zip Code:</label>
        <input
          type="text"
          name="zip"
          id="zip"
          placeholder="Enter Zip Code"
          required
        />
      <br/>
        <label for="farmgoods"><b><em>Farmgoods:</b></em></label>
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="farmgoods"
          value="Farmgoods"
        />
        <label for="top1">eggs</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="farmgoods"
          value="eggs"
        />
        <label for="top2">honey</label>
        <input
          type="checkbox"
          id="id_of_checkbox3"
          class="items1"
          name="farmgoods"
          value="honey"
        />
        <label for="top3">wildflowers</label>
        <input
          type="checkbox"
          id="id_of_checkbox4"
          class="items1"
          name="farmgoods"
          value="wildflowers"
        />
        <label for="top4">CSA produce box</label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="farmgoods"
          value="vegetables"
        />
        <label for="top5">dairy products</label>
        <input
          type="checkbox"
          id="id_of_checkbox6"
          class="items1"
          name="farmgoods"
          value="dairy products"
          />
        <label for="top6">organic, humane meat</label>
        <input
          type="checkbox"
          id="id_of_checkbox7"
          class="items1"
          name="farmgoods"
          value="meat"
          />
        <label for="top7">herbal teas</label>
      <br/>
        <label for="freelancers"><b><em>Digital Needs:</b></em></label>
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="freelancers"
          value="web design and development"
        />
        <label for="top1">web design & dev</label>
        <input
          type="checkbox"
          id="id_of_checkbox2"
          class="items1"
          name="freelancers"
          value="graphic design"
        />
        <label for="top2">graphic design</label>
        <input
          type="checkbox"
          id="id_of_checkbox3"
          class="items1"
          name="freelancers"
          value="branding"
        />
        <label for="top3">branding</label>
        <input
          type="checkbox"
          id="id_of_checkbox4"
          class="items1"
          name="freelancers"
          value="membership"
        />
        <label for="top4">membership</label>
        <input
          type="checkbox"
          id="id_of_checkbox5"
          class="items1"
          name="freelancers"
          value="social media"
        />
        <label for="top5">social media</label>
        <input
          type="checkbox"
          id="id_of_checkbox6"
          class="items1"
          name="freelancers"
          value="cybersecurity"
          />
        <label for="top6">cybersecurity</label>
        <input
          type="checkbox"
          id="id_of_checkbox7"
          class="items1"
          name="freelancers"
          value="marketing"
          />
        <label for="top7">marketing</label>
        <input
          type="checkbox"
          id="id_of_checkbox7"
          class="items1"
          name="freelancers"
          value="data analysis"
          />
        <label for="top7">data analysis</label>
        <input
          type="checkbox"
          id="id_of_checkbox7"
          class="items1"
          name="freelancers"
          value="copywriting"
          />
        <label for="top7">copywriting</label>
        <br/>
      <input type="hidden" name="customer" id="customer" value="landScape" />
      <input type="submit" name="submit" value="Submit Farm" />
    </form>
</div>
  <div id="contactfreelancers">
    <p>
      Are you a digital freelancer wanting to support your local agricultural
      ecosystem? Or maybe you just want to eat a bit healthier in between web
      development sprints? We've got you covered!</p>
      <h2>Offer Digital Help & Get Yer Farmgoods:</h2>
</div>
<div id="contactlist">
    <ul>
      <li>Web Design</li>
      <li>Graphic Design</li>
      <li>Brand Identity & Strategy</li>
      <li>Membership</li>
      <li>Social Media Management</li>
      <li>Web Development</li>
      <li>Cybersecurity</li>
      <li>Marketing & Promotions</li>
      <li>Data & Business Analysis</li>
      <li>Copywriting</li>
    </ul>
    <button class="button"><a href="mailto:cortinajenellecaldwell@gmail.com"><h3>Apply to Freelance</h3></a>
  </div>
</div>
`;
