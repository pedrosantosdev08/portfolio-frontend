import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./ContactMe.css";

export function ContactMe() {
  // 1. Tipamos o ref como HTMLFormElement e iniciamos com null
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!form.current) {
      return;
    }

    const SERVICE_ID = "service_tknbwop";
    const TEMPLATE_ID = "template_7ecj1my";
    const PUBLIC_KEY = "1dFAh2KzH6FB0Q4ru";

    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        alert("Mensagem enviada com sucesso! 🚀");
        form.current?.reset();
      })
      .catch((error) => {
        alert("Erro ao enviar mensagem.");
        console.error(error.text);
      });
  };

  return (
    <>
      <section id="contactme" className="contact-container">
        <div className="contact-title">
          <h2>Contact me</h2>
          <p>Entre em contato comigo</p>
        </div>

        <div className="card-form">
          
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="input-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="user_name" placeholder="Seu nome" required />
            </div>

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="user_email" placeholder="seu@email.com" required />
            </div>

            <div className="input-group full-width">
              <label htmlFor="subject">Assunto</label>
              <select id="subject" name="subject">
                <option value="freelance">Projeto Freelance</option>
                <option value="hiring">Oportunidade</option>
                <option value="other">Outros</option>
              </select>
            </div>

            <div className="input-group full-width">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows={5} placeholder="Sua mensagem..." required />
            </div>

            <button type="submit" className="btn-submit">Enviar Mensagem</button>
          </form>
        </div>
      </section>

      <footer className="footer-container">
        <div className="footer-logo">
          <FontAwesomeIcon icon={faCode} />
        </div>
        <ul className="footer-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contactme">Contact</a></li>
        </ul>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Pedro Santos</p>
      </footer>
    </>
  );
}