module.exports = {
  signupControl: async (req, res) => {
    return res.status(200).send({ message: "signup ok!" });
  },
  signinControl: async (req, res) => {
    return res.status(200).send({ message: "signin ok!" });
  },
  signoutControl: async (req, res) => {
    return res.status(200).send({ message: "signup out!" });
  },
};
