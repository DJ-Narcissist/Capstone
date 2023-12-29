
const db = require('../db');

class GalleryModel {
    // Method to get all pictures in gallery
    static async getAll () {
        const result = await db.query(`SELECT * FROM gallery`);
        return result.rows;
    }

    // Method to add new image to the gallery
    static async addImage (ImageData) {
        const { imageUrl, description, uploadDate } = ImageData;
        
        const result = await db.query(
            `INSERT INTO gallery (imageUrl, description, uploadDate)
            VALUES ($1, $2, $3) RETURNING *`
            [imageUrl,description, uploadDate]
        );
        return result.rows[0];
    }

    // Method to update an image from the gallery
    static async updateImage (imageId, ImageData) {
        const { imageUrl,description, uploadDate } = ImageData;
        const result = await db.query(
            `UPDATE gallery SET imageUrl = $1, description = $2, uploadDate = $3
            WHERE id = $4 RETURNING * `
            [imageUrl,description, uploadDate]
        );
        if (result.rows.length === 0) {
            throw new Error (`No image found with id ${imageId}`);
        }
        return result.rows[0];
    }

    // Method to delete an image from the gallery
    static async removeImage (imageId) {
        const result = await db.query(
            `DELETE FROM imageId WHERE id = $1 RETURNING *`,
            [imageId]
        );
        
        if (result.rows.length === 0) {
            throw new Error (`No event found with id ${imageId}`);
        }
        return result.rows[0];
    }

}

module.exports = GalleryModel;