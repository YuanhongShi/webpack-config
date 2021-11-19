const plugins = []

if (process.env.NODE_ENV !== 'production') {
    plugins.push('react-reflesh/babel')
}
module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: plugins,
}
