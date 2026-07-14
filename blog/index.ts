import createPortfolioWebsite from "@/blog/creating_portfolio_website";

const posts: Array<BlogPost> = [
    createPortfolioWebsite,
]
export default posts;

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: Date;
}