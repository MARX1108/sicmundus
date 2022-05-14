import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Hero from "../src/components/hero";
import CoursesSection from "../src/components/courses-section";
// import courses from "../src/data/courses";
import BlogpostsSection from "../src/components/blogposts-section";
import { BlogPost } from "../src/components/types/blog-post";
import Deck from "../src/components/deck";


// type Props = {
//   posts: BlogPost[];
// };

const courses = [
  {
    id: 1,
    title: "test",
    description: "description",
    url: "https://dribbble.com"
  }
]

const posts = [
  {
    title: "test",
    description: "description",
    date: "2022-4-1",
    slug: "test",
    readingTime: "20min"
  }
]

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Deck courses={courses} />
      {/* <CoursesSection courses={courses} /> */}
      <BlogpostsSection posts={posts} />
    </>
  );
};

export default IndexPage