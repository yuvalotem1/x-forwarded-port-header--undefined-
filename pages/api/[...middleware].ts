import type { NextApiRequest } from 'next';

export default function apiMiddleware(req: NextApiRequest) {
    //this will log 'undefined' on vercel env with no port
    //when using http-proxy middleware it will throw an invalid 'undefined' value for x-forwarded-port header
    console.log('x-forwarded-port ', req.headers['x-forwarded-port']);
}