export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div style={{ margin: '30px', width: 'fit-content' }}>
      <img
        data-testId='imagetag'
        src={src}
        alt={alt}
        style={{
          borderRadius: borderRadius,
          width: width,
          height: height,
          fit: fit,
        }}
      />
    </div>
  );
};
