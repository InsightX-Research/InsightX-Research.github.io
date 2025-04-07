npm install react react-dom react-pageflip
import React from "react";
import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";
import { pages } from "./pages";
import "./BookViewer.css";

const BookViewer = () => {
  return (
    <div className="book-container">
      <h1 className="book-title">📖 My Book</h1>
      <HTMLFlipBook
        width={400}
        height={550}
        showCover={true}
        className="flipbook"
      >
        {pages.map((page, index) => (
          <div className="page" key={index}>
            <h2>{page.title}</h2>
            <p>{page.content}</p>
            <footer>Page {index + 1}</footer>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default BookViewer;
