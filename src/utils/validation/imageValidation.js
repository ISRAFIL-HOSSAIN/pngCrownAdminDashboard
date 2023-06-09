import * as Yup from "yup";

const imageValidationSchema = Yup.object().shape({
  image: Yup.mixed()
    .required("Image is required")
    .test("fileType", "Only PNG images are allowed", (value) => {
      return value ? value.type === "image/png" : true;
    }),
  category : Yup.string().required("Category  is required"),
  imageName : Yup.string().required("Image name is required"),
  tags: Yup.array()
  .of(Yup.string())
  .min(1, "*Need to add at least minimum one tag")
  .test("notEmpty", "Tags cannot be empty", (value) => {
    return value.every((tag) => tag.trim().length > 0);
  }),

});

export default imageValidationSchema;
