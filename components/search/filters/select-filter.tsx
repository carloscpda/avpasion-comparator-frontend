import { FormControl, FormLabel } from "@chakra-ui/react";
import { MultiValue, Select } from "chakra-react-select";
import { useRouter } from "next/router";

type Option = { id: string; name: string };

type SelectFilterProps<T extends Option> = {
  data: T[];
  queryParamName: string;
  name: string;
};

function SelectFilter<T extends Option>({
  data,
  queryParamName,
  name,
}: SelectFilterProps<T>) {
  const router = useRouter();

  const handleChangeValue = (value: MultiValue<Option> | null) => {
    router.query[queryParamName] = value?.map((v) => v.id) ?? undefined;
    router.query.page = "1";
    router.replace(router);
  };

  const currentValue = router.query?.[queryParamName];
  const value = data.filter((o) => currentValue?.includes(o.id));

  return (
    <FormControl>
      <FormLabel textTransform="uppercase" fontSize="xs" fontWeight="bold">
        {name}
      </FormLabel>
      <Select
        instanceId={name}
        placeholder="--"
        isMulti
        onChange={handleChangeValue}
        value={value}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        options={data}
      />
    </FormControl>
  );
}

export default SelectFilter;
