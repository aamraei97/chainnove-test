export const TOTAL_POSTS = 100;
export const POSTS_PER_PAGE =12;
// we know that jsonplaceholder provides 100 posts, so we can calculate the total pages
// I ve wrote the comment; NOT AI generated 😅
export const TOTAL_PAGES = Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE);
