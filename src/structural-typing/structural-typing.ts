type VerifyUserFn = (user: User,receivedValue:User) => boolean;
type User = {username: string, password:string};

const verifyUser: VerifyUserFn = (user, receivedValue) =>{
  return (
    user.username === receivedValue.username && user.password === receivedValue.password
  );
};

const dbUser = {
  username: "João",
  password: "123456"
}

const receivedUser = {
  username: "João",
  password: "654321"
}

const loggedIn = verifyUser(dbUser, receivedUser);
console.log(loggedIn);
