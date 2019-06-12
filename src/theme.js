import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

//rgba(0, 0, 0, 0.42);
// A custom theme for this app
const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "#4A2783"
  //   },
  //   secondary: {
  //     main: "#cccccc"
  //   },
  //   error: {
  //     main: red.A400
  //   },
  //   background: {
  //     default: "#713F98"
  //   }
  // }
  overrides: {
    MuiInput: {
      underline: {
        color: "rgba(0, 0, 0, 0.42)", //input color focus of not
        // backgroundColor: "grey", //background color of whole input
        "&:hover:not($disabled):after": {
          backgroundColor: "orange" //its when its hover and input is focused
        },
        // "&:hover:not($disabled):before": {
        //   backgroundColor: "yellow" //its when you hover and input is not foucused
        // },
        "&:after": {
          backgroundColor: "rgba(0, 0, 0, 0.42)" //when input is focused, Its just for example. Its better to set this one using primary color
        }
        // "&:before": {
        //   backgroundColor: "red" // when input is not touched
        // }
      }
    }
  }
});

export default theme;
