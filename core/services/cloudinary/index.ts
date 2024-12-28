import { v2 as cloudinary } from "cloudinary";
import { Configs } from "../../configs";
// Configuration
cloudinary.config({
  cloud_name: Configs.cloudinary.cloudName,
  api_key: Configs.cloudinary.apiKey,
  api_secret: Configs.cloudinary.apiSecret,
});

class Cloudinary {
  async uploadImage(path: string, publicId: string) {
    // Upload an image
    const uploadResult = await cloudinary.uploader
      .upload(path, {
        public_id: publicId,
      })
      .catch((error:any) => {
        console.log(error);
      });

    return uploadResult;
  }

  async optimizeAsset(publicId: string) {
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url(publicId, {
      fetch_format: "auto",
      quality: "auto",
    });

    return optimizeUrl;
  }

  async cropAsset(publicId: string, width: Number, height: Number) {
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url(publicId, {
      crop: "auto",
      gravity: "auto",
      width,
      height,
    });

    return autoCropUrl;
  }
}

export const ImageCloud = new Cloudinary();