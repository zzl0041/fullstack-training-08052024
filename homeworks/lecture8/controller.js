module.exports = {
  createPost: (req, res) => {
    const { title, content } = req.body;
    res.redirect(302, `/home.html?title=${title}&content=${content}`);
  },
};
