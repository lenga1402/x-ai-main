import { AspectRatio, Box, Group, rem, Text } from "@mantine/core"

import { fonts } from "@/assets/fonts"
import { TextCopyright } from "@/assets/vectors"
import { Section, type SectionProps } from "@/components/Section"

import { CategoryMenu } from "./CategoryMenu"
import { FormLead } from "./FormLead"
import { Information } from "./Information"
import { SocialMenu } from "./SocialMenu"

export const Footer = (props: SectionProps) => {
  return (
    <Box sx={{ zIndex: 0 }}>
      <Section withPadding={false} px={rem(60)} py={rem(50)} {...props}>
        <Information />

        <FormLead />

        <CategoryMenu />

        <AspectRatio ratio={1794 / 261}>
          <TextCopyright />
        </AspectRatio>

        <Group position="apart" mt={rem(33)} fz={rem(13)}>
          <Text ff={fonts.INTER.style.fontFamily}>xAIBOT | 2023</Text>

          <Text tt="uppercase" ff={fonts.INTER.style.fontFamily}>
            Unleashing the Power of Artificial Intelligence
          </Text>

          <SocialMenu />
        </Group>
      </Section>
    </Box>
  )
}
