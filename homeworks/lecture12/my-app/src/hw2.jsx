import React from "react";
import "./hw2.css";

class HW2 extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Website Title</h1>
        </header>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <main>
          <aside>
            <h2>Sidebar</h2>
            <p>Sidebar info</p>
          </aside>

          <article>
            <h2>Main Article</h2>
            <p>This is the main content.</p>
            <section>
              <p>Section 1</p>
            </section>
          </article>
        </main>

        <footer>
          <p>&copy; 2024 Website Name. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default HW2;
