//O Babel é um transpilador que te permite escrever javascript de uma maneira mais moderna
// @babel/cliente q permite interagir com @babel/core
// @babel/core é o centro nervoso do babel


module.exports = {
    presets: [
        '@babel/preset-env', //é um módulo especial que compilará nosso código para uma versão anterior do ECMASCRIPT
        ['@babel/preset-react', {
            runtime: 'automatic'
        }] //compila html no index.jsx
    ]
}