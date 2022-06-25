import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Hero from "../src/components/hero";
import CoursesSection from "../src/components/courses-section";
// import courses from "../src/data/courses";
import BlogpostsSection from "../src/components/blogposts-section";
import { BlogPost } from "../src/components/types/blog-post";
import Deck from "../src/components/deck";
import courses from "../src/data/websites.json"
import { Course } from "../src/components/types/course";

// type Props = {
//   posts: BlogPost[];
// };


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