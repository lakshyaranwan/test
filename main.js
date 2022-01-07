import "./style.css";
import { supabase } from "./supabase";

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const { user, session, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  console.log(user, session, error);
  form.reset();
});