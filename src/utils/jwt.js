import logger from '#config/logger.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key-change-in-production';
const JWT_EXPIRES_IN = '1d';

export const jwttoken = {
    sign: (payload) => {
        try {
            
        } catch (e) {
            logger.error('Failed to authenticate token', error);
            throw new Error('Failed to authenticate token');
        }
    }
}