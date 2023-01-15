import AbstractView from '../components/AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Upload');
  }

  async getHtml() {
    return `
      <h1>Posts</h1>
      <p>You're viewing the Settings!</p>
    `;
  }
}
