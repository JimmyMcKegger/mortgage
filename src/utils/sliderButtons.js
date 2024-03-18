export const handleIncrement = (value, step, max) => {
  const newValue = Math.min(value + step, max);
  onChange({}, newValue);
};

export const handleDecrement = (value, step, min) => {
  const newValue = Math.max(value - step, min);
  onChange({}, newValue);
};

export const handlePercentIncrement = (value, step, max) => {
  const newValue = Math.min(value + step, max);
  const roundedValue = parseFloat(newValue.toFixed(2));
  onChange({}, roundedValue);
}

export const handlePercentDecrement = (value, step, min) => {
  const newValue = Math.max(value - step, max);
  const roundedValue = parseFloat(newValue.toFixed(2));
  onChange({}, roundedValue);
}
