import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl p-6 mx-auto border-t-2 border-b-2 border-l-2 bg-gradient-texture rounded-2xl border-background sm:rounded-bl-2xl sm:rounded-tl-2xl sm:pb-14 sm:pl-16 sm:pr-20 sm:pt-12 lg:rounded-br-none lg:rounded-tr-none lg:p-12 xl:p-20"
    >
      <h1 className="mb-6 text-xl font-bold text-center font-varela text-foreground sm:text-4xl">
        ENTRE EM CONTATO
      </h1>
      <h2 className="mb-8 text-base text-center font-inter text-foreground sm:text-lg">
        Estamos prontos para ouvir você! Preencha o formulário e entraremos em
        contato o mais breve possível.
      </h2>

      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-varela text-foreground"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-background"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block mb-1 text-sm font-varela text-foreground"
          >
            Telefone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-background"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-varela text-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-background"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block mb-1 text-sm font-varela text-foreground"
          >
            Assunto
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-foreground focus:outline-none focus:ring-1 focus:ring-background"
          >
            <option value="">Selecione um assunto</option>
            <option value="planos-de-servico">Planos de serviço</option>
            <option value="servicos-avulsos">Serviços avulsos</option>
            <option value="suporte-tecnico">Suporte técnico</option>
            <option value="outros">Outros</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block mb-1 text-sm font-varela text-foreground"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-background"
        />
      </div>

      <div className="text-right">
        <Button type="submit" customClass="!bg-brand text-foreground w-full">
          <span>ENVIAR MENSAGEM</span>
        </Button>
      </div>
    </form>
  );
}
