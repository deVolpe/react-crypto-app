module.exports = {
  getTopList(req, res) {
    res.status(200).json({
      top: 'Ok',
    });
  },
};
