import React from "react";

function GreetingText() {
  return (
    <div className="greeting-text-bg">
      <h1>
        System
        <span className="text-white">
          .<span className="text-[#e06c75]">out</span>.
        </span>
        <span className="text-[#61afef]">println</span>&#40;&quot;
      </h1>
      <div className="string flex flex-col text-center animate-move">
        <h1 className="greeting en">Hello World!</h1>
        <h1 className="greeting es">¡Hola Mundo!</h1>
        <h1 className="greeting de">Hallo Welt!</h1>
        <h1 className="greeting it">Ciao Mondo!</h1>
      </div>
      <h1 className="closure before:bg-gray-600 after:bg-gray-600">
        &quot;&#41;;
      </h1>
    </div>
  );
}

export default GreetingText;
