import { useEffect } from "react"
import { api } from "@/utils"
import { Group, LoadingOverlay, Paper, rem } from "@mantine/core"
import { nanoid } from "nanoid"

import { useSelectOption } from "../hooks/useSelectOption"

export const StakeOptions = () => {
  const { data, isLoading } = api.staking.getOptions.useQuery()
  const { value, setValue } = useSelectOption()

  useEffect(() => {
    if (data && data[0]) {
      setValue(data[0].id)
    }
  }, [data, setValue])

  return (
    <>
      <Group spacing={rem(6)}>
        {data?.map(({ apy, id, label }) => (
          <Paper
            key={nanoid()}
            radius="md"
            tt="capitalize"
            withBorder
            bg={
              value === id
                ? "#fff !important"
                : "rgba(255, 255, 255, 0.04) !important"
            }
            onClick={() => setValue(id)}
            c={value === id ? "#2b1146" : "#C3C2D4"}
            fz={rem(12)}
            px={rem(12)}
            py={rem(6)}
            sx={{
              transition: "all 0.25s",
              cursor: "pointer",
              borderColor: "rgba(255, 255, 255, 0.20) !important",
            }}
            fw={500}
          >
            {label} - {apy}%
          </Paper>
        ))}
      </Group>

      <LoadingOverlay visible={isLoading} />
    </>
  )
}
