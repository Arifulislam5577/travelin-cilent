export const HandleError = (error) => {
  const errorMessage = error
    .split("Firebase: Error ")[1]
    .replace("(", "")
    .replace(").", "");
  return errorMessage;
};
