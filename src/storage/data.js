export const Data = () => {
  let d = sessionStorage.getItem("data");
  let data = JSON.parse(d);
  return data;
};
