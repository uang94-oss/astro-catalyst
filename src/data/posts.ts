export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  aiOverview: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  image: string;
  readTime: number;
  featured?: boolean;
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "cara-membuat-laporan-keuangan-pribadi-dengan-ai",
    title: "Cara Membuat Laporan Keuangan Pribadi dengan AI",
    excerpt: "Pelajari bagaimana teknologi AI dapat membantu kamu mengelola dan membuat laporan keuangan pribadi secara otomatis dan efisien.",
    aiOverview: "Mengelola keuangan pribadi sering terasa rumit, apalagi jika semuanya masih manual. Dengan bantuan AI, proses pencatatan dan analisis bisa jadi jauh lebih cepat dan rapi tanpa harus paham akuntansi secara mendalam.",
    content: `Mengelola keuangan pribadi sering kali terasa rumit, terutama jika kamu tidak memiliki latar belakang akuntansi. Namun, dengan kemajuan teknologi AI, kini membuat laporan keuangan pribadi menjadi jauh lebih mudah.

Dalam panduan ini, kita akan membahas langkah-langkah praktis untuk memanfaatkan tools AI dalam pencatatan dan perencanaan keuangan kamu sehari-hari.

## Mengapa Laporan Keuangan Pribadi Itu Penting?

Laporan keuangan pribadi memberikan gambaran jelas tentang kondisi finansial kamu. Dengan memahami arus masuk dan keluar uang, kamu bisa membuat keputusan yang lebih cerdas tentang pengeluaran dan investasi.

Beberapa manfaat utama memiliki laporan keuangan yang rapi antara lain kemampuan melacak pengeluaran, merencanakan tabungan, dan mengidentifikasi area di mana kamu bisa menghemat lebih banyak.

## Tools AI untuk Manajemen Keuangan

Ada banyak tools berbasis AI yang bisa membantu kamu dalam mengelola keuangan. Beberapa di antaranya menawarkan fitur kategorisasi otomatis, prediksi pengeluaran, hingga rekomendasi investasi.

Penggunaan teknologi machine learning memungkinkan aplikasi ini belajar dari pola pengeluaran kamu dan memberikan insight yang personal dan akurat.

## Langkah-Langkah Membuat Laporan

Pertama, kumpulkan semua data transaksi kamu selama satu bulan. Kemudian, masukkan data tersebut ke dalam tools AI pilihan kamu. Biarkan AI mengkategorikan setiap transaksi secara otomatis.

Setelah kategorisasi selesai, kamu akan mendapatkan visualisasi yang jelas tentang ke mana uang kamu pergi setiap bulannya.

## Tips Optimasi

Untuk hasil terbaik, pastikan kamu konsisten dalam mencatat setiap transaksi. Gunakan notifikasi otomatis agar tidak ada pengeluaran yang terlewat.

## FAQ

**Apakah tools AI untuk keuangan aman?**
Ya, sebagian besar tools AI keuangan modern menggunakan enkripsi tingkat bank untuk melindungi data pengguna.

**Berapa biaya menggunakan tools AI keuangan?**
Banyak tools yang menawarkan versi gratis dengan fitur dasar. Untuk fitur premium, biaya bulanan biasanya mulai dari Rp50.000 hingga Rp200.000.`,
    category: "Keuangan",
    tags: ["AI", "Keuangan Pribadi", "Laporan Keuangan", "Teknologi"],
    author: "Nagol Dachi",
    date: "2026-03-25",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    slug: "strategi-seo-2026-panduan-lengkap",
    title: "Strategi SEO 2026: Panduan Lengkap untuk Pemula",
    excerpt: "Panduan komprehensif tentang strategi SEO terbaru yang efektif di tahun 2026, termasuk optimasi untuk AI Overview dan Google Discover.",
    aiOverview: "Dunia SEO berubah drastis setiap tahun, dan 2026 bukan pengecualian. Kalau masih pakai cara lama, besar kemungkinan website kamu malah tenggelam di halaman belakang Google.",
    content: `SEO terus berkembang dan di tahun 2026, ada banyak perubahan signifikan yang perlu kamu ketahui. Google semakin canggih dalam memahami konten, dan strategi lama mungkin sudah tidak efektif lagi.

Artikel ini akan membahas secara mendalam tentang teknik SEO modern yang bisa meningkatkan visibilitas website kamu di mesin pencari.

## Perubahan Algoritma Google 2026

Google telah memperbarui algoritmanya untuk lebih memahami konteks dan intensi pencarian pengguna. Ini berarti konten yang benar-benar menjawab pertanyaan pengguna akan mendapat peringkat lebih tinggi.

Fokus utama Google sekarang adalah pada kualitas konten, pengalaman pengguna, dan otoritas topikal dari sebuah website.

## Optimasi untuk AI Overview

AI Overview adalah fitur baru Google yang menampilkan ringkasan konten menggunakan AI. Untuk muncul di AI Overview, pastikan konten kamu terstruktur dengan baik dan menjawab pertanyaan secara langsung.

Gunakan format FAQ, daftar langkah, dan definisi yang jelas agar AI Google bisa dengan mudah mengekstrak informasi dari konten kamu.

## Technical SEO yang Wajib

Kecepatan loading, mobile-friendliness, dan struktur data terstruktur tetap menjadi fondasi penting. Pastikan website kamu memiliki Core Web Vitals yang baik.

Implementasikan schema markup seperti Article, FAQ, dan Breadcrumb untuk membantu Google memahami konten kamu dengan lebih baik.

## Content Strategy

Buat konten yang mendalam dan komprehensif. Google menyukai konten yang menjadi referensi utama dalam topik tertentu. Bangun topical authority dengan membuat cluster konten yang saling terhubung.

## FAQ

**Apakah SEO masih relevan di 2026?**
Sangat relevan. Meskipun cara orang mencari informasi berubah, optimasi untuk mesin pencari tetap krusial untuk visibilitas online.

**Berapa lama untuk melihat hasil SEO?**
Biasanya 3-6 bulan untuk melihat hasil signifikan, tergantung kompetisi dan kualitas konten.`,
    category: "SEO",
    tags: ["SEO", "Google", "AI Overview", "Digital Marketing"],
    author: "Nagol Dachi",
    date: "2026-03-22",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    readTime: 10,
    featured: true,
  },
  {
    id: "3",
    slug: "panduan-lengkap-ai-untuk-content-creator",
    title: "Panduan Lengkap AI untuk Content Creator",
    excerpt: "Bagaimana content creator bisa memanfaatkan AI untuk meningkatkan produktivitas dan kualitas konten tanpa kehilangan sentuhan personal.",
    aiOverview: "Content creator yang masih kerja sendirian tanpa bantuan AI mungkin ketinggalan. Sekarang, AI bisa bantu dari riset ide sampai editing — yang penting tahu cara pakainya biar tetap terasa personal.",
    content: `AI telah mengubah cara content creator bekerja. Dari pembuatan ide, penulisan draft, hingga editing, AI bisa membantu di setiap tahap proses kreatif.

Namun, penting untuk memahami cara menggunakan AI secara bijak agar konten yang dihasilkan tetap autentik dan bernilai.

## AI sebagai Asisten Kreatif

AI bukanlah pengganti kreativitas manusia, melainkan alat yang bisa mempercepat proses kreatif. Gunakan AI untuk brainstorming ide, riset topik, dan membuat outline konten.

Pastikan kamu selalu menambahkan perspektif dan pengalaman personal ke dalam konten yang dihasilkan AI.

## Tools AI untuk Content Creation

Ada berbagai tools AI yang dirancang khusus untuk content creator. Mulai dari tools penulisan, desain grafis, hingga editing video, semuanya kini memiliki fitur AI.

Yang terpenting adalah memilih tools yang sesuai dengan kebutuhan dan workflow kamu.

## Etika Penggunaan AI

Transparansi adalah kunci. Jika kamu menggunakan AI dalam proses pembuatan konten, pastikan untuk tetap menjaga kualitas dan akurasi informasi.

## FAQ

**Apakah konten AI bisa terdeteksi Google?**
Google tidak menghukum konten AI selama kontennya berkualitas dan memberikan nilai bagi pembaca.

**Tools AI apa yang paling direkomendasikan?**
Tergantung kebutuhan, tapi ChatGPT, Claude, dan Midjourney adalah beberapa yang populer.`,
    category: "AI",
    tags: ["AI", "Content Creator", "Produktivitas", "Tools"],
    author: "Nagol Dachi",
    date: "2026-03-20",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    readTime: 7,
    featured: false,
  },
  {
    id: "4",
    slug: "cara-memulai-blog-yang-menghasilkan-uang",
    title: "Cara Memulai Blog yang Menghasilkan Uang di 2026",
    excerpt: "Panduan step-by-step untuk memulai blog yang tidak hanya menarik pembaca, tapi juga bisa menghasilkan pendapatan pasif yang konsisten.",
    aiOverview: "Ngeblog masih cuan di 2026? Jawabannya iya — asal tahu caranya. Banyak blogger baru yang gagal bukan karena kontennya jelek, tapi karena strateginya nggak tepat dari awal.",
    content: `Memulai blog di tahun 2026 masih menjadi salah satu cara terbaik untuk membangun personal brand dan menghasilkan pendapatan online. Dengan strategi yang tepat, blog bisa menjadi sumber penghasilan yang signifikan.

Dalam artikel ini, kita akan membahas cara memulai dari nol hingga blog kamu menghasilkan uang pertama.

## Memilih Niche yang Tepat

Langkah pertama dan paling krusial adalah memilih niche blog. Pilih topik yang kamu kuasai dan memiliki demand pasar yang cukup. Riset keyword untuk memastikan ada orang yang mencari topik tersebut.

Beberapa niche yang potensial di 2026 antara lain personal finance, teknologi AI, kesehatan digital, dan sustainable living.

## Platform dan Setup Teknis

Pilih platform blogging yang sesuai dengan kebutuhan kamu. WordPress masih menjadi pilihan populer, tapi ada juga opsi modern seperti static site generator yang lebih cepat dan aman.

Pastikan hosting yang kamu pilih memiliki performa yang baik, karena kecepatan loading sangat berpengaruh terhadap SEO dan pengalaman pembaca.

## Monetisasi Blog

Ada beberapa cara untuk memonetisasi blog. Yang paling umum adalah Google AdSense, affiliate marketing, sponsored content, dan menjual produk digital.

Untuk pemula, fokus dulu pada membangun traffic dan audience. Monetisasi akan lebih mudah saat kamu sudah memiliki pembaca setia.

## FAQ

**Berapa lama sampai blog menghasilkan uang?**
Biasanya 6-12 bulan untuk melihat penghasilan pertama yang berarti, tergantung niche dan usaha yang kamu keluarkan.

**Berapa modal awal untuk memulai blog?**
Bisa dimulai dari Rp500.000 - Rp1.500.000 per tahun untuk domain dan hosting dasar.`,
    category: "Blogging",
    tags: ["Blogging", "Monetisasi", "Bisnis Online", "Pendapatan Pasif"],
    author: "Nagol Dachi",
    date: "2026-03-18",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    readTime: 9,
    featured: true,
  },
  {
    id: "5",
    slug: "mengenal-machine-learning-untuk-bisnis",
    title: "Mengenal Machine Learning untuk Bisnis Kecil",
    excerpt: "Bagaimana bisnis kecil dan UMKM bisa memanfaatkan machine learning untuk meningkatkan efisiensi operasional dan penjualan.",
    aiOverview: "Machine learning dulu terdengar seperti teknologi mahal yang cuma bisa dipakai perusahaan besar. Sekarang, UMKM pun bisa manfaatkan — bahkan ada yang gratis.",
    content: `Machine learning bukan lagi teknologi eksklusif untuk perusahaan besar. Kini, bisnis kecil dan UMKM juga bisa memanfaatkan teknologi ini untuk meningkatkan performa bisnis mereka.

Artikel ini membahas implementasi praktis machine learning yang bisa langsung diterapkan oleh bisnis kecil.

## Apa Itu Machine Learning?

Machine learning adalah cabang dari AI yang memungkinkan sistem belajar dari data tanpa diprogram secara eksplisit. Dalam konteks bisnis, ini berarti sistem bisa menemukan pola dan membuat prediksi berdasarkan data bisnis kamu.

## Aplikasi Praktis untuk Bisnis Kecil

Beberapa aplikasi machine learning yang bisa langsung digunakan antara lain prediksi penjualan, segmentasi pelanggan, chatbot customer service, dan optimasi harga.

Tools seperti Google AutoML dan berbagai platform no-code AI memudahkan bisnis kecil untuk mengimplementasikan ML tanpa perlu tim data science.

## Memulai dengan Budget Terbatas

Kamu tidak perlu investasi besar untuk mulai menggunakan ML. Banyak tools yang menawarkan tier gratis atau harga terjangkau untuk bisnis kecil. Mulai dari yang sederhana dan tingkatkan seiring pertumbuhan bisnis.

## FAQ

**Apakah bisnis kecil benar-benar butuh ML?**
Tidak semua bisnis membutuhkannya, tapi ML bisa memberikan keunggulan kompetitif yang signifikan.

**Berapa biaya implementasi ML?**
Bisa dimulai dari gratis menggunakan tools open-source hingga jutaan per bulan untuk solusi enterprise.`,
    category: "AI",
    tags: ["Machine Learning", "Bisnis", "UMKM", "Teknologi"],
    author: "Nagol Dachi",
    date: "2026-03-15",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    readTime: 6,
    featured: false,
  },
  {
    id: "6",
    slug: "tips-menghemat-uang-dengan-metode-50-30-20",
    title: "Tips Menghemat Uang dengan Metode 50/30/20",
    excerpt: "Pelajari metode budgeting 50/30/20 yang telah terbukti efektif untuk mengelola keuangan pribadi dan membangun tabungan.",
    aiOverview: "Catatan keuangan yang berantakan sering jadi penyebab utama sulitnya mengontrol pengeluaran. Metode 50/30/20 hadir sebagai solusi sederhana yang bisa langsung diterapkan siapa pun.",
    content: `Metode 50/30/20 adalah salah satu framework budgeting paling populer dan mudah diterapkan. Dikembangkan oleh Senator Elizabeth Warren, metode ini membagi pendapatan ke dalam tiga kategori utama.

Mari kita pelajari cara menerapkan metode ini dalam kehidupan sehari-hari.

## Memahami Metode 50/30/20

Konsepnya sederhana: 50% pendapatan untuk kebutuhan, 30% untuk keinginan, dan 20% untuk tabungan atau pelunasan hutang. Pembagian ini memberikan keseimbangan antara kebutuhan hidup, kesenangan, dan perencanaan masa depan.

## Kategori Kebutuhan (50%)

Kebutuhan mencakup pengeluaran yang tidak bisa dihindari seperti sewa rumah, tagihan listrik, transportasi, dan makanan. Jika pengeluaran kebutuhan kamu melebihi 50%, pertimbangkan untuk mencari cara menguranginya.

## Kategori Keinginan (30%)

Ini mencakup hal-hal yang kamu inginkan tapi tidak benar-benar butuhkan, seperti makan di restoran, hiburan, belanja fashion, dan liburan.

## Kategori Tabungan (20%)

Minimal 20% dari pendapatan harus dialokasikan untuk tabungan, dana darurat, atau investasi. Ini adalah fondasi keamanan finansial jangka panjang.

## FAQ

**Bagaimana jika penghasilan tidak cukup untuk mengikuti aturan ini?**
Mulai dari yang bisa kamu lakukan. Bahkan menyisihkan 5-10% untuk tabungan sudah lebih baik dari tidak sama sekali.

**Apakah metode ini cocok untuk semua orang?**
Metode ini fleksibel dan bisa disesuaikan. Yang terpenting adalah memiliki sistem budgeting yang kamu ikuti secara konsisten.`,
    category: "Keuangan",
    tags: ["Budgeting", "Keuangan Pribadi", "Tabungan", "Hemat"],
    author: "Nagol Dachi",
    date: "2026-03-12",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    readTime: 7,
    featured: false,
  },
  {
    id: "7",
    slug: "google-discover-cara-agar-artikel-muncul",
    title: "Google Discover: Cara Agar Artikel Kamu Muncul",
    excerpt: "Strategi dan tips praktis untuk meningkatkan peluang artikel kamu muncul di Google Discover dan mendapatkan traffic organik besar.",
    content: `Google Discover adalah feed konten personalisasi yang muncul di halaman utama Google mobile. Ini bisa menjadi sumber traffic yang sangat besar jika konten kamu berhasil muncul di sana.

## Apa Itu Google Discover?

Google Discover adalah fitur yang menampilkan konten relevan kepada pengguna berdasarkan minat dan riwayat pencarian mereka. Berbeda dengan search biasa, pengguna tidak perlu mencari — konten datang kepada mereka.

## Syarat Konten Google Discover

Konten yang muncul di Discover biasanya memiliki karakteristik: visual yang menarik, topik trending atau evergreen yang relevan, dan berasal dari website yang memiliki authority.

Gambar dengan resolusi minimal 1200px lebar sangat direkomendasikan. Google juga menyukai konten yang fresh dan memberikan perspektif unik.

## Optimasi Teknis

Pastikan website kamu mobile-friendly, cepat loading, dan menggunakan gambar berkualitas tinggi. Implementasikan AMP jika memungkinkan, meskipun ini bukan syarat mutlak.

## FAQ

**Berapa traffic yang bisa didapat dari Google Discover?**
Bervariasi, tapi beberapa website melaporkan ribuan hingga ratusan ribu klik per hari dari Discover.

**Apakah semua niche bisa masuk Google Discover?**
Ya, tapi niche berita, lifestyle, teknologi, dan keuangan cenderung lebih sering muncul.`,
    category: "SEO",
    tags: ["Google Discover", "SEO", "Traffic", "Content Marketing"],
    author: "Admin",
    date: "2026-03-10",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80",
    readTime: 6,
    featured: false,
  },
  {
    id: "8",
    slug: "investasi-saham-untuk-pemula-2026",
    title: "Investasi Saham untuk Pemula: Panduan 2026",
    excerpt: "Panduan lengkap memulai investasi saham bagi pemula, termasuk cara memilih broker, analisis saham, dan manajemen risiko.",
    content: `Investasi saham bisa menjadi salah satu cara terbaik untuk membangun kekayaan jangka panjang. Di tahun 2026, akses ke pasar saham semakin mudah berkat teknologi dan aplikasi investasi yang user-friendly.

## Mengapa Investasi Saham?

Secara historis, pasar saham memberikan return rata-rata 10-12% per tahun. Dibandingkan dengan tabungan bank yang hanya memberikan bunga 2-4%, investasi saham menawarkan potensi keuntungan yang jauh lebih besar.

## Cara Memulai

Langkah pertama adalah membuka rekening di sekuritas terpercaya yang terdaftar di OJK. Pilih yang memiliki aplikasi yang mudah digunakan dan biaya transaksi yang kompetitif.

Mulai dengan modal kecil dan pelajari cara membaca laporan keuangan perusahaan sebelum membeli saham.

## Manajemen Risiko

Diversifikasi portofolio adalah kunci. Jangan menaruh semua uang di satu saham. Investasikan di berbagai sektor dan pertimbangkan juga instrumen lain seperti reksa dana atau obligasi.

## FAQ

**Berapa modal minimal untuk investasi saham?**
Sekarang bisa dimulai dari Rp100.000 saja di beberapa aplikasi investasi.

**Saham apa yang cocok untuk pemula?**
Blue chip stocks dari perusahaan besar yang stabil seperti BBCA, BBRI, dan TLKM sering direkomendasikan untuk pemula.`,
    category: "Keuangan",
    tags: ["Investasi", "Saham", "Keuangan", "Pemula"],
    author: "Admin",
    date: "2026-03-08",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    readTime: 8,
    featured: false,
  },
];

export const categories = [
  { name: "Keuangan", slug: "keuangan", color: "hsl(var(--category-keuangan))" },
  { name: "SEO", slug: "seo", color: "hsl(var(--category-seo))" },
  { name: "AI", slug: "ai", color: "hsl(var(--category-ai))" },
  { name: "Blogging", slug: "blogging", color: "hsl(var(--category-blogging))" },
  { name: "Teknologi", slug: "teknologi", color: "hsl(var(--category-teknologi))" },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((p) => p.featured);
}

export function getRelatedPosts(currentPost: Post, limit = 4): Post[] {
  const scored = posts
    .filter((p) => p.id !== currentPost.id)
    .map((p) => {
      let score = 0;
      if (p.category === currentPost.category) score += 3;
      const sharedTags = p.tags.filter((t) => currentPost.tags.includes(t));
      score += sharedTags.length * 2;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}
