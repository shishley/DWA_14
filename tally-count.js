import { LitElement } from "lit";

/**
 * @class TallyCount
 * @extends LitElement
 * @description web component displays tally count.
 */
class TallyCount extends LitElement {
  /**
   * current count.
   * @type {number}
*
  @property({ type: Number })
  */
  count = 0;

  /**
   * min value count can be.
   * @type {number}
   *  @property({ type: Number })
   */

  min = 0;

  /**
   * max value count can be.
   * @type {number}
   * @property({ type: Number })
   */

  max = 10;

  /**
   * current state of component.
   * @type {string}
   *   @property({ type: String })
   */

  state = "Normal";

  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Increment the count.
   */
  increment() {
    if (this.count < this.max) {
      this.count++;
    } else {
      this.state = "Maximum Reached";
    }
  }

  /**
   * Decrement the count.
   */
  decrement() {
    if (this.count > this.min) {
      this.count--;
    } else {
      this.state = "Minimum Reached";
    }
  }

  /**
   * Renders component's HTML.
   * @returns {string}
   */
  render() {
    return html`
      <div>
        <h1>Tally Count</h1>
        <p>Count: ${this.count}</p>
        <button @click="${this.increment}">Increment</button>
        <button @click="${this.decrement}">Decrement</button>
        <p>State: ${this.state}</p>
      </div>
    `;
  }
}

customElements.define("tally-count", TallyCount);

/*
LitElement class provides base class web component
properties property defines the properties of component.
constructor method initializes component's state.
increment and decrement methods increase/decrease the count
render method renders component's HTML.
customElements.define method registers the component with the browser.
component has three states: Normal,Minimum Reached, and Maximum Reached. 
The state is updated when the count is + or - displayed in component's HTML
*/
