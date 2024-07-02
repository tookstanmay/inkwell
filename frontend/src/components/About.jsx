import React from "react";
import "../index.css";

export const About = () => {
  return (
    <div className="about-inkwell">
      <h1 className="about-title">About Inkwell</h1>
      <p className="about-description">
        Inkwell is a user-friendly notetaking application designed to empower you to capture your thoughts, ideas, and inspirations with ease. Whether you're a student jotting down lecture notes, a writer crafting your next masterpiece, or simply someone looking to organize your daily tasks, Inkwell provides a simple and intuitive platform to keep your information streamlined.
      </p>

      <div className="about-key-features">
        <h2>Key Features</h2>
        <ul className="about-features-list">
          <li>Secure Sign-in: Ensures the privacy and security of your notes.</li>
          <li>Rich Text Editing: Format your notes with bold, italics, headings, and bullet points for clarity.</li>
          <li>Tagging: Organize your notes with descriptive tags for easy retrieval.</li>
          <li>Seamless Editing: Modify existing notes as your thoughts evolve.</li>
          <li>Effortless Deletion: Remove notes you no longer need.</li>
          {/* Add more features as needed */}
        </ul>
      </div>

      <div className="about-benefits">
        <h2>Benefits of Inkwell</h2>
        <ul className="about-benefits-list">
          <li>Increased Productivity: Streamline your notetaking workflow and stay organized.</li>
          <li>Enhanced Creativity: Foster new ideas by capturing your thoughts in a centralized location.</li>
          <li>Improved Information Retention: Organize and revisit your notes for effective knowledge retrieval.</li>
          <li>Accessible Anywhere: Access your notes from any device with an internet connection (assuming cloud storage).</li>
          <li>Peace of Mind: Secure sign-in ensures your notes are safe and private.</li>
          {/* Add more benefits as needed */}
        </ul>
      </div>

      <a href="/" className="about-cta">Get Started with Inkwell</a>
    </div>
  );
};
