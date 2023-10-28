export default function RootLayout({ children }) {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("/build.jpeg")',
          filter: "blur(5px)",
          opacity: 0.6, 
        }}
      />
      {children}
    </div>
  );
}
