import React from "react";

export default function Footercomp (){
  return(
    <footer className="absolute bottom-0 w-full">
      <div className="bg-gradient-to-r from-black via-zinc-900 to-zinc-700">
        <ul className="flex justify-center list-none m-2 p-2">
          <li><a href="/" className="text-white hover:text-gray-200 px-4 cursor-pointer">Anasayfa</a></li>
          <li><a href="/" className="text-white hover:text-gray-200 px-4 cursor-pointer">Hakkımızda</a></li>
          <li><a href="/" className="text-white hover:text-gray-200 px-4 cursor-pointer">Misyonumuz</a></li>
          <li><a href="/" className="text-white hover:text-gray-200 px-4 cursor-pointer">İletişim</a></li>
        </ul>
        <p className="text-gray-400 text-right p-4 m-0">© 2024 Brave icu. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};