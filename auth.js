// إعداد Appwrite للمصادقة
const authClient = new Appwrite.Client();

authClient
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6afe09ed0002aa765acb");

const authAccount = new Appwrite.Account(authClient);

// التحقق من تسجيل دخول المدرس
async function isLoggedIn() {
  try {
    const user = await authAccount.get();

    return user.email.toLowerCase() === "teacher@gmail.com";

  } catch (error) {
    return false;
  }
}

// تسجيل الخروج
async function logout() {
  try {
    await authAccount.deleteSession("current");
  } catch (error) {
    console.log(error);
  }

  location.href = "login.html";
}

// إعداد زر الإضافة
document.addEventListener("DOMContentLoaded", async function () {

  const loggedIn = await isLoggedIn();

  const addButton = document.getElementById("addButton");

  if (addButton) {
    addButton.textContent = loggedIn
      ? "إضافة مشروع"
      : "تسجيل الدخول للإضافة";

    addButton.onclick = function () {
      location.href = loggedIn ? "add.html" : "login.html";
    };
  }

  const page = location.pathname.toLowerCase().split("/").pop();

  if (page === "add.html" && !loggedIn) {
    location.replace("login.html");
  }

});
