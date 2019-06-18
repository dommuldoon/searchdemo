
import { createMuiTheme } from "@material-ui/core/styles";

//rgba(0, 0, 0, 0.42);
// A custom theme for this app
const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        color: "rgba(0, 0, 0, 0.42)", //input color focus of not
        "&:hover:not($disabled):after": {
          backgroundColor: "orange" //its when its hover and input is focused
        },
        "&:after": {
          backgroundColor: "rgba(0, 0, 0, 0.42)" //when input is focused, Its just for example. Its better to set this one using primary color
        }
      }
    }
  }
});

export default theme;
