import "../globals.css";
export const metadata = {
  title: "Sing-up | Sign-in Movies - MOVIE DB",
  description:
    "If you login than you can save movie watch later and many benifet also this type.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-moviedb-black min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
