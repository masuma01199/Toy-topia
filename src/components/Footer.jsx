import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-900 p-6 mt-8">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">ToyTopia</span> — 
          <a href="#terms" className="link link-hover ml-1">Terms</a> ·
          <a href="#privacy" className="link link-hover ml-1">Privacy</a> ·
          <a href="#contact" className="link link-hover ml-1">Contact</a>
        </p>
      </div>
    </footer>
  );
}