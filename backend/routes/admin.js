const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware')

const requestsAPI = ({ db }) => {

    router.use(authenticateToken);

    router.get('/', async (req, res) => {
        try {
          const result = await db.query(
            'SELECT * FROM requests ORDER BY created_at DESC;'
          );
          return res.json(result.rows);
        } catch (err) {
          console.error('Error getting data', err);
          return res
            .status(500)
            .json({ error: 'Failed to fetch requests', details: err.message });
        }
      });

    router.delete('/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await db.query( 'DELETE FROM requests WHERE id = $1 RETURNING *;', [id]);

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
        const { id } = req.params;
        const { resolved } = req.body;

        try {
            const result = await db.query('UPDATE requests SET resolved = $1 WHERE id = $2 RETURNING *;', [resolved, id] );

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