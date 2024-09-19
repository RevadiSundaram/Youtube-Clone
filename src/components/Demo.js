import React, { useMemo, useState } from 'react';
import {findNthPrime} from "../utils/helper";

const Demo = () => {
    const [text, setText] = useState("");
    const [isDark, setIsDark] = useState(false);

    console.log("Renderinggg");

    // const cachedValue = useMemo(calculateValue, dependencies)
    const prime = useMemo(() => findNthPrime(text), [text]);
    // keep memoizing it and only change when input text changes -> dependency
    
    
  return (
    <div className={'m-4 p-2 w-[500px] h-[500px] border border-black'+(isDark && ' bg-gray-900 text-white')}>
        <div>
            <button className='m-10 p-2 bg-green-200' onClick={() => setIsDark(!isDark)}>
                Toggle
            </button>
        </div>
        <div>
            <input type='text' className='border border-black w-[300px] px-2' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <h1>Nth prime: {prime}</h1>
    </div>
  )
}

export default Demo; 