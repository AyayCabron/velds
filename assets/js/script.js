const mode = document.getElementById('mode_icon');

// Adiciona um ouvinte de evento de clique ao ícone de modo
mode.addEventListener('click', () => {
    const form = document.getElementById("login_form");
    
    // Verifica se o ícone de modo contém a classe 'fa-moon'
    if (mode.classList.contains('fa-moon')) {
        // Remove a classe 'fa-moon' e adiciona a classe 'fa-sun' ao ícone de modo
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        // Adiciona a classe 'dark' ao formulário para ativar o modo escuro
        form.classList.add('dark');

        return;
    }

    // Se o ícone de modo não contiver a classe 'fa-moon'
    // Adiciona a classe 'fa-moon' e remove a classe 'fa-sun' do ícone de modo
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');

    // Remove a classe 'dark' do formulário para desativar o modo escuro
    form.classList.remove('dark');
});
