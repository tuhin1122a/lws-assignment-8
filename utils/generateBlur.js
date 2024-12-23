import { getPlaiceholder } from "plaiceholder";
import { fallCackImg } from "@/utils/fallbackimg";

export const generateBase64Placeholder = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer(); // Fetch the image as an ArrayBuffer
    const { base64, img } = await getPlaiceholder(Buffer.from(buffer)); // Generate placeholder and dimensions
    return { base64, img };
  } catch (error) {
    return null;
  }
};

export const getPlaceholderData = async (posterPath) => {
  const effectivePath = posterPath || fallCackImg();
  try {
    const placeholderData = await generateBase64Placeholder(effectivePath);
    const { base64: blurDataURL, img } = placeholderData || {};

    return {
      blurDataURL,
      width: img?.width || 300, // Default width
      height: img?.height || 450, // Default height
    };
  } catch (error) {
    return {
      blurDataURL: null,
      width: 300,
      height: 450,
    };
  }
};
