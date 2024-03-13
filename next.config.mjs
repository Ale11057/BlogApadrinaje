/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // Agregar la configuración images para desactivar la optimización
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
