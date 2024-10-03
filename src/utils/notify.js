import { Notify } from "quasar";

export function errorAlert(error) {
  return Notify.create({
    timeout: 3500,
    position: "bottom",
    color: "red-6",
    message: error,
    icon: "error_outline",
    textColor: "white",
    classes:"ntfy-custom"
  });
};

export function infoAlert(info) {
    return Notify.create({
      timeout: 2000,
      position: "bottom",
      color: "light-blue-10",
      message: info,
      icon: "o_info",
      textColor: "white",

    });
  };


  export function successAlert(info) {
    return Notify.create({
      timeout: 2000,
      position: "bottom",
      color: "positive",
      message: info,
      icon: "check_circle",
      textColor: "white",
    });
  };
