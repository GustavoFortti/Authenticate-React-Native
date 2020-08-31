export default function singIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
               token: 'j98fy4875gt9fh835hf872gh45f87gh45g87f',
               user: {
                   name: 'Gustavo',
                   email: 'gustavofortti@gmail.com',
               },
            });
        }, 2000);
    });
}