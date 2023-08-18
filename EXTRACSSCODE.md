<!-- THIS IS CSS FROM THE SPA FORMATTING FOR THE MAIN HOMEPAGE ENVIRONMENT -->

  #jumbotron {
    background: url(assets/img/photo-1528334713982-2d1fe11a157a.jpg) center center no-repeat;  background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }

  #jumbotron > h2 {
    color: white;
    text-align: center;
  }

  #jumbotron > a {
    text-decoration: none;
    background-color: white;
    font-size: 1.5em;
    padding: 1.5rem;
    border-radius: 10px;
  }

    form {
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem;
  }

  form > * {
    margin: 0.5rem;
  }

  form > input[type="submit"] {
    width: 40%;
    margin: 0.5rem;
    margin-right: auto;
  }

    #pizzas {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    height: auto;
    width: 92.5%;
    margin: auto;
  }

  #pizzas tbody {
    width: 100%;
  }

  #pizzas th {
    text-align: left;
  }

  #pizzas td,th {
    width: 25%;
  }

 #bio {
      margin-right: 3rem;
    }

    #bio img {
      float: left;
      width: 25%;
      height: auto;
      margin-right: 1rem;
    }


        form {
        border: solid 1px black;
        display: flex;
        flex-direction: column;
        margin: 1rem 1rem;
      }

      form > * {
        margin: 0.5rem;
      }

      form > input[type="submit"] {
        width: 40%;
        margin: 0.5rem;
        margin-right: auto;
      }


  body {
  background-color: white;
  color: black;
}

.nav-bar {
  border-top: solid 1px #287429;
  background-color: black;
  padding: 1em;
  color: #A3E7AE;
  font-size: 1.2em;
  font-weight: 600;
}

footer {
  padding: .5em;
  border-top: solid 1px #287429;
  background-color: black;
  color: #A3E7AE;
  margin: 1rem 1rem;

  <!-- this is peer code as a reference -->

  @import url('https://fonts.googleapis.com/css2?family=Sansita:ital@0;1&display=swap');

/* :root {
    --color-primary: #00ccff;
  } */

* {
    border: 1px dashed black;
    font-family: 'Sansita', sans-serif;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
}

header, footer{
    background-color: #14110f;
    font-family: 'Sansita', sans-serif;
}

footer{
    color: #a4c2a5;
    padding-left: 43%;
}

body{
    background-color: #d8dad3;
}

#container{
    padding: 5%;
}

.hidden{
    display: none !important;
}

.nav-ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin: 10px;
    padding: 10px 8px;
}

.nav-ul li{
    list-style: none;
    background-color:#a4c2a5;
    font-family: 'Roboto-slab', sans-serif;
    padding: 1%;
    border-radius: 15%;
}

.nav-ul li:first-child{
    padding: 0%;
}

.nav-ul li:hover{
    background-color:#cbddcb;
}

.nav-logo, img{
    width: 100%;
    margin: 0px;
    padding: 0px;
}

.nav-li{
    width: 12%;
}
.nav-ul a{;
    list-style: none;
    text-decoration: none;
    color: #14110f;
    font-family: 'Roboto-slab', sans-serif;
}

.search-div{
    display: inline-fleX;
}

.nav-search, .search-button{
    font-family: 'Roboto-slab', sans-serif;
    margin: 0px;
    padding: 0px;
}

.nav-search, .search-button, .search-field{
    /* display: inline-block; */
}
.search-field{
    font-family: 'Roboto-slab', sans-serif;
    margin-right: 0px;
}

.search-button{
    margin: 0px;
    background-color:#a4c2a5;
}

.search-button:hover{
    cursor: pointer;
    background-color:#cbddcb;
}

/*Game Grid classes*/
.grid-games-section{
    margin-bottom: 1%;
}

.grid-games{
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    padding: 1%;
}

.grid-image{
    margin: 0%;
    padding: 0%;
    grid-gap: 10%;
    object-fit: cover;
}

/*Game Flex  Classes*/
.game-section{
    /* max-width: 90%; */
}

.game-section-header{
    padding: 2px;
    color:  #387780;
}

.game-section-list {
 --game-list-gap: 1em;
 display: flex;
 align-items: flex-start;
 flex-wrap: wrap;
 gap: var(--game-list-gap);
}

.game-section-list a{
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    aspect-ratio: 16/9;
    width: calc(20% - var(--game-list-gap));
}

/*About Us Classes*/
#about-us-h1{
    text-align: center;
    color:  #387780;
}

#mission-statement{
    text-align: center;
}

#text-organizer{
    display: flex;
    margin-top: 1%;
    justify-content: center;
    text-align: center;
}

.au-buttons{
    display: flex;
    justify-content: center;
    text-align: center;
    margin:  0%;
    padding: 1%;
}

.au-buttons button{
    border-style: none;
    margin: 1%;
    padding: 1%;
    min-width: 5%;
    border-radius: 20%;
    background-color:#a4c2a5;
}

.au-buttons button:hover{
    cursor: pointer;
    background-color:#cbddcb;
}

#text-organizer h2{
    color:  #387780;
}

#text-organizer div{
    max-width: 50%;
    padding: .5%;
}

#text-organizer p{
    padding: .7%;
}

#aus-paragraph{
    --au-paragraph-display: none;
   display: var(--au-paragraph-display);
}

#aue-paragraph{
    --au-paragraph-display: none;
    display: var(--au-paragraph-display);
}

/*Contact Us Classes*/
#form-format{
    /*not needed yet*/
}

.form-field{
    display: block;
    margin: 2%;
}

.textarea-above{
    vertical-align: top;
}

#contact-input-section{
    display: flex;
    flex-direction: column;
}

#contact-button{
    margin: 1%;
}

@media (max-width: 549px){
    .hidden--mobile {
      display: none !important;
    }

    nav {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    nav > i {
        padding: 1%;
        font-size:2em;
    }

    nav > ul {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0 0;
    }

    .nav-ul li:first-child{
        display: none;
    }
}

@media (min-width: 550px){
    nav > .fa-bars {
        display: none;
      }
}

      <div id="logo" /div> <img src="${logo}"/>

      <div class="logo">landScape</div>
  </div>
