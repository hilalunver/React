import React from "react";

export const users = [
  {
    username: "hilal",
    password: "1",
  },
  {
    username: "adem",
    password: "2",
  },
];

function Login() {
  return (
    <div>
      <div>
        <p>Kullanıcı Adınız</p>
        <input type="text" />
      </div>
      <div>
        <p>Şifreniz</p>
        <input type="text" />
      </div>

      <button>Giriş Yap</button>
    </div>
  );
}

export default Login;
