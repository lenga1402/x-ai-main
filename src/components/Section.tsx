import { Container, rem, type ContainerProps } from "@mantine/core"

export type SectionProps = ContainerProps & {
  withPadding?: boolean
}

export const Section = ({ withPadding = true, ...props }: SectionProps) => {
  const defaultPadding: ContainerProps = withPadding
    ? {
        px: { base: 15, sm: 25, lg: rem(50) },
        py: { base: 50, sm: 100, lg: rem(150) },
      }
    : {}

  return <Container fluid {...defaultPadding} {...props} />
}
