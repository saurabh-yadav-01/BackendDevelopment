const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Health check endpoint
router.get('/', async (req, res) => {
    try {
        // Check database connection
        const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
        
        // Get memory usage
        const memoryUsage = process.memoryUsage();
        
        // Get uptime
        const uptime = process.uptime();
        
        res.json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            database: dbStatus,
            memory: {
                heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`,
                heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)}MB`,
                external: `${Math.round(memoryUsage.external / 1024 / 1024)}MB`
            },
            uptime: `${Math.round(uptime)} seconds`,
            environment: process.env.NODE_ENV
        });
    } catch (error) {
        res.status(500).json({
            status: 'unhealthy',
            error: error.message
        });
    }
});

module.exports = router; 