const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware')

const requestsAPI = (db) => {

    router.use(authenticateToken);

    router.get('/', async(req, res) => {
        try {
            const getAllQuery = `SELECT * from requests`;
            const requests = await db.query(getAllQuery);
            return requests.rows;
        } catch (err) {
            console.error('Error getting data', err);
            throw err;
        } 
    })

    router.delete('/:id', async (req, res) => {
        const { id } = req.params.id;
        try {
            deleteQuery = `DELETE FROM requests WHERE id = ${id} RETURNING *`;
            const result = await db.query(deleteQuery);

            if (result.rowCount === 0) {
                return res.status(404).json({ error: 'Request not found' });
            }

            res.json({ message: 'Request deleted successfully', deleted: result.rows[0] });
        } catch (err) {
            console.error('Error deleting request', err);
            res.status(500).json({ error: 'Failed to delete request', details: err.message });
        }
    })

    router.put('/:id', async (req, res) => {
        const { id } = req.params.id;
        const { resolved } = req.body;

        try {
            const updateQuery = `UPDATE requests SET resolved = ${resolved} WHERE id = ${id} RETURNING *;`

            if (result.rowCount === 0) {
                return res.status(404).json({ error: 'Request not found' });
            }

            res.json({ message: 'Request updated successfully', updated: result.rows[0] });

        } catch (err) {
            console.error('Error updating request', err);
            res.status(500).json({ error: 'Failed to update request', details: err.message });
        }
    })

    return router;
}

module.exports = requestsAPI;