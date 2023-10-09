export default function parseText(text: string) {
  return text.split(" ").join("_").toLowerCase();
};