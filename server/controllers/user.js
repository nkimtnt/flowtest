module.exports = {
  userinfoControl: async (req, res) => {
    return res.status(200).send({ message: "userinfo ok!" });
  },
  userimageControl: async (req, res) => {
    return res.status(200).send({ message: "userimage ok!" });
  },
  usereditControl: async (req, res) => {
    return res.status(200).send({ message: "useredit ok!" });
  },
};
