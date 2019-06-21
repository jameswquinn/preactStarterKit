import { h, Component } from "preact";
import * as timeago from "timeago.js";
import lozad from "lozad";

const cristina_hoch_fine_art_portraits_photos_12 = require("../../img/cristina_hoch_fine_art_portraits_photos_12.jpg?min=320,max=1400,steps=6");
const cristina_hoch_fine_art_portraits_photos_09 = require("../../img/cristina_hoch_fine_art_portraits_photos_09.jpg?min=320,max=1400,steps=6");
const cristina_hoch_fine_art_portraits_photos_07 = require("../../img/cristina_hoch_fine_art_portraits_photos_07.jpg?min=320,max=1400,steps=6");
const cristina_hoch_fine_art_portraits_photos_06 = require("../../img/cristina_hoch_fine_art_portraits_photos_06.jpg?min=320,max=1400,steps=6");

export default class Terms extends Component {
  componentDidMount() {
    const observer = lozad(".lazy", {
      loaded: function(el) {
        // Custom implementation on a loaded element
        el.classList.add("is-loaded");
      },
      rootMargin: "10px 0px", // syntax similar to that of CSS Margin
      threshold: 0.4 // ratio of element convergence
    });
    observer.observe();
  }

  componentDidUpdate() {}

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="fade-in">
        <div className="vertical-rl red">{timeago.format(1560280680905)}</div>
        <div className="scroll-snap-type">
          <div className="aspectRatioSizer set_1x1">
            <img
              className="lazy"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              data-srcset={cristina_hoch_fine_art_portraits_photos_12.srcSet}
              alt=""
            />
          </div>
          <div className="aspectRatioSizer set_1x1">
            <img
              className="lazy"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              data-srcset={cristina_hoch_fine_art_portraits_photos_09.srcSet}
              alt=""
            />
          </div>
          <div className="aspectRatioSizer set_1x1">
            <img
              className="lazy"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              data-srcset={cristina_hoch_fine_art_portraits_photos_07.srcSet}
              alt=""
            />
          </div>
          <div className="aspectRatioSizer set_1x1">
            <img
              className="lazy"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              data-srcset={cristina_hoch_fine_art_portraits_photos_06.srcSet}
              alt=""
            />
          </div>
          <div className="aspectRatioSizer set_1x1">
            <span
              class="lazy"
              data-background-image={
                cristina_hoch_fine_art_portraits_photos_06.src
              }
            />
          </div>
        </div>
        <blockquote>
          <h1>
            <q>Be yourself; everyone else is already taken</q>
          </h1>
          <footer>
            <cite>Oscar Wilde</cite>
          </footer>
        </blockquote>
        <div className="spacer" />
      </div>
    );
  }
}
