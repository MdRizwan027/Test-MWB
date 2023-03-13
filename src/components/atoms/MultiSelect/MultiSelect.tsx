import * as React from 'react';
import { Input } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useMultiSelectStyles } from '@/static/stylesheets/atoms';
import Radio from '@mui/material/Radio';

interface MenuProps {
  label: string,
  value: any,
  sign?: any
}

interface MultiSelectProps {
  options?: MenuProps[],
  value?: MenuProps['value'][],

  onChange?(items: MenuProps['value'][]): void,

  fullWidth?: boolean,
  label?: string,
  type?: string,
  sign?: any,
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuItemProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      borderBottom: 2,
    },
  },
};

const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  const classes = useMultiSelectStyles();
  const {options, value, type, onChange, label, fullWidth} = props;

  const getMappedLabels = () => {
    const labels: MenuProps['label'][] = [];

    if ((options && options?.length > 0) && (value && value.length > 0)) {
      value?.forEach((itemValue) => {
        const index = options?.findIndex(o => o?.value === itemValue);

        if (index > -1) {
          const item = options[index];
          labels.push(item?.label);
        }
      });
    }

    return labels;
  };

  const handleChange = (targetValue: MenuProps['value']) => {
    const values = value && value?.length > 0 ? [...value] : [];

    if (targetValue) {
      const index = values.indexOf(targetValue);
      if (index === -1) {
        values.push(targetValue);
      } else {
        values.splice(index, 1);
      }

      if (onChange) {
        onChange(values);
      }
    }
  };

  const mappedLabels = getMappedLabels();

  return (
    <div>
      <FormControl
        sx={{m: 1, width: '100%'}}
        className={classes.root}
        fullWidth={fullWidth}
        variant={"outlined"}
      >
        {label && (
          <InputLabel 
          className={classes.label}>{label}</InputLabel>
        )}

        <Select
          multiple
          native={false}
          value={mappedLabels}
          input={<Input />}
          MenuProps={MenuItemProps}
          size={"small"}
          fullWidth={fullWidth}
          renderValue={(selected) => {
            return selected.join(', ');
          }}
        >
          {options && options?.length > 0 && options?.map((option, index) => (
            <MenuItem key={index} value={option?.value} dense={true}>
              { type !== 'radio' ?
                 <Checkbox
                 checked={value && value?.length > 0 && value.indexOf(option?.value) > -1}
                 onClick={() => handleChange(option?.value)}
               />  :
               <Radio checked={value && value?.length > 0 && value.indexOf(option?.value) > -1}
                onClick={() => handleChange(option?.value)}/>
              }
              <ListItemText primary={option?.label} className={type === "indicator" ? "indicatorBox " + option?.sign : ''}/>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export { MultiSelect };
