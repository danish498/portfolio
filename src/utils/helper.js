export const validateForm = (formData) => {
  const errors = {};
  if (!formData.user_name.trim()) {
    errors.user_name = "Name is required";
  }
  if (!formData.user_email.trim()) {
    errors.user_email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
    errors.user_email = "Email is not invalid";
  }
  if (!formData.message.trim()) {
    errors.message = "Message is required";
  }
  return errors;
};
