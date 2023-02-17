
const cookieParser = require("cookie-parser");

const generateCookie = (req, res) => {

    res.cookie("my-fav-color", "red, blue, green");

    const twoDaysInMilliSeconds = 2 * 24 * 60 * 60 * 1000;
    res.cookie("username-validity", "2 Days", {
      maxAge: twoDaysInMilliSeconds
    })

    res.json({
      message: "Cookie Generated. Check your browser window for details"
    })
}

const listCookies = (req, res) => {

  const cookies = req.cookies

  res.json({
    message: cookies
  })
}


module.exports = {generateCookie, listCookies};