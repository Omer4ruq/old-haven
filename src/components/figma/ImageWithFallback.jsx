export function ImageWithFallback({ src, alt, className = '', ...props }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      {...props}
    />
  );
}