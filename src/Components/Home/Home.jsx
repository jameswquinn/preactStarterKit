import { h, Component } from "preact";

import * as timeago from "timeago.js";
import lozad from "lozad";

const responsiveImage = require("../../img/four.jpg?min=320,max=1400,steps=6");
const five = require("../../img/Cristina-Hoch-Photography.jpg?min=320,max=1400,steps=6");

export default class Home extends Component {
  componentDidMount() {
    lozad(".lazy", {
      loaded: function(el) {
        // Custom implementation on a loaded element
        el.classList.add("is-loaded");
      },
      rootMargin: "10px 0px", // syntax similar to that of CSS Margin
      threshold: 0.4 // ratio of element convergence
    }).observe();
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="fade-in">
        <img
          className="lazy"
          data-sizes="auto"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
          data-srcset={responsiveImage.srcSet}
          alt=""
        />
        <main class="container">
          <h1>Hold on to your butts</h1>
          <p>
            The path of the righteous man is beset on all sides by the
            iniquities of the selfish and the tyranny of evil men. Blessed
            is he who, in the name of charity and good will, shepherds the
            weak through the valley of darkness, for he is truly his
            brother's keeper and the finder of lost children. And I will
            strike down upon thee with great vengeance and furious anger
            those who would attempt to poison and destroy My brothers. And
            you will know My name is the Lord when I lay My vengeance upon
            thee.{" "}
          </p>

          <h1>No man, I don't eat pork</h1>
          <p>
            Well, the way they make shows is, they make one show. That
            show's called a pilot. Then they show that show to the people
            who make shows, and on the strength of that one show they decide
            if they're going to make more shows. Some pilots get picked and
            become television programs. Some don't, become nothing. She
            starred in one of the ones that became nothing.{" "}
          </p>

          <h1>Are you ready for the truth?</h1>
          <p>
            Now that there is the Tec-9, a crappy spray gun from South
            Miami. This gun is advertised as the most popular gun in
            American crime. Do you believe that shit? It actually says that
            in the little book that comes with it: the most popular gun in
            American crime. Like they're actually proud of that shit.{" "}
          </p>

          <h1>I gotta piss</h1>
          <p>
            Look, just because I don't be givin' no man a foot massage don't
            make it right for Marsellus to throw Antwone into a glass
            motherfuckin' house, fuckin' up the way the nigger talks.
            Motherfucker do that shit to me, he better paralyze my ass,
            'cause I'll kill the motherfucker, know what I'm sayin'?{" "}
          </p>

          <h1>I can do that</h1>
          <p>
            Do you see any Teletubbies in here? Do you see a slender plastic
            tag clipped to my shirt with my name printed on it? Do you see a
            little Asian child with a blank expression on his face sitting
            outside on a mechanical helicopter that shakes when you put
            quarters in it? No? Well, that's what you see at a toy store.
            And you must think you're in a toy store, because you're here
            shopping for an infant named Jeb.{" "}
          </p>
        </main>
        <section className="container">
          <article>
            <h1>Photography</h1>
            <h3>How to Take a Good Portrait Photo</h3>
            <div>
              Portraits are one of the most powerful kinds of photographs. A
              great portrait can last for decades, memorializing a person’s
              entire life, or just a single instant. The difference between
              a snapshot and a good portrait is more narrow than you’d
              think. It just requires a little bit of thought.
            </div>
          </article>
          <img
            className="lazy"
            data-sizes="auto"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
            data-srcset={responsiveImage.srcSet}
            alt=""
          />
          <p>{timeago.format(1559572217016)}</p>
          <article>
            <h3 className="title">
              Interview: Biologist Discovers Intense Moments of Beauty
              Hidden in Small Details
            </h3>
            <div>
              Aspiring biologist Cristina Hoch has a love for the natural
              world that runs deep within her dark and emotive images. Be it
              the way light falls on a subject or the universe of freckles
              on a face, Cristina’s ability to pair small life moments with
              intense human emotion leaves you feeling a connection to the
              vulnerability of each subject. Her unique style of pairing
              strong shadows with bold contrast lends to a powerful
              experience for her audience. We were grateful to catch a
              glimpse of Cristina’s process with a Behind The Lens look into
              her outdoor portrait photography!
            </div>
          </article>
          <img
            className="lazy"
            data-sizes="auto"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
            data-srcset={five.srcSet}
            alt=""
          />
          <p>{timeago.format(1560105136789)}</p>
        </section>

        <footer>Footer</footer>
      </div>
    );
  }
}
