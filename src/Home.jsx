import Nullstack from "nullstack";
import Logo from "nullstack/logo";

import Counter from "./Counter";
import "./Home.css";

class Home extends Nullstack {
  prepare({ project, page, greeting }) {
    page.title = `${project.name} - ${greeting}`;
    page.description = `${project.name} was made with Nullstack`;
  }

  renderLink({ children, href }) {
    const link = `${href}?ref=create-nullstack-app`;
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  render({ project, greeting }) {
    const test = {
      name: "myButton",
    };
    return (
      <section>
        <button {...test} onclick={() => {}}>
          My button
        </button>
      </section>
    );
  }
}

export default Home;
