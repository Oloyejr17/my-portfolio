"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center text-center border-t border-gray-800 space-y-2">
        <p className="text-gray-400 text-sm md:text-base">
          © {new Date().getFullYear()} Oloye Jr.
        </p>
       
      </div>
    </footer>
  );
}
