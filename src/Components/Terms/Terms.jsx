import { h, Component } from "preact";
import lazySizes from "lazysizes";
import * as timeago from "timeago.js";
<<<<<<< HEAD
import lozad from "lozad";
=======


const cristina_hoch_fine_art_portraits_photos_12 = require("../../img/cristina_hoch_fine_art_portraits_photos_12.jpg?min=320,max=1400,steps=6");
const cristina_hoch_fine_art_portraits_photos_09 = require("../../img/cristina_hoch_fine_art_portraits_photos_09.jpg?min=320,max=1400,steps=6");
const cristina_hoch_fine_art_portraits_photos_07 = require("../../img/cristina_hoch_fine_art_portraits_photos_07.jpg?min=320,max=1400,steps=6");
const cristina_hoch_fine_art_portraits_photos_06 = require("../../img/cristina_hoch_fine_art_portraits_photos_06.jpg?min=320,max=1400,steps=6");


lazySizes.cfg.lazyClass = "lazy";
lazySizes.cfg.loadingClass = "is-loading";
lazySizes.cfg.loadedClass = "is-loaded";
lazySizes.cfg.loadMode = 1;
lazySizes.cfg.throttleDelay = 100;
lazySizes.cfg.hFac = 10;
lazySizes.cfg.init = true;
>>>>>>> parent of d4ccec4... update

const cristina_hoch_fine_art_portraits_photos_12 = require("../../img/cristina_hoch_fine_art_portraits_photos_12.jpg?size=480");
const cristina_hoch_fine_art_portraits_photos_09 = require("../../img/cristina_hoch_fine_art_portraits_photos_09.jpg?size=480");
const cristina_hoch_fine_art_portraits_photos_07 = require("../../img/cristina_hoch_fine_art_portraits_photos_07.jpg?size=480");
const cristina_hoch_fine_art_portraits_photos_06 = require("../../img/cristina_hoch_fine_art_portraits_photos_06.jpg?size=480");

export default class Terms extends Component {
<<<<<<< HEAD
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
=======
    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h2>{timeago.format(1559850556669)}</h2>
>>>>>>> parent of d4ccec4... update

  componentWillUnmount() {}

<<<<<<< HEAD
  render() {
    return (
      <div>
        <div className="vertical-rl red">{timeago.format(1559850556669)}</div>
        <div class="scroll-snap-type">
          <span class="aspectRatioSizer set_aspect__ratio">
            <span
              class="lazy bg_img"
              data-background-image={
                cristina_hoch_fine_art_portraits_photos_12.src
              }
            />
          </span>
          <span class="aspectRatioSizer set_aspect__ratio">
            <span
              class="lazy bg_img"
              data-background-image={
                cristina_hoch_fine_art_portraits_photos_09.src
              }
            />
          </span>
          <span class=" aspectRatioSizer set_aspect__ratio">
            <span
              class="lazy bg_img"
              data-background-image={
                cristina_hoch_fine_art_portraits_photos_07.src
              }
            />
          </span>
          <span class=" aspectRatioSizer set_aspect__ratio">
            <span
              class="lazy bg_img"
              data-background-image={
                cristina_hoch_fine_art_portraits_photos_06.src
              }
            />
          </span>
        </div>
        <blockquote cite="https://www.goodreads.com/author/show/3565.Oscar_Wilde">
          <h1>
            <q>Be yourself; everyone else is already taken</q>
          </h1>
          <footer>
            <cite>Oscar Wilde</cite>
          </footer>
        </blockquote>
      </div>
    );
  }
=======
                    <img
                        className="lazy"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
                        data-srcset={cristina_hoch_fine_art_portraits_photos_12.srcSet}
                        alt=""
                    />
                    <img
                        className="lazy"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
                        data-srcset={cristina_hoch_fine_art_portraits_photos_09.srcSet}
                        alt=""
                    />
                    <img
                        className="lazy"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
                        data-srcset={cristina_hoch_fine_art_portraits_photos_07.srcSet}
                        alt=""
                    />
                    <img
                        className="lazy"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
                        data-srcset={cristina_hoch_fine_art_portraits_photos_06.srcSet}
                        alt=""
                    />
                </div>
            </div>
        );
    }
>>>>>>> parent of d4ccec4... update
}
