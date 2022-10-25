import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEventHandler } from "react";

type SelectFilterProps<T extends { id: string; name: string }> = {
  data: T[];
  currentValue?: T["id"];
  queryParamName: string;
  name: string;
};

function SelectFilter<T extends { id: string; name: string }>({
  data,
  currentValue,
  queryParamName,
  name,
}: SelectFilterProps<T>) {
  const router = useRouter();

  const handleChangeValue: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.query[queryParamName] = event.target.value;
    router.query.page = "1";
    router.replace(router);
  };

  return (
    <FormControl>
      <FormLabel textTransform="uppercase" fontSize="xs" fontWeight="bold">
        {name}
      </FormLabel>
      <Select
        placeholder="--"
        variant="filled"
        onChange={handleChangeValue}
        value={currentValue || ""}
        cursor="pointer"
      >
        {data.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectFilter;
