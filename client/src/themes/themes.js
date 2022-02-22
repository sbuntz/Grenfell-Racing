// Currrent combination
let cc = 1;

const combinations = [
  ["#636A72", "#135757", "#00D3BA", "#207373"],
  ["#999DA6", "#676767", "#3e78ff", "#4141cc"],
  ["#8D4BF2", "#4e05bc", "#8D4BF2", "#4e05bc"],
];
export const themeL = {
  palette: {
    type: "light",
    primary: {
      main: combinations[cc][0],
    },
    secondary: {
      main: combinations[cc][1],
    },
  },
  typography: {
    fontFamily: "Ubuntu, Roboto, Arial, sans-serif",
  },
};

export const themeD = {
  palette: {
    type: "dark",
    primary: {
      main: combinations[cc][2],
    },
    secondary: {
      main: combinations[cc][3],
    },
  },
  typography: {
    fontFamily: "Ubuntu, Roboto, Arial, sans-serif",
  },
};