import { h } from 'preact';
import "lazysizes";
import * as timeago from "timeago.js";

import {distanceInWordsToNow} from "date-fns";
import {} from "lodash-es";

const responsiveImage = require("./img/three.jpg?min=320,max=1400,steps=6");
const responsiveImage2 = require("./img/two.jpg?min=320,max=1400,steps=6");
const responsiveImage1 = require("./img/one.jpg?min=320,max=1400,steps=6");

export default () => (
  <main>
    <header>Header</header>

    <article>
      <h3 className="title">James peek-a-boo - I'm here...A title James. Hay yes you James!!!Hello, over here. Can you see it yet?</h3>
      <div>
The Great Gatsby by F. Scott Fitzgerald

"Every one suspects himself of at least one of the cardinal virtues, and this is mine: I am one of the few honest people that I have ever known."
      </div>

      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1880 1140'%3E%3C/svg%3E"
        data-srcset={responsiveImage.srcSet}
        class="lazyload"
        alt=""
      />
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1880 1140'%3E%3C/svg%3E"
        data-srcset={responsiveImage2.srcSet}
        class="lazyload"
        alt=""
      />
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1880 1140'%3E%3C/svg%3E"
        data-srcset={responsiveImage1.srcSet}
        class="lazyload"
        alt=""
      />
      <p>{timeago.format(1559044158103)}</p>
            <p>{distanceInWordsToNow(new Date(1559346669133))}</p>
            
    </article>

    <footer>Footer</footer>
  </main>
);
