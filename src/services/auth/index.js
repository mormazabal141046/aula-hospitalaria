import { db, auth, firestore} from "boot/firebase";

const signIn = async (email, password) => {
//   console.log("signIn 2");

  try {
    const authenticate = auth.getAuth();
   //  console.log("authenticate", authenticate);

        // Configuración del Estado de Sesión
        // auth.browserSessionPersistence = Estado persistirá hasta que se cierre la ventana o pestaña / SessionStorage
        // auth.browserLocalPersistence = Estado persistirá aun cuando se cierre la ventana o pestaña / LocalStorage
        return auth.setPersistence(authenticate, auth.browserLocalPersistence)
        .then(async () => {
            let { user } = await auth.signInWithEmailAndPassword(authenticate, email, password);
            user = user.toJSON();
            // console.log("user",user);
            let data = await getUserInfo(user);
            return { user, data };

          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log("errorCode",errorCode);
            // console.log("errorMessage",errorMessage);
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

const getCurrentUser = () => {
  return new Promise(function(resolve, reject) {
      try {
        auth.onAuthStateChanged(auth.getAuth(), (authUser) => {
          if (authUser) {
            resolve(authUser.toJSON());
          } else {
            resolve(null);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
};

const getUserInfo = async user => {
  let uid = user.uid
  let data = null;
  try {
      let doc = firestore.doc(db, 'users', uid)
      let query = await firestore.getDoc(doc);
      if (query.exists()) {
         //  console.log("Document data:", query.data());
          data =  query.data()
        }
      return data;
  } catch (error) {  }
};

const getUsers = async () => {
  let list = []
  try {
      let collection = firestore.collection(db, 'users')
      // console.log("collection", collection)
      let allData = await firestore.getDocs(collection);
      // console.log("allData", allData)
      allData.forEach(doc => {
          let data = doc.data()
          data['id'] = doc.id
          list.push(data)
      });
      // console.log("list", list);
      return list
  } catch (error) {
   //  console.log("errosss getUsers", error);
  }

};

const createUserCredentials = async (email, password) => {
  // console.log("createUserCredentials");
  try {
      const emailExist = await checkEmailExist(email)
      // console.log("emailExist",emailExist);
      if(emailExist){
          return { code : 202, status: 'exist', message: "El email ya está registrado" }
      }
      const authenticate = auth.getAuth();
      let user = await auth.createUserWithEmailAndPassword(authenticate, email, password)
          .then((userCredential) => {
              return { code : 201, status: 'created', message: "Credenciales Registradas", data: userCredential.user }
          })
          .catch((error) => {
              return { code : 400, status: 'error', message: "Error al procesar Usuario" }
          });

      return user
  } catch (error) {
      throw error;
  }
};

const checkEmailExist = async (email) => {
  const authenticate = auth.getAuth();
  const resp = await auth.fetchSignInMethodsForEmail(authenticate, email).then(resp => {
      // console.log("checkEmailExist resp", resp)
      return resp.length == 0 ? false : true
  });
  return resp
};

const createUserProfile = async (auth_user, user_data) => {
  let uid_doc = auth_user.uid;
  user_data['created_at'] = auth_user.metadata.creationTime
  try {
      let resp = await firestore.setDoc(firestore.doc(db, "users", uid_doc), user_data).then(doc =>{
          return { code : 201, status: 'created', message: "Usuario Registrado!" }
      })
      return resp
  } catch (error) {
      return { code : 400, status: 'error', message: "No se pudo registrar el usuario!" }
  }
};

const updateUser = async (data) => {
   let uid_doc = data.id;
   try {
      let doc = firestore.doc(db, "users", uid_doc)
      let resp = await firestore.updateDoc(doc, data.data).then(()=>{
         return { code : 200, status: 'updated', message: "Usuario Actualizado!" }
      })
      return resp
   } catch (error) {
      return { code : 400, status: 'error', message: "No se pudo actualizar el usuario!" }
   }
};

const updateUserByAttribute = async (data) => {
   let uid_doc = data.id;
   try {
      let doc = firestore.doc(db, "users", uid_doc)
      let resp = await firestore.updateDoc(doc, data.update).then(()=>{
         return { code : 200, status: 'updated', message: "Usuario Actualizado!" }
      })
      return resp
   } catch (error) {
      return { code : 400, status: 'error', message: "No se pudo actualizar el usuario!" }
   }
};

const changeUserPassword = async (data)=>{
  auth.updatePassword(auth.getAuth().currentUser, data).then(() => {
  }).catch((error) => {});
}
const forgotPassword = async (email)=>{
  auth.sendPasswordResetEmail(auth.getAuth(), email).then(() => {
      // console.log("Email Enviado");
  }).catch((error) => {
      // console.log("Error en email");
  });
}

export { signIn, signOut, getUsers, createUserCredentials, createUserProfile, updateUserByAttribute, updateUser, getCurrentUser, changeUserPassword, forgotPassword };
