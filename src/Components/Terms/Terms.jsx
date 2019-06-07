import { h, Component } from "preact";
import * as timeago from "timeago.js";
import lozad from 'lozad';

const cristina_hoch_fine_art_portraits_photos_12 = require("../../img/cristina_hoch_fine_art_portraits_photos_12.jpg?min=320,max=1400,steps=6");
const cristina_hoch_fine_art_portraits_photos_09 = require("../../img/cristina_hoch_fine_art_portraits_photos_09.jpg?min=320,max=1400,steps=6");
const cristina_hoch_fine_art_portraits_photos_07 = require("../../img/cristina_hoch_fine_art_portraits_photos_07.jpg?min=320,max=1400,steps=6");
const cristina_hoch_fine_art_portraits_photos_06 = require("../../img/cristina_hoch_fine_art_portraits_photos_06.jpg?min=320,max=1400,steps=6");





export default class Terms extends Component {

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
            <div>
                <h2>{timeago.format(1559850556669)}</h2>

                <div class="scroll-snap-type">

                    <img
                        className="lazy is-loading"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
                        data-srcset={cristina_hoch_fine_art_portraits_photos_12.srcSet}
                        alt=""
                    />
                    <img
                        className="lazy is-loading"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
                        data-srcset={cristina_hoch_fine_art_portraits_photos_09.srcSet}
                        alt=""
                    />
                    <img
                        className="lazy is-loading"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
                        data-srcset={cristina_hoch_fine_art_portraits_photos_07.srcSet}
                        alt=""
                    />
                    <img
                        className="lazy is-loading"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
                        data-srcset={cristina_hoch_fine_art_portraits_photos_06.srcSet}
                        alt=""
                    />
                </div>
            </div>
        );
    }
}
