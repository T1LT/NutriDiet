export default function capitalize(str: string) {
  return str.split(" ").map(el => el[0].toUpperCase() + el.substring(1)).join(" ");
};