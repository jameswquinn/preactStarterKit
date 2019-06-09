import { h, Component } from "preact";
import * as timeago from "timeago.js";
import lozad from "lozad";

const cristina_hoch_fine_art_portraits_photos_12 = require("../../img/cristina_hoch_fine_art_portraits_photos_12.jpg?size=480");
const cristina_hoch_fine_art_portraits_photos_09 = require("../../img/cristina_hoch_fine_art_portraits_photos_09.jpg?size=480");
const cristina_hoch_fine_art_portraits_photos_07 = require("../../img/cristina_hoch_fine_art_portraits_photos_07.jpg?size=480");
const cristina_hoch_fine_art_portraits_photos_06 = require("../../img/cristina_hoch_fine_art_portraits_photos_06.jpg?size=480");

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

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <blockquote cite="https://www.goodreads.com/author/show/3565.Oscar_Wilde">
          <h1>
            <q>Be yourself; everyone else is already taken</q>
          </h1>
          <footer>
            <cite>Oscar Wilde</cite>
          </footer>
        </blockquote>
        <h2>{timeago.format(1559850556669)}</h2>
        <div class="scroll-snap-type">
          <span class="aspectRatioSizer set_aspect__ratio16x9">
            <span
              class="lazy bg_img"
              data-background-image={
                cristina_hoch_fine_art_portraits_photos_12.src
              }
            />
          </span>
          <span class="aspectRatioSizer set_aspect__ratio16x9">
            <span
              class="lazy bg_img"
              data-background-image={
                cristina_hoch_fine_art_portraits_photos_09.src
              }
            />
          </span>
          <span class=" aspectRatioSizer set_aspect__ratio16x9">
            <span
              class="lazy bg_img"
              data-background-image={
                cristina_hoch_fine_art_portraits_photos_07.src
              }
            />
          </span>
          <span class=" aspectRatioSizer set_aspect__ratio16x9">
            <span
              class="lazy bg_img"
              data-background-image={
                cristina_hoch_fine_art_portraits_photos_06.src
              }
            />
          </span>
        </div>
      </div>
    );
  }
}
