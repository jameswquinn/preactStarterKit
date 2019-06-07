import { h, Component } from "preact";
import * as timeago from "timeago.js";
import lozad from 'lozad';

const responsiveImage = require("../../img/four.jpg?min=320,max=1400,steps=6");
const five = require("../../img/Cristina-Hoch-Photography.jpg?min=320,max=1400,steps=6");
export default class Home extends Component {
  componentDidMount() {
    lozad('.lazy', {
      loaded: function (el) {
        // Custom implementation on a loaded element
        el.classList.add('is-loaded');
      },
      loading: function (el) {
        // Custom implementation on a loaded element
        el.classList.remove('is-loading');
      },
      rootMargin: '10px 0px', // syntax similar to that of CSS Margin
      threshold: 0.1 // ratio of element convergence
    }).observe();
  }


  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

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
            className="lazy is-loading"
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
            className="lazy is-loading"
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
