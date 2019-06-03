import { h, Component } from "preact";
import lazySizes from 'lazysizes';
// other imports ...

lazySizes.cfg.lazyClass = 'lazy';
lazySizes.cfg.loadingClass = 'is-loading';
lazySizes.cfg.loadedClass = 'is-loaded';
lazySizes.cfg.loadMode = 1;
lazySizes.cfg.throttleDelay = 100;
lazySizes.cfg.hFac = 10;
lazySizes.cfg.init = true;

import * as timeago from "timeago.js";
const responsiveImage = require("../../img/four.jpg?min=320,max=1400,steps=6");
const five = require("../../img/Cristina-Hoch-Photography.jpg?min=320,max=1400,steps=6");
export default class Home extends Component {
  render() {
    return (
      <main>
        <header><h1>Photography</h1></header>
        <section>
          <article>
            <h3 className="title">How to Take a Good Portrait Photo</h3>
            <div>
              Portraits are one of the most powerful kinds of photographs. A great portrait can last for decades, memorializing a person’s entire life, or just a single instant. The difference between a snapshot and a good portrait is more narrow than you’d think. It just requires a little bit of thought.
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
        </section>
        <section>
          <article>
            <h3 className="title">Interview: Biologist Discovers Intense Moments of Beauty Hidden in Small Details</h3>
            <div>
              Aspiring biologist Cristina Hoch has a love for the natural world that runs deep within her dark and emotive images. Be it the way light falls on a subject or the universe of freckles on a face, Cristina’s ability to pair small life moments with intense human emotion leaves you feeling a connection to the vulnerability of each subject. Her unique style of pairing strong shadows with bold contrast lends to a powerful experience for her audience.

We were grateful to catch a glimpse of Cristina’s process with a Behind The Lens look into her outdoor portrait photography!
            </div>
          </article>
          <img
            className="lazy"
            data-sizes="auto"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
            data-srcset={five.srcSet}
            alt=""
          />
          <p>{timeago.format(1559573610084)}</p>
        </section>

        <footer>Footer</footer>
      </main>
    );
  }
}
