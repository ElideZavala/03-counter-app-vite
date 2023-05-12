export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_PapiChulo'
});

export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre,
    phone: 123456789
})

console.log( getUser );
console.log( getUsuarioActivo );



