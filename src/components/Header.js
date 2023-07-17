import React from "react";

const Header = () => {
    return (
      <header className="py-8">
      <div className="container mx-auto">
        <div>
          {/* Name */}
          <a href="#">
            <h1 className="font-primary text-[35px]">Aayushi Sinha</h1>
          </a>
          <button>My Resume</button>
        </div>
      </div>
      </header>
    );
  }
  
  export default Header;