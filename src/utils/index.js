import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};



// import { compareDesc } from "data-fns"
// export const cx = (...classNames) => classNames.filter (Boolean).join(" ")

// export const sortBlogs = (blogs) => {
//     return blogs.slice().sort((a,b) => compareDesc(parseISO(a.publishedAt), parseIso (b.publishedAt)))  

//     }
