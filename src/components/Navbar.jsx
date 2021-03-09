import React from 'react';
import Link from 'next/link'

const Navbar = () => {

  return (
    <nav>
      <Link href="/people">People</Link>
      <Link href="/planets">Planets</Link>
      <Link href="/prisma">Prisma</Link>
    </nav>
  );
};

export default Navbar;
