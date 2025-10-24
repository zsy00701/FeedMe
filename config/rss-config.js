export const sources = [
  {
    name: "Andrej Karpathy",
    url: "https://karpathy.github.io/feed.xml",
    category: "AI个人",
  },
  {
    name: "Sebastian Raschka",
    url: "https://sebastianraschka.com/rss.xml",
    category: "AI个人",
  },
  {
    name: "Lil’Log (李沐博客)",
    url: "https://lilianweng.github.io/lil-log/feed.xml",
    category: "AI个人",
  },
  {
    name: "Chris Olah",
    url: "https://colah.github.io/feed.xml",
    category: "AI个人",
  },
  {
    name: "OpenAI Blog",
    url: "https://openai.com/blog/rss/",
    category: "AI团队",
  },
  {
    name: "Anthropic Blog",
    url: "https://www.anthropic.com/rss.xml",
    category: "AI团队",
  },
  {
    name: "Google DeepMind",
    url: "https://deepmind.google/rss.xml",
    category: "AI团队",
  },
  {
    name: "Hugging Face Blog",
    url: "https://huggingface.co/blog/feed.xml",
    category: "AI团队",
  },
  {
    name: "Stability AI Blog",
    url: "https://stability.ai/feed",
    category: "AI团队",
  },
  {
    name: "Meta AI Blog",
    url: "https://ai.facebook.com/blog/rss/",
    category: "AI团队",
  },
  {
    name: "NVIDIA Developer Blog (AI)",
    url: "https://developer.nvidia.com/blog/category/ai/feed/",
    category: "AI团队",
  },
];

export const maxItemsPerFeed = 30;
export const dataPath = "data";

export const defaultSource = sources[0];

export function findSourceByUrl(url) {
  return sources.find((source) => source.url === url);
}

export function getSourcesByCategory() {
  return sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = [];
    }
    acc[source.category].push(source);
    return acc;
  }, {});
}

// 默认导出配置对象，供脚本读取
const config = { sources, maxItemsPerFeed, dataPath };
export default config;
export { config };
