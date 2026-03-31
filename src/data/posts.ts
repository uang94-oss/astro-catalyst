import fm from 'front-matter';

// 1. Definisi struktur data artikel
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

// 2. Fitur Vite untuk menyedot semua file .md secara otomatis
const markdownFiles = import.meta.glob('/content/posts/*.md', { query: '?raw', import: 'default', eager: true });

// 3. Mengubah kumpulan file .md menjadi array data yang rapi
export const posts: Post[] = Object.keys(markdownFiles).map((path, index) => {
  const fileContent = markdownFiles[path] as string;
  
  // Memisahkan data konfigurasi (judul, tanggal) dengan isi teks
  const parsed = fm<any>(fileContent);
  
  // Mengambil nama file sebagai URL (slug) jika tidak ditulis di CMS
  const fileName = path.split('/').pop()?.replace('.md', '') || '';

  return {
    id: String(index + 1),
    slug: parsed.attributes.slug || fileName,
    title: parsed.attributes.title || 'Tanpa Judul',
    excerpt: parsed.attributes.excerpt || '',
    aiOverview: parsed.attributes.aiOverview || '',
    content: parsed.body || '', // Ini adalah isi teks artikelnya
    category: parsed.attributes.category || 'Uncategorized',
    tags: parsed.attributes.tags || [],
    author: parsed.attributes.author || 'Admin',
    date: parsed.attributes.date || new Date().toISOString(),
    image: parsed.attributes.image || '',
    readTime: parsed.attributes.readTime || 5,
    featured: parsed.attributes.featured || false,
  };
});

// 4. Pengaturan kategori (bisa dibiarkan manual seperti ini)
export const categories = [
  { name: "Keuangan", slug: "keuangan", color: "hsl(var(--category-keuangan))" },
  { name: "SEO", slug: "seo", color: "hsl(var(--category-seo))" },
  { name: "AI", slug: "ai", color: "hsl(var(--category-ai))" },
  { name: "Blogging", slug: "blogging", color: "hsl(var(--category-blogging))" },
  { name: "Teknologi", slug: "teknologi", color: "hsl(var(--category-teknologi))" },
];

// 5. Fungsi-fungsi pendukung untuk memfilter artikel
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
