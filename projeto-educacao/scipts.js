
    function submitForm() {
        // Obtém o valor selecionado no seletor "userRole"
        const userRole = document.getElementById('userRole').value;

        // Redireciona com base na seleção
        if (userRole === 'aluno') {
            console.log('Redirecionando para aluno.html');
            window.location.href = 'aluno.html';
        } else if (userRole === 'professor') {
            console.log('Redirecionando para professor.html');
            window.location.href = 'professor.html';
        }
    }