/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {hostname: "imgur.com"},
            {hostname: "i.imgur.com"},
            {hostname: "photos.marinetraffic.com"}
        ]
    }
}

module.exports = nextConfig
