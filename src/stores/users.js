import { defineStore } from 'pinia';
import * as authService from "src/services/auth";
import { errorAlert, infoAlert } from "src/utils/notify";

const initialState = {
  users: [],
  currentUser:{}
}

export const useUserStore = defineStore('user', {
  state: () => initialState,
  getters: {
    fullName: (state) => state.currentUser ,
  },
  actions: {
    async SIGN_IN(email, password) {
      console.log("SIGN_IN");
      try {
        const { user, data } = await authService.signIn(email, password);
        console.log("signIn asdasd", data);
        if(!data.state){
          errorAlert("Su cuenta se encuentra deshabilitada");
          return false
        }else{
          this.currentUser = data;
          return true
        }
      } catch (error) {
          console.log(" error SIGN_IN", error);
          errorAlert("Email y/o Contraseña Inválidos");
        }
    },
    async SIGN_OUT() {
      try {
        const response = await authService.signOut();
        infoAlert("Su sesión ha sido cerrada correctamente.");
      } catch (error) {
        errorAlert("Ha ocurrido un error mientras se cerraba su sesión.");
      }
    },
    async CHANGE_PASSWORD (password)  {
      try {
        const response = await authService.changeUserPassword(password);
        infoAlert("Su Contraseña ha sido modificada correctamente");
      } catch (error) {
        errorAlert("Ha ocurrido un error al procesar la solicitud.");
      }
    },
    async FORGOT_PASSWORD (email)  {
      try {
        const response = await authService.forgotPassword(email);
        infoAlert(`Se ha enviado un email a ${email}. Por favor revise su bandeja de entrada o spam.`);
      } catch (error) {
        errorAlert("Ha ocurrido un error al procesar la solicitud.");
      }
    },
    async CREATE_USER (user) {
      console.log("CREATE_USER", user);
      let user_created = await authService.createUserCredentials(user.email, user.password)
      if(user_created.code == 201){
        authService.createUserProfile(user_created.data, user.data)
        return user_created
      }else{
        return user_created
      }
    },
    async UPDATE_USER (user){
      let update_user = await authService.updateUser(user)
      return update_user
    },
    async UPDATE_USER_BY_ATTRIBUTE (user) {
      let update_user = await authService.updateUserByAttribute(user)
      return update_user
    },
    async FETCH_USERS () {
      this.users = await authService.getUsers()
      console.log("FETCH_USERS", this.users)
    }
  },
});
