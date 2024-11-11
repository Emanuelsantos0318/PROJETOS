function showPage(pageId) {
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
      document.getElementById('registerError').innerText = "As senhas não coincidem.";
      document.getElementById('registerError').style.display = 'block';
      return;  
  }

  try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.firestore().collection('users').doc(userCredential.user.uid).set({
          fullName,
          email
      });

      document.getElementById('registerSuccess').innerText = "Cadastro realizado com sucesso! Redirecionando para o login...";
      document.getElementById('registerSuccess').style.display = 'block';
      document.getElementById('registerError').style.display = 'none';

      setTimeout(() => showPage('loginPage'), 2000);
  } catch (error) {
      console.error("Erro ao cadastrar usuário:", error.message);
      if (error.code === 'auth/email-already-in-use') {
          document.getElementById('registerError').innerHTML = 
              `O email já está em uso. <a href="javascript:void(0)" onclick="showPage('loginPage')">Tente fazer login aqui.</a>`;
      } else {
          document.getElementById('registerError').innerText = error.message;
      }
      document.getElementById('registerError').style.display = 'block';
  }
});

document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        alert("Login bem-sucedido!");
        window.location.href = "home.html";  
    } catch (error) {
        console.error("Erro ao fazer login:", error.message);
    }
});

document.getElementById('forgotPasswordForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('recoveryEmail').value;

    try {
        await firebase.auth().sendPasswordResetEmail(email);
        document.getElementById('recoverySuccess').style.display = 'block';
    } catch (error) {
        console.error("Erro ao enviar email de recuperação:", error.message);
    }
});

function validatePassword(password) {
    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-8]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    document.getElementById('lengthCheck').classList.toggle('valid', hasLength);
    document.getElementById('upperCheck').classList.toggle('valid', hasUpper);
    document.getElementById('numberCheck').classList.toggle('valid', hasNumber);
    document.getElementById('specialCheck').classList.toggle('valid', hasSpecial);

    return hasLength && hasUpper && hasNumber && hasSpecial;
}

document.getElementById('password').addEventListener('input', function() {
    validatePassword(this.value);
});
