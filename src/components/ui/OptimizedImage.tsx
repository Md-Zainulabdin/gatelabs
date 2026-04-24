import React from "react";
import { motion } from "motion/react";
import { useImageLoader } from "@/src/hooks/useImageLoader";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized image component for Cloudinary images
 * - Automatically preloads with optimization parameters
 * - Shows loading state while image is fetching
 * - Provides error fallback
 * - Uses key to force instant re-render on src change
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  onLoad,
  onError,
}) => {
  const { isLoaded, error, src: optimizedSrc } = useImageLoader(src);

  // Force React to treat each image source as a new element for instant updates
  const imageKey = `img-${src}`;

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <p className="text-zinc-500 text-sm">Failed to load image</p>
      </div>
    );
  }

  return (
    <>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`flex items-center justify-center animate-pulse ${className}`}
        >
          <p className="text-zinc-400 text-sm">Loading image...</p>
        </motion.div>
      )}

      {isLoaded && (
        <motion.img
          key={imageKey}
          src={optimizedSrc}
          alt={alt}
          className={className}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onLoad={() => {
            onLoad?.();
          }}
          onError={() => {
            onError?.();
          }}
          loading="eager"
          decoding="async"
        />
      )}
    </>
  );
};
