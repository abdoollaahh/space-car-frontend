import { EllipseMiniSolid } from "@medusajs/icons"
import { Label, RadioGroup, Text, clx } from "@medusajs/ui"
import { ChangeEvent } from "react"
import LocalizedClientLink from "../localized-client-link"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
}: FilterRadioGroupProps) => {
  return (
    <div className="flex gap-x-3 flex-col gap-y-3">
      <ul className="my-3 text-lg gap-y-2 flex flex-col">
        <li>
          <LocalizedClientLink href={`/store`}>All</LocalizedClientLink>
        </li>
        <li>
          <LocalizedClientLink href={`/collections/used`}>
            Used
          </LocalizedClientLink>
        </li>
        <li>
          <LocalizedClientLink href={`/collections/new`}>
            New
          </LocalizedClientLink>
        </li>
        <li>
          <LocalizedClientLink href={`/collections/rental`}>
            Rental
          </LocalizedClientLink>
        </li>
      </ul>
      <Text className="text-xl text-ui-fg-muted">{title}</Text>
      <RadioGroup>
        {items?.map((i) => (
          <div
            key={i.value}
            className={clx("flex gap-x-2 items-center", {
              "ml-[-1.75rem]": i.value === value,
            })}
          >
            {i.value === value && <EllipseMiniSolid />}
            <RadioGroup.Item
              checked={i.value === value}
              onClick={(e) =>
                handleChange(
                  e as unknown as ChangeEvent<HTMLButtonElement>,
                  i.value
                )
              }
              className="hidden peer"
              id={i.value}
              value={i.value}
            />
            <Label
              placeholder={i.label}
              htmlFor={i.value}
              className={clx(
                "!text-md !transform-none text-ui-fg-subtle hover:cursor-pointer",
                {
                  "text-ui-fg-base": i.value === value,
                }
              )}
            >
              {i.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterRadioGroup
