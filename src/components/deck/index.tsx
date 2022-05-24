import { Course } from "../types/course";
import { VStack, Heading, List, ListItem, Button, Stack } from "@chakra-ui/react";
import CourseCard from "../course-card";
import { useState } from "react";
import BlogpostsSection from "../blogposts-section";
// import { BlogPost } from "../types/blog-post";
import posts from "../../data/research.json"

type Props = {
  courses: Course[];
};

type Tab = {
  label: string;
  color: string;
  lightColor: string;
  textShadow: string;
};

const Tabs: Tab[] = [
  {
    // href: TWITTER_PROFILE,
    label: "My Websites.",
    color: "twitter",
    lightColor: "rgba(29,161, 242,0.40)",
    textShadow: "2px 2px 7px rgba(29,161, 242,0.40)",
  },
  {
    // href: GITHUB_PROFILE,
    label: "My Research.",
    color: "Gray.900",
    lightColor: "rgba(0,0,0,0.40)",
    textShadow: "2px 2px 7px rgba(0,0,0,0.40)",
  },
  {
    // href: TWITCH_CHANNEL,
    label: "My Design.",
    color: "purple.500",
    lightColor: "rgba(128, 90, 213, 0.49)",
    textShadow: "2px 2px 7px rgba(128, 90, 213, 0.49)",
  },
];


const Deck = ({ courses }: Props) => {
  const [currTab, setTab] = useState(Tabs[0].label)
  return (

    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      {/* <Heading size="md">Courses.</Heading> */}


      <Stack direction={{ base: "column", md: "row" }} spacing={3}>
        {Tabs.map(({ label, color, textShadow, lightColor }) => (
          <Button
            key={label}
            // as={Link}
            justifyContent={{ base: "flex-start", md: "center" }}
            // px={4}
            color={currTab === label ? color : lightColor}
            fontWeight={currTab === label ? "black" : "medium"}
            textShadow="none"
            _hover={{
              color: color,
              fontSize: "1.1rem",
              textShadow: textShadow,
              fontWeight: "black",
              transition: "all 0.5s ease-in-out"
            }}
            _focus={{
              border: "none",
            }}
            // href={href}
            // target="_blank"
            onClick={() => setTab(label)}
            variant="ghost"
            transition="all 0.5s ease-in-out"
          >
            {label}
          </Button>
        ))}
      </Stack>
      {
        currTab === Tabs[0].label ? <List spacing={6}>
          {courses.map((course) => (
            <ListItem key={course.url}>
              <CourseCard {...course} />
            </ListItem>
          ))}
        </List> : <BlogpostsSection posts={posts} />

      }

    </VStack>
  );
};

export default Deck;
