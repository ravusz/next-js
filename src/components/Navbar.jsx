import React from 'react';
import Link from 'next/link'

const Navbar = () => {

  return (
    <nav>
      <Link href="/posts">Posts</Link>
    </nav>
  );
};

export default Navbar;
