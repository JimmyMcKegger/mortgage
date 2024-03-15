import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography, Button } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SliderComponent = ({
	defaultValue,
	min,
	max,
	step,
	onChange,
	value,
	label,
	unit,
	amount,
}) => {
  const handleIncrement = () => {
    const newValue = Math.min(value + step, max);
    onChange({}, newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(value - step, min);
    onChange({}, newValue);
  };
  return (
    <Stack my={1.4}>
      <Stack gap={1} direction="row" sx={{ mb: 2 }}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <Stack direction={"row"} justifyContent={"space-between"} alignItems="center">

        {/* decrement button and min value */}
        <Stack direction={"row"} alignItems="center" spacing={1}>
          <Button size="small" onClick={handleDecrement}><ArrowDropDownIcon /></Button>
          <Typography variant="caption" color={"text.secondary"}>
            {unit} {min}
          </Typography>
        </Stack>

        {/* increment button and max value */}
        <Stack direction={"row"} alignItems="center" spacing={1}>
          <Typography variant="caption" color={"text.secondary"}>
            {unit} {max}
          </Typography>
          <Button size="small" onClick={handleIncrement}><ArrowDropUpIcon /></Button>
        </Stack>

      </Stack>
    </Stack>
  );
};

export default SliderComponent;
