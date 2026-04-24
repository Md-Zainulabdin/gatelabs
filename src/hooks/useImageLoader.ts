import { useEffect, useState, useCallback } from "react";

interface UseImageLoaderReturn {
  isLoaded: boolean;
  error: boolean;
  src: string;
}

/**
 * Hook to manage optimized image loading from Cloudinary
 * - Preloads images with query parameters for optimization
 * - Manages loading/error states
 * - Ensures instant display on circuit switch
 */
export const useImageLoader = (imagePath: string): UseImageLoaderReturn => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Optimize Cloudinary URL with parameters for better loading
  const optimizedUrl = useCallback((url: string) => {
    if (!url || !url.includes("cloudinary")) return url;

    // Add Cloudinary optimization parameters if not already present
    const separator = url.includes("?") ? "&" : "?";
    const params = new URLSearchParams({
      auto: "format", // Auto-format for best compression
      w: "600", // Reasonable width for gate/circuit diagrams
      q: "auto", // Auto quality
    });

    return `${url}${separator}${params.toString()}`;
  }, []);

  const optimizedImagePath = optimizedUrl(imagePath);

  useEffect(() => {
    if (!optimizedImagePath) {
      setIsLoaded(true);
      return;
    }

    // Preload the image
    const img = new Image();

    const handleLoad = () => {
      setIsLoaded(true);
      setError(false);
    };

    const handleError = () => {
      setError(true);
      setIsLoaded(true); // Still mark as loaded to show fallback
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    // Start loading immediately
    img.src = optimizedImagePath;

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [optimizedImagePath]);

  return {
    isLoaded,
    error,
    src: optimizedImagePath,
  };
};
