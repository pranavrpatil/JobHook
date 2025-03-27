import  { useEffect, useState } from 'react';
import { Combobox, InputBase, ScrollArea, useCombobox } from '@mantine/core';
import {IconBriefcase,IconMapPin } from '@tabler/icons-react'

const SelectInput = (props: any) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [data, setData] = useState<string[]>([]);   
  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setData(props.options);
    setValue(props.value);
    setSearch(props.value);
  }, []);

  const exactOptionMatch = data.some((item) => item === search);
  const filteredOptions = exactOptionMatch
    ? data
    : data.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase().trim())
      );

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        
        if (val === '$create') {
          setData((current) => [...current, search]);
          setValue(search);
        } else {
          setValue(val);
          setSearch(val);
        }
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase withAsterisk 
          label ={props.label}
          rightSection={<Combobox.Chevron />}
          value={search}
          leftSection ={<props.icon />}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || ''); 
          }}
          placeholder={props.placeholder}
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize mah={200} type='scroll'>
          {options}
          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create</Combobox.Option>
          )}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default SelectInput;
