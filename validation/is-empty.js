const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "objct" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

module.exports = isEmpty;
