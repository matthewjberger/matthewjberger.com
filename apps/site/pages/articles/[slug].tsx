import { GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

export function Article(props: ArticleProps) {
  const { slug } = props;
  return (
    <div>
      <h1>Welcome to {slug}!</h1>
    </div>
  );
}

export default Article;

export const getStaticProps = async ({ params }: { params: ArticleProps }) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  return {
    paths: [1, 2, 3].map((idx) => {
      return {
        params: {
          slug: `page${idx}`,
        },
      };
    }),
    fallback: false,
  };
};
