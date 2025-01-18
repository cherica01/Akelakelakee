/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // Ajoutez ici le domaine non configuré
  },
  eslint: {
    // Ignore les erreurs ESLint durant le déploiement
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
