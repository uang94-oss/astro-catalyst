import SEOHead from "@/components/SEOHead";

const DisclaimerPage = () => {
  return (
    <>
      <SEOHead
        title="Disclaimer - gratkapl.com"
        description="Disclaimer gratkapl.com. Informasi penting mengenai penggunaan konten dan tanggung jawab."
        url="https://gratkapl.com/disclaimer"
      />
      <div className="duid-container py-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">Disclaimer</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Informasi Umum</h2>
            <p>
              Seluruh informasi yang disajikan di <strong className="text-foreground">gratkapl.com</strong> disediakan 
              untuk tujuan edukasi dan informasi umum. Kami berusaha menyajikan konten yang akurat dan terkini, 
              namun tidak memberikan jaminan apapun — baik tersurat maupun tersirat — mengenai kelengkapan, 
              keakuratan, keandalan, atau ketersediaan informasi, produk, layanan, atau grafis terkait yang 
              terdapat di website ini.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Bukan Nasihat Profesional</h2>
            <p>
              Konten di website ini tidak dimaksudkan sebagai pengganti nasihat profesional. Sebelum mengambil 
              keputusan berdasarkan informasi yang disajikan, kami sangat menyarankan Anda untuk berkonsultasi 
              dengan profesional yang relevan di bidangnya.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Tautan Eksternal</h2>
            <p>
              Website ini mungkin mengandung tautan ke situs web eksternal yang tidak berada di bawah kendali kami. 
              Kami tidak memiliki kontrol atas konten, kebijakan privasi, atau praktik dari situs pihak ketiga mana pun. 
              Penyertaan tautan tidak selalu menyiratkan rekomendasi atau persetujuan dari pihak kami.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Afiliasi & Iklan</h2>
            <p>
              Beberapa konten di website ini mungkin mengandung tautan afiliasi. Artinya, kami dapat menerima komisi 
              jika Anda melakukan pembelian melalui tautan tersebut, tanpa biaya tambahan bagi Anda. Hal ini membantu 
              kami dalam membiayai operasional website dan terus menyajikan konten berkualitas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Batasan Tanggung Jawab</h2>
            <p>
              Dalam keadaan apapun, kami tidak bertanggung jawab atas kerugian atau kerusakan termasuk namun tidak 
              terbatas pada kerugian langsung, tidak langsung, insidental, konsekuensial, atau kerusakan apapun 
              yang timbul dari penggunaan atau ketidakmampuan menggunakan website ini.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Hak Cipta</h2>
            <p>
              Seluruh konten di website ini — termasuk teks, gambar, grafis, dan elemen visual lainnya — adalah 
              milik gratkapl.com kecuali dinyatakan lain. Dilarang menyalin, mendistribusikan, atau memproduksi 
              ulang konten tanpa izin tertulis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Perubahan</h2>
            <p>
              Kami berhak untuk mengubah disclaimer ini kapan saja tanpa pemberitahuan sebelumnya. Dengan terus 
              menggunakan website ini, Anda menyetujui dan terikat dengan versi terbaru dari disclaimer ini.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan mengenai disclaimer ini, silakan hubungi kami melalui 
              halaman <a href="/contact" className="text-primary hover:underline">Contact</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default DisclaimerPage;
