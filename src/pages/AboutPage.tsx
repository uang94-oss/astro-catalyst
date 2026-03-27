import SEOHead from "@/components/SEOHead";

const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About - gratkapl.com"
        description="Tentang gratkapl.com — blog teknologi modern yang membahas AI, programming, web design, dan SEO."
        url="https://gratkapl.com/about"
      />
      <div className="duid-container py-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">Tentang Kami</h1>

        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
          <img
            src="https://ui-avatars.com/api/?name=Nagol+Dachi&size=128&background=6366f1&color=fff&bold=true"
            alt="Nagol Dachi"
            className="w-28 h-28 rounded-full object-cover border-4 border-primary/20"
          />
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-1">Nagol Dachi</h2>
            <p className="text-sm text-muted-foreground mb-3">Founder & Editor</p>
            <p className="text-muted-foreground leading-relaxed">
              Seorang tech enthusiast yang passionate tentang AI, web development, dan digital marketing. 
              Berpengalaman lebih dari 5 tahun dalam dunia programming dan content creation.
            </p>
          </div>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-muted-foreground">
          <h2 className="text-xl font-semibold text-foreground">Apa Itu gratkapl.com?</h2>
          <p>
            <strong className="text-foreground">gratkapl.com</strong> adalah blog teknologi modern yang berfokus pada pembahasan 
            seputar Artificial Intelligence, programming, web design, dan Search Engine Optimization (SEO).
          </p>
          <p>
            Kami percaya bahwa teknologi seharusnya bisa diakses dan dipahami oleh semua orang. Itulah mengapa 
            setiap artikel yang kami tulis dirancang agar mudah dipahami, praktis, dan bisa langsung diterapkan — 
            baik untuk pemula maupun profesional.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Misi Kami</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Menyajikan konten teknologi berkualitas tinggi dalam Bahasa Indonesia</li>
            <li>Membantu pembaca memahami tren AI dan dampaknya terhadap kehidupan sehari-hari</li>
            <li>Memberikan panduan praktis seputar programming dan web development</li>
            <li>Berbagi strategi SEO yang terbukti efektif untuk meningkatkan visibilitas online</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">Topik yang Kami Bahas</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">AI & Machine Learning</strong> — Panduan, tools, dan tren terbaru</li>
            <li><strong className="text-foreground">Programming</strong> — Tutorial coding, best practices, dan tips produktivitas</li>
            <li><strong className="text-foreground">Web Design</strong> — UI/UX, framework modern, dan inspirasi desain</li>
            <li><strong className="text-foreground">SEO</strong> — Strategi optimasi mesin pencari yang actionable</li>
            <li><strong className="text-foreground">Teknologi</strong> — Review gadget, software, dan inovasi terkini</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">Hubungi Kami</h2>
          <p>
            Punya pertanyaan, saran, atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami melalui 
            halaman <a href="/contact" className="text-primary hover:underline">Contact</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
