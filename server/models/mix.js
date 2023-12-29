const db = require('../db');

class MixModel {
    // Find all mixes
    
    static async findAll() {
        try{
            console.log('Fetching all events');
            const result = await db.query(`SELECT * FROM mixes`);
            return result.rows;
        } catch (error) {
            console.error('Error fetching all mixes', error);
        }
    } 
        
    // Create a new mix
    static async create(mixData) {
        try {
            console.log('Creating new mix:', Title);
            const { TrackID, Title, PlaylistID, Playlist_Title, Release_Date, Genre } = mixData;
            const result = await db.query(
                `INSERT INTO mixes (TrackID, Title, PlaylistID, Playlist_Title, Release_Date, Genre)
                VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [TrackID, Title, PlaylistID, Playlist_Title, Release_Date, Genre]
                );
                return result.rows[0];
            } catch (error) {
                console.error("Error creating new mix");
                throw error;
            }
    }

    // Update an existing mix
    static async update(mixId, mixData) {
        try {
            console.log(`Updating mix with id ${mixId}`);
            const { Title, PlaylistID, Playlist_Title, Release_Date, Genre } = mixData;
            const result = await db.query(
                `UPDATE mixes SET Title = $2, PlaylistID = $3, Playlist_Title = $4, Release_Date = $5, Genre = $6 
                WHERE id = $1 RETURNING *`, 
                [mixId, Title, PlaylistID, Playlist_Title, Release_Date, Genre]
                );
                
                if (result.rows.length === 0) {
                    throw new Error(`No mix found with id ${mixId}`);
                }
                return result.rows[0];
            } catch (error) {
                console.error(`Error updating event with ID ${mixId}`);
                throw error
            }
    }
    
    // Delete a mix
    static async delete(mixId) {
        try {
            console.log(`Deleting mix with Id ${mixId}`);
            const result = await db.query(
                `DELETE FROM mixes WHERE id = $1 RETURNING *`,
                [mixId]
                );
                
                if (result.rows.length === 0) {
                    throw new Error(`No mix found with id ${mixId}`);
                }
                return result.rows[0];
            } catch (error) {
                console.error(`Error deleting mix with ID ${mixId}`);
                throw error;
            }
    }
}

module.exports = MixModel;
