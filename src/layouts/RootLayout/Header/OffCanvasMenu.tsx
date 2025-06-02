import { ActionIcon, Box, Drawer, type BoxProps } from "@mantine/core"
import { HiOutlineMenu } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"

import { ActionButtons } from "./ActionButtons"
import { useOpenMenu } from "./hooks"
import { NavMenu } from "./NavMenu"

export const OffCanvasMenu = (props: BoxProps) => {
  const [opened, setOpened] = useOpenMenu((state) => [
    state.value,
    state.setValue,
  ])

  const handleClose = () => {
    setOpened(false)
  }

  return (
    <Box {...props}>
      <ActionIcon variant="transparent" onClick={() => setOpened(!opened)}>
        <HiOutlineMenu size={30} color="#fff" />
      </ActionIcon>

      <Drawer
        opened={opened}
        onClose={handleClose}
        position="right"
        withCloseButton={false}
        sx={{ ".mantine-Paper-root": { backgroundColor: "#000" } }}
        padding={50}
      >
        <ActionIcon
          pos="absolute"
          top={20}
          right={20}
          variant="transparent"
          onClick={handleClose}
        >
          <IoMdClose color="#fff" size={30} />
        </ActionIcon>

        <NavMenu my={40} onClick={handleClose} />

        <ActionButtons />
      </Drawer>
    </Box>
  )
}
