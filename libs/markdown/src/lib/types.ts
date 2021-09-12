export interface frontMatter {
  [key: string]: string;
}

export interface MarkdownDocument {
  frontMatter: frontMatter;
  content: string;
}
