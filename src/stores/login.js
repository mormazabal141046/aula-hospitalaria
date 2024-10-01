import { defineStore } from 'pinia';
import * as authService from "src/services/auth";

const initialState = {
  currentUser: ""
}

export const useLoginStore = defineStore('login', {
  state: () => initialState,
  getters: {
    fullName: (state) => state.currentUser ,
  },
  actions: {
    async SIGN_IN(email, password) {
      console.log("SIGN_IN");

      try {
        const { user, data } = await authService.signIn(email, password);
        if(!data.state){
          // errorAlert("Su cuenta se encuentra deshabilitada");
          return false
        }else{
          commit(mutationTypes.SET_CURRENT_USER, data);
          return true
        }
      } catch (error) {
        // errorAlert("Email y/o Contraseña Inválidos");
      }
  },

  async SIGN_OUT() {
    try {
      const response = await authService.signOut();
      // infoAlert("Su sesión ha sido cerrada correctamente.");
    } catch (error) {
      // errorAlert("Ha ocurrido un error mientras se cerraba su sesión.");
    }
  }
  },
});
