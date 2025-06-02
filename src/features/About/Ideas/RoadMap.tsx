import { Carousel } from "@mantine/carousel"
import { Box, List, rem, Text, Title, type BoxProps } from "@mantine/core"
import { nanoid } from "nanoid"

import { fonts } from "@/assets/fonts"
import { TextRoadMap } from "@/assets/vectors"

const data = [
  {
    phase: "Phase 1",
    title: "Research and Development",
    content: [
      "Conducts in-depth market analysis to identify industry trends and customer needs.",
      `Explores and selects suitable AI technologies for xAIBot\'s development.`,
    ],
  },
  {
    phase: "Phase 2",
    title: "Core Functionality and Proof of Concept",
    content: [
      "Focuses on developing core AI features, including natural language processing and sentiment analysis.",
      `Validates xAIBot\'s performance and scalability through rigorous proof of concept testing.`,
    ],
  },
  {
    phase: "Phase 3",
    title: "Feature Enhancement and User Experience",
    content: [
      `Expands xAIBot\'s features based on user feedback and market demands.`,
      `Prioritizes user-centric design to optimize the platform\'s interface and user experience.`,
    ],
  },
  {
    phase: "Phase 4",
    title: "Scalability and Integration",
    content: [
      `Scales xAIBot\'s infrastructure to accommodate increasing user demand.`,
      "Facilitates seamless integration with third-party systems, enhancing versatility and usability.",
    ],
  },
  {
    phase: "Phase 5",
    title: "Core Functionality and Proof of Concept",
    content: [
      `Extends xAIBot\'s accessibility across multiple platforms and messaging apps.`,
      "Forms strategic partnerships and provides developer APIs for ecosystem growth.",
    ],
  },
  {
    phase: "Phase 6",
    title: "Continuous Improvement and Innovation",
    content: [
      "Iterates and improves xAIBot based on user feedback and evolving industry advancements.",
      "Invests in ongoing research to stay at the forefront of AI technology and innovation.",
    ],
  },
]

export const RoadMap = () => {
  return (
    <Box py={rem(160)}>
      <TextRoadMap />
      <Carousel
        withControls={false}
        slideSize={rem(396)}
        slideGap={rem(30)}
        slidesToScroll={2}
        // loop
        align="start"
        h={rem(450)}
        mt={rem(100)}
      >
        {data.map(({ phase, title, content }) => (
          <Carousel.Slide key={nanoid()} h={rem(420)}>
            <RoadMapCard
              title={title}
              phase={phase}
              content={content}
              h="100%"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  )
}

type RoadMapCardProps = BoxProps & {
  phase: string
  title: string
  content: string[]
}

const RoadMapCard: React.FC<RoadMapCardProps> = ({
  phase,
  title,
  content,
  ...props
}) => {
  return (
    <Box
      px={rem(28)}
      py={rem(24)}
      {...props}
      sx={{
        borderRadius: rem(30),
        border: "1px solid #fff",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(231, 163, 255, 0.00) 100%)",
      }}
    >
      <Text
        fz={rem(20)}
        fw={700}
        tt="uppercase"
        sx={{
          fontFamily: fonts.OFFBIT_TRIAL_DOT_BOLD.style.fontFamily,
          background: "linear-gradient(180deg, #AECFFF 0%, #3678D6 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 700,
        }}
      >
        {phase}
      </Text>
      <Title
        fz={rem(20)}
        ff={fonts.OFFBIT_TRIAL_DOT_BOLD.style.fontFamily}
        tt="uppercase"
      >
        {title}
      </Title>
      <List mt={rem(20)} spacing={rem(12)} c="#fff">
        {content.map((item) => (
          <List.Item key={nanoid()} fz={rem(16)}>
            {item}
          </List.Item>
        ))}
      </List>
    </Box>
  )
}
