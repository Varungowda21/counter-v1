const counterValidationSchema = {
  count: {
    in: ["body"],
    exists: {
      errorMessage: "count feild is required",
    },
    notEmpty: {
      errorMessage: "count cannot be empty",
    },
    trim: true,
  },
};
const idvalidationSchema = {
  id: {
    in: ["params"],
    isMongoId: {
      errorMessage: "invalid id format",
    },
  },
};

module.exports = {
  counterValidationSchema,
  idvalidationSchema,
};
