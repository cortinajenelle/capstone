import html from "html-literal";
import biopic from "../../assets/savvycoderscapstonebioimg.png";
import savvybanner from "../../assets/SavvyCodersFullStack.jpg";

export default () => html`
  <div id="fas fa-bars"></div>
  <h1>ORIGINS</h1>
  <br />
  <section id="about">
    <p>
      According to recent surveys of young farmers by the American Farmlands
      Trust, 35% of young farmers name the cost of production as greater than
      the price received for the products.. In that same survey, it was reported
      that 41% of young farmers name finding access to capital to grow their
      business as very or extremely challenging. With this web application,
      features become available to farmers who may have otherwise been invisible
      to the greater community while also attracting quality talent through a
      built-in bartering system. In this case, the freelancer is supporting a
      local farm; improving health and overall quality of life by consuming
      locally grown foods and produce; and community is fostered through a
      shared mission to protect and preserve natural resources. This is a way
      technology can help do that.
    </p>
    <p>
      In my life, the worlds of nature and technology collide, often. For my
      capstone project, I am building a web app that supports farmers meet their
      creative, development and digital needs by hosting an exchange network
      that connects them to digital freelancers with time to offer in exchange
      for CSA, reduced venue rental or other products/services already offered
      at the farm. the idea is to connect two end users - farmers and
      freelancers - who are traditionally not connected, but in order to turn
      the tide on environmental restoration perhaps should be. even with very
      different skill sets, each end user is getting a need met and putting
      action behind their concern for the environment or building healthy
      communities.
    </p>
    <p>This web application aims to address several real-world, sustainability issues: </p>
    <ul>
      <li>connects farmers with high quality, digital talent they may not otherwise have access to for
      non-physical, creative labor (i.e. web design, marketing, SEO, upgrades);</li>
      <li>connects freelancers to their local farmers in an authentic way, which can
      foster a sense of place, belonging and community;</li>
      <li>provides farmers with needed services while removing financial barriers to access;</li>
      <li>creates a wellspring of other paid and service opportunities for the freelancer with
      others who are also connected to the farm, leading to more business and
      clients;</li>
      <li>provides freelancer with locally grown, organic foods that could
      improve wellbeing;</li>
      <li>promotes the farm to greater visibility, which will
      help with long-term sustainability; and </li>
      <li>creates a tipping point for farms to
      leverage support to secure future funding/grants</li>
    </p>
  </section>
  <div id="bio">
    <div id="bioimg">
      <img src=${biopic}/>
    </div>
    <div id="bioparapgraph">
    <p>
      <div id="biotext"><b>Web Application Developed by</b>: <em>Cortina Jenelle Caldwell, UX Designer</em>
    </p>
    <p><a href=https://github.com/cortinajenelle>GitHub</a> |
      <a href=https://www.linkedin.com/in/cortina-jenelle-caldwell>LinkedIN</a> |
      <a href=https://www.behance.net/itscortinajenelle>Behance</a> |
      <a href= https://contra.com/cortinajenelle>Contra</a> |
      <a href=https://www.cortinajenelle.com/equity>Equity in Tech</a>

    </p>
    <p><em>Available for web development opportunities, projects & teams!</em></p>
</div>
    </div>
  </div>
  <div id="savvybanner"><img src=${savvybanner}/><a href="https://www.savvycoders.com"></a>
  </div>
`;
