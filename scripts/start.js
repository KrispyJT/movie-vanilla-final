const { execSync } = require('child_process')

const port = process.env.PORT || 8080
let cmd = `serve --listen ${port}  --no-clipboard`

if (process.argv.length > 2) cmd += ` ${process.argv.slice(2).join(' ')}`

// eslint-disable-next-line no-console
console.log(`Running "${cmd}"...`)
console.log('****IF THE SERVER(s) LISTED HAVE PORT :10000, do not try to visit/open it, it is only for the test.***')


execSync(cmd, { stdio: 'inherit' })



const apiKey = "api_key_here"; // my key here


function fetchPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    
}
