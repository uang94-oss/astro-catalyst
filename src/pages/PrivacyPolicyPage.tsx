import SEOHead from "@/components/SEOHead";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy - gratkapl.com"
        description="Kebijakan privasi gratkapl.com. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda."
        canonical="https://gratkapl.com/privacy-policy"
      />
      <div className="duid-container py-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">Kebijakan Privasi</h1>
        <p className="text-sm text-muted-foreground mb-8">Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Informasi yang Kami Kumpulkan</h2>
            <p>Saat Anda mengunjungi <strong className="text-foreground">gratkapl.com</strong>, kami dapat mengumpulkan informasi berikut:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Informasi yang Anda berikan secara sukarela melalui formulir kontak (nama, email, pesan)</li>
              <li>Data penggunaan otomatis seperti alamat IP, jenis browser, halaman yang dikunjungi, dan durasi kunjungan</li>
              <li>Cookies dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Penggunaan Informasi</h2>
            <p>Informasi yang dikumpulkan digunakan untuk:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Menyediakan dan memelihara layanan website</li>
              <li>Merespons pertanyaan dan permintaan melalui formulir kontak</li>
              <li>Menganalisis tren penggunaan untuk meningkatkan konten dan pengalaman pengguna</li>
              <li>Menampilkan iklan yang relevan melalui layanan pihak ketiga</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Cookies</h2>
            <p>
              Website ini menggunakan cookies untuk menyimpan preferensi pengguna dan menganalisis trafik. 
              Anda dapat mengatur browser Anda untuk menolak cookies, namun beberapa fitur website mungkin tidak berfungsi optimal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Google AdSense & Analytics</h2>
            <p>
              Kami menggunakan Google AdSense untuk menampilkan iklan dan Google Analytics untuk menganalisis trafik website. 
              Layanan ini mungkin menggunakan cookies dan web beacons untuk mengumpulkan data tentang aktivitas browsing Anda. 
              Untuk informasi lebih lanjut, silakan kunjungi{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Kebijakan Privasi Google
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Tautan ke Situs Lain</h2>
            <p>
              Website kami mungkin mengandung tautan ke situs eksternal. Kami tidak bertanggung jawab atas praktik 
              privasi atau konten dari situs-situs tersebut.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Keamanan Data</h2>
            <p>
              Kami berkomitmen untuk melindungi informasi Anda. Meskipun tidak ada metode transmisi internet yang 
              100% aman, kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data pribadi Anda.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Hak Pengguna</h2>
            <p>Anda memiliki hak untuk:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
              <li>Meminta penghapusan data pribadi Anda</li>
              <li>Menolak penggunaan data untuk tujuan pemasaran</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Perubahan Kebijakan</h2>
            <p>
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan dipublikasikan 
              di halaman ini dengan tanggal pembaruan terbaru.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui 
              halaman <a href="/contact" className="text-primary hover:underline">Contact</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
