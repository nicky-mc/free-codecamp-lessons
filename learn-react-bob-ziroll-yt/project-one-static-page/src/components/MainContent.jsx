import React from "react";

export default function MainContent () {
    return (
        <main>
            <div className='main-content'>
                <h2>This is the Main Content</h2>
                
            </div>
            <div className='pa</div>ragraph-content'>
                <p className="imperative">  Imperative Coding</p>
                <p> Imperative coding is a programming paradigm that focuses on describing how a program operates. It involves giving the computer a sequence of instructions or statements to perform specific tasks. This approach is characterized by explicit commands that change a program's state step by step. In imperative programming, the emphasis is on how to achieve a desired outcome, detailing the control flow with loops, conditionals, and function calls.

                    In contrast to declarative programming, which focuses on what the outcome should be, imperative programming requires the programmer to define the exact sequence of operations. This can make the code more straightforward to follow for those familiar with the procedural steps but can also lead to more complex and less maintainable code as the program grows in size and complexity. Common imperative programming languages include C, C++, and JavaScript.  </p>
                <p className="declarative">Declarative Coding</p>
                <p>Declarative coding is a programming paradigm that focuses on describing what a program should accomplish without specifying the exact steps to achieve it. Instead of giving the computer a sequence of commands to execute, declarative programming involves defining the desired outcome or behavior and letting the system determine how to achieve it. This approach is characterized by a higher level of abstraction, allowing developers to focus on the problem domain rather than the implementation details.

                    In declarative programming, the emphasis is on what the program should do, not how it should do it. This can lead to more concise, readable, and maintainable code, as the logic is separated from the control flow. Declarative programming is often used in functional programming languages like Haskell, Scala, and Elm, as well as in declarative query languages like SQL.  </p>
            </div>
            <div className="image-content">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQGHPF3CANh07Q/profile-displayphoto-shrink_800_800/B4EZOSVsYqGYAc-/0/1733326988031?e=1745452800&v=beta&t=8ehQMLJN6IiUIE_wcAlGrKxGUHJl6YavLdbsYwx2pqY" ></img>
            </div>
        </main>
    );
}