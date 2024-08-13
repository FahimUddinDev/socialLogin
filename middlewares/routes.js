const authGoogleRouter = require("../routers/authGoogleRouter");
const userRouter = require("../routers/userRouter");
module.exports = (app) => {
  app.use("/auth/google/", authGoogleRouter);
  app.use("/user/", userRouter);
};
