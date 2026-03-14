import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Aikido Mariánské Lázně</h3>
            <p className="text-gray-300 text-sm">
              Myšlenkou cvičení aikida je rozvoj těla i ducha a dokázat se ubránit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Tréninky</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Úterý 18:30 – 20:00</li>
              <li>Pátek 17:30 – 19:00</li>
              <li>Tyršova ulice, Mariánské Lázně</li>
              <li>(za zimním stadiónem)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Josef Pavlovic – 607 517 967</li>
              <li>
                <a href="mailto:mail@josefpavlovic.cz" className="hover:text-white underline">
                  mail@josefpavlovic.cz
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/aikidoml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Aikido Mariánské Lázně – BUDO CLUB</p>
        </div>
      </div>
    </footer>
  );
}
