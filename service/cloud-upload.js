const cloudinary = require('cloudinary').v2;
const { promisify } = require('util');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

class UploadFileAvatar {
  constructor(destination) {
    this.destination = destination;
    this.uploadCloud = promisify(cloudinary.uploader.upload);
  }

  async save(filePath, idUserCloud) {
    const { public_id: returnIdUserCloud, secure_url: avatarURL } =
      await this.uploadCloud(filePath, {
        public_id: idUserCloud,
        folder: this.destination,
        transformation: { width: 250, height: 250, crop: 'pad' },
      });

    return {
      avatarURL: avatarURL,
      returnIdUserCloud: returnIdUserCloud.replace(`${this.destination}/`, ''),
    };
  }
}

module.exports = UploadFileAvatar;
