/*
Build a tabs component that displays one panel of content at a time depending on the active tab element. 
Some HTML is provided for you as example contents.

Requirements
  - Clicking on a tab makes it the active tab. Add a visual indication (e.g. using blue text color) for 
    the active tab to differentiate it from the non-active tabs.
  - At all times, only one panel's contents should be displayed — the one corresponding to the active tab's.
Notes
  - The focus of this question is on functionality, not the styling. 
    There's no need to write any custom CSS except for highlighting the active tab.
  - You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc) and use client-side rendering instead.
  - You may want to think about ways to improve the user experience of the application and 
    implement them (you get bonus credit for doing that during interviews).
*/

import React from "react";

export default function Tabs() {
    const [activeTab, setActiveTab] = React.useState(0);
    const tabs = ['HTML', 'CSS', 'JavaScript'];
    const contents = [
        `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.`,
        `Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.`,
        `JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.`
    ];
    return (
        <div>
            <div>
                {tabs.map((tab, index) => (
                    <button key={index} onClick={() => setActiveTab(index)} style={{color: activeTab === index ? 'blue' : 'black'}}>{tab}</button>
                ))}
            </div>
            <div>
                <p>{contents[activeTab]}</p>
            </div>
        </div>
    );
  return (
    <div>
      <div>
        <button>HTML</button>
        <button>CSS</button>
        <button>JavaScript</button>
      </div>
      <div>
        <p>
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </p>
        <p>
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </p>
        <p>
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </p>
      </div>
    </div>
  );
}
