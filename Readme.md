on redux

{
"email": "kev3@gmail.com",
"username": "kev3",
"password": "12345678"
}
on newbranch
https://youtu.be/U1Tg2nVAyxw?si=qbBf9m486zXftAbi
https://youtu.be/0Tz2xLZHAEA?si=WmURDQ9qTob49xLa

on admin
netstat -aon | findstr :5173
taskkill /PID 6616 /F

on auth



The email and password you entered did not match our records. Please double-check and try again.

inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200








necesito crear una base de datos para registrar cursos, donde el usuario se pueda matricular a esos cursos 


  useEffect(() => {
    if (user) {
      if (user.is_staff) {
        navigate("/admin"); // Redirect to /admin if user is staff
      } else {
        navigate("/home"); // Redirect to /home if user is not staff
      }
    }
  }, [user, navigate]);