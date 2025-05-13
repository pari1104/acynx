document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
  
    let errorMessage = document.getElementById('error-message');
    let resultMessage = document.getElementById('result-message'); // Foydalanuvchi ma'lumotlarini ko'rsatish joyi
  
    // Parollarni tekshirish
    if (password !== confirmPassword) {
      errorMessage.textContent = "Parollar bir xil emas!";
      resultMessage.textContent = ""; // Xato bo'lsa, natijani tozalash
      return;
    }
  
    // Xato xabarini tozalash
    errorMessage.textContent = "";
  
    // Foydalanuvchi ma'lumotlarini ekranda ko'rsatish
    resultMessage.innerHTML = `
      <h3>Ro'yxatdan o'tgan foydalanuvchi:</h3>
      <p><strong>Ism:</strong> ${username}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Parol:</strong> ${password}</p>
    `;
    
    // Formani tozalash
    document.getElementById('registerForm').reset();
  });
  