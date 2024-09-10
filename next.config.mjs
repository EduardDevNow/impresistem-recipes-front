/** @type {import('next').NextConfig} */
import * as dotenv from 'dotenv';
// import { env } from 'process';

const env = dotenv.config({path: './.env'}).parsed;

const nextConfig = {
    env
};

export default nextConfig;
