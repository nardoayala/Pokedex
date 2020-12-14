const capitalize = function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const leadingZero = function (number) {
  number = number.toString();
  if (number.length === 1) {
    return `00${number}`;
  } else if (number.length === 2) {
    return `0${number}`;
  } else {
    return number;
  }
};

export { capitalize, leadingZero };
