export const currencyFormat = (value) => {
  return `€${value.toFixed(2)}`;
};

export const capitalizeStr = (str) => {
  return !!str && str.replace(/^./, str[0].toUpperCase());
};

export const filterEqipment = (equipmentList = [], camperObj = {}) => {
  return (
    equipmentList
      .filter(({ name }) => !!camperObj?.[name])
      .map(({ name, label, ...rest }) => ({
        ...rest,
        name,
        label: typeof camperObj[name] === "string" ? camperObj[name] : label,
      })) ?? []
  );
};
