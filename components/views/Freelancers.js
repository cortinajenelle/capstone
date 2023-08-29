import html from "html-literal";
import freelancerbanner from "../../assets/freelancerbanner.png";

export default state => html`
  <h1>FREELANCERS</h1>
  <br />
  <div class="column">
    <div id="left">
      <div id="savvybanner"><img src=${freelancerbanner} /></div>
    </div>
    <div id="middle"></div>
    <div id="right">
      <h2>LANDSCAPE - WHERE NATURE AND DESIGN MEET.</h2>
      <p>
        We don't often here about the worlds of design and nature colliding, yet
        for me, this has always been a natural occurence due to my work in both
        the tech, media + design sector and the agriculture, community, arts
        sector - separately. By working in both of these fields, I saw first
        hand how both had capacity to fill a gap the other had. So, when the
        opportunity came up for me to propose a capstone idea, it didn't take me
        too much time to decide to develop something that would connect nature
        and design. The vision of this web development application is to connect
        local farmers and digital freelancers to engage in a value exchange of
        goods and services. The big picture thinking is that both are service
        providers in a way, with a capacity to enhance the quality of life for
        everyone involved, or even adding to a sense of overall livelihood which
        is something that regardless of who you are and what you do for a living
        is a common need + shared desire The potential benefits of this
        application include time freedom, delegation of labor, access to healthy
        foods and online/offline network building. In this demo iteration, the
        web application profiles 10 local Chattanooga area farms and 5 mock
        freelancer profiles to showcase how a platform like this one could
        facilitate connections through the exchange of digital/design services
        and farmgoods. Hopefully, the result will be two-fold - impactful for
        farmers to meet a community engagement/outreach need that otherwise goes
        unmet as they focus time on the physical labor demands of the farm AND
        impactful for web developers to access healthy foods & farmgoods as
        opposed to reaching for the more convenient, fast food, which in turn
        negatively impacts their wellbeing, productivity and performance on the
        job. This capstone is just one example, but true evidence of how
        technology can and be used as a force for good - providing time freedom,
        visibility and connection to the things that we value most. Ultimately,
        there is a stronger, healthier community as a result.
      </p>
      <h2>FUTURE & FEATURE ENHANCEMENTS COULD LOOK LIKE:</h2>
      <ul>
        <li>
          Home Page - add a gif or animated text that trickles in as users land
          on the page to give effect of a live conversation coming in from Gaia
        </li>
        <li>
          Origins Page - add Font Awesome icons, hyperlinked to social media
          platforms or relevant links
        </li>
        <li>
          Farmers Page - host an interactive directory of farms with a search
          feature
        </li>
        <li>
          Farmers Listings - enhance to incl. overview of history, vision and
          mission; photo gallery; farmgoods details; hours; farm person with
          email + phone, etc
        </li>
        <li>
          Freelancers Page - host an interactive directory of freelancers with a
          search feature
        </li>
        <li>
          Freelancer Listings - enhance to incl. skill inventory; portfolio
          link; certifications; timebank for hours logged; contact info, etc
        </li>
        <li>
          Contact - links to download liability waivers, background check
          release, profile info sheet, etc.
        </li>
      </ul>
    </div>
  </div>
`;
