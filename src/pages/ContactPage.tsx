import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  return (
    <>
      <SEOHead
        title="Contact - gratkapl.com"
        description="Hubungi kami untuk pertanyaan, saran, atau kerjasama. Tim gratkapl.com siap membantu."
        url="https://gratkapl.com/contact"
      />
      <div className="duid-container py-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2">Hubungi Kami</h1>
        <p className="text-muted-foreground mb-8">
          Ada pertanyaan atau ingin berkolaborasi? Isi form di bawah dan kami akan segera merespons.
        </p>

        {submitted ? (
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center">
            <div className="text-4xl mb-3">✅</div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Pesan Terkirim!</h2>
            <p className="text-muted-foreground">
              Terima kasih sudah menghubungi kami. Kami akan membalas sesegera mungkin.
            </p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={100}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                placeholder="Nama lengkap"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={255}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                placeholder="email@contoh.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                maxLength={200}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors"
                placeholder="Topik pesan"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={2000}
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-colors resize-none"
                placeholder="Tulis pesan kamu di sini..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Kirim Pesan
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ContactPage;
