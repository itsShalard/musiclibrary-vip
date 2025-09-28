import { getCollection } from 'astro:content';

export interface BlogPost {
  slug: string;
  title: string;
  genre: string;
  fileType: string;
  date: string;
  artwork_url: string;
  download_url: string;
  tags: string[];
  content: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await getCollection('blog');
    
    const blogPosts = await Promise.all(
      posts.map(async (post) => {        
        return {
          slug: post.slug,
          title: post.data.title,
          genre: post.data.genre,
          fileType: post.data.fileType,
          date: post.data.date,
          artwork_url: post.data.artwork_url,
          download_url: post.data.download_url,
          tags: post.data.tags,
          content: post.body
        } as BlogPost;
      })
    );

    // Sort by date (newest first)
    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function searchPosts(posts: BlogPost[], query: string): BlogPost[] {
  if (!query.trim()) return posts;
  
  const searchTerm = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.genre.toLowerCase().includes(searchTerm) ||
    post.fileType.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.content.toLowerCase().includes(searchTerm)
  );
}