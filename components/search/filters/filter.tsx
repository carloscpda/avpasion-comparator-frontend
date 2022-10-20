import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEventHandler } from "react";

type FilterProps<T extends { id: string; name: string }> = {
  data: T[];
  currentValue?: T["id"];
  queryParamName: string;
  name: string;
};

function Filter<T extends { id: string; name: string }>({
  data,
  currentValue,
  queryParamName,
  name,
}: FilterProps<T>) {
  const router = useRouter();

  const handleChangeValue: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.query[queryParamName] = event.target.value;
    router.query.page = "1";
    router.replace(router);
  };

  return (
    <FormControl>
      <FormLabel
        textTransform="uppercase"
        fontSize="xs"
        color="red.700"
        fontWeight="bold"
      >
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

export default Filter;
