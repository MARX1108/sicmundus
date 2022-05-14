import { Course } from "../types/course";
import { VStack, Heading, List, ListItem, Button, Stack } from "@chakra-ui/react";
import CourseCard from "../course-card";

type Props = {
  courses: Course[];
};

type Tab = {
  label: string;
  color?: string
};

const Tabs: Tab[] = [
  {
    // href: TWITTER_PROFILE,
    label: "My Websites.",
    color: "twitter",
  },
  {
    // href: GITHUB_PROFILE,
    label: "My Research.",
  },
  {
    // href: TWITCH_CHANNEL,
    label: "My Design.",
    color: "purple.500",
  },
];


const Deck = ({ courses }: Props) => {
  return (

    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      {/* <Heading size="md">Courses.</Heading> */}


      <Stack direction={{ base: "column", md: "row" }} spacing={3}>
        {Tabs.map(({ label, color }) => (
          <Button
            key={label}
            // as={Link}
            justifyContent={{ base: "flex-start", md: "center" }}
            px={4}
            color={color}

            // href={href}
            // target="_blank"
            variant="ghost"
          >
            {label}
          </Button>
        ))}
      </Stack>

      <List spacing={6}>
        {courses.map((course) => (
          <ListItem key={course.url}>
            <CourseCard {...course} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Deck;
