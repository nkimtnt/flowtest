module.exports = {
  petregisterControl: async (req, res) => {
    return res.status(200).send({ message: "petregister ok!" });
  },
  peteditControl: async (req, res) => {
    return res.status(200).send({ message: "petedit ok!" });
  },
  petdeleteControl: async (req, res) => {
    return res.status(200).send({ message: "petdelete ok!" });
  },
};
