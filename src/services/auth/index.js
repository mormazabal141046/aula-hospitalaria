import { auth } from "boot/firebase";

const signIn = async (email, password) => {
  console.log("signIn 2");

  try {
    const authenticate = auth.getAuth();
    console.log("authenticate", authenticate);

        // Configuración del Estado de Sesión
        // auth.browserSessionPersistence = Estado persistirá hasta que se cierre la ventana o pestaña / SessionStorage
        // auth.browserLocalPersistence = Estado persistirá aun cuando se cierre la ventana o pestaña / LocalStorage
        return auth.setPersistence(authenticate, auth.browserLocalPersistence)
        .then(async () => {
            let { user } = await auth.signInWithEmailAndPassword(authenticate, email, password);
            user = user.toJSON();
            console.log("user",user);
            // let data = await getUserInfo(user);
            return { user, data };

          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorCode",errorCode);
            console.log("errorMessage",errorMessage);
        });
    }catch(error){
        throw error;
    }
};

const signOut = async () => {
    try {
      await auth.signOut(auth.getAuth()).then(() => {
        const user = auth.currentUser;
        return !user;
      });
    } catch (error) {
      throw error;
    }
};


export { signIn, signOut };
