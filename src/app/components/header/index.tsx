import React from "react";
import Image from "next/image";
export default function Headercomp (){
    return(
        <div>
            <nav className="bg-black">
                <a href="#"><img src="../assets/bravelogo.jpg" alt="Brave co" className="w-24 h-24 float-left"></img></a>
                <ul className="flex justify-center py-10">
                    <li><a href="/about-us" className="text-white hover:text-gray-200 px-4 cursor-pointer">Anasayfa</a></li>
                    <li><a href="/" className="text-white hover:text-gray-200 px-4 cursor-pointer">Hakkımızda</a></li>
                    <li><a href="/" className="text-white hover:text-gray-200 px-4 cursor-pointer">Misyonumuz</a></li>
                    <li><a href="/" className="text-white hover:text-gray-200 px-4 cursor-pointer">İletişim</a></li>
                </ul>
            </nav>
        </div>
    );
}