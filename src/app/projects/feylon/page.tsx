import {ProjectPage, ProjectSection} from "$c/ProjectPage";
import {projects} from "@/project";

export default function PageProject() {
  return (
    <ProjectPage project={projects.feylon}>
      <ProjectSection>
        <p>
          Feylon is a Concatenative Stack-Oriented Programming Language inspired by Forth and Porth.
          Feylon contains two modes for executing programs: simulation and compilation.
        </p>
        <p><strong>Simulation mode</strong></p>
        <p>
          Simulation mode works like an interpreter: Feylon reads the source code and executes it.
          Low level functions like syscalls and linking are not available in this mode due to the safety constraints of
          rust.
          Some syscalls like writing to stdout/stderr are simulated instead.
        </p>
        <p><strong>Compilation mode</strong></p>
        <p>
          In compilation mode, Feylon reads the source code and compiles it using a target-compiler.
          A target compiler can theoretically be anything that creates output from input.
          Feylon ships with a built-in win64 compiler and an elf64 compiler.
        </p>
      </ProjectSection>
      <ProjectSection title={"Source code parsing"}>
        <p>
          Feylon parses source code word by word, without creating an
          {" "}<a href={"https://en.wikipedia.org/wiki/Abstract_syntax_tree"}>AST</a>.
        </p>
        <p>
          Source code is first parsed into a list of words. There are 4 types of words:
          <ul>
            <li className={"pl-4"}> - Numbers: a continues set of digits, separated by spaces</li>
            <li className={"pl-4"}> - Characters: a singular character surrounded by single quotes</li>
            <li className={"pl-4"}> - Strings: one or more words surrounded by double quotes</li>
            <li className={"pl-4"}> - Identifiers: anything that is not one of the above, separated by spaces</li>
          </ul>
        </p>
        <p>
          These words are then parsed into tokens. A token can be seen as a tuple of a word and an operation.
          An operation can be defined as &#34;something that needs to be done&#34; like PushInt or ConstRef.
          These tokens function contain the information needed to create proper instructions later on.
        </p>
        <p>
          The third stage, evaluation, pseudo-executes the parsed tokens from start to finish to calculate the values of
          constants and the size of memory blocks.
          For example: a constant <code>X</code> with a value <code>1 2 +</code> will be evaluated to <code>3</code>
          Because constants can only be defined once, the evaluator can safely replace all references to these constants
          with the value of the constant, minimizing the amount of instructions that need to be generated.
          The same goes for memory blocks, but a reference to the memory location is used during replacement instead of
          the calculated size.
        </p>
        <p>
          The fourth and final source code parsing step is linking.
          The linker walks through the source code and sets all references needed by the program.
          Things like if-statements get replaced by jump-instructions and pointers.
        </p>
        <p>
          Lastly, Feylon runs the linked source code through the type checker.
          The type checker makes sure that the type of data on the stack is enforced.
          The type checker will throw an error when type signatures are not adhered to, and shows the location in the
          source code where this happened.
        </p>
        <p>
          After all of these steps, the program source code is now transformed into a list of instructions ready for
          compilation or simulation.
        </p>
      </ProjectSection>
      <ProjectSection title={"Simulation"}>
        <p>
          Feylon contains a simulator for programs.
          The simulator simulates a working cpu and some registers, memory
          blocks and a string pool.
          The simulator can be incredibly useful for prototyping a program, but cannot handle
          low-level things like syscalls.
        </p>
      </ProjectSection>
      <ProjectSection title={"Compilation"}>
        <p>
          Feylon can compile feylon programs into virtually anything, as long as there is a compiler-target for it.
          By default, Feylon ships with an win64 compiler for windows and elf64 compiler for linux.
          Compilers don&apos;t have to actually compile to binaries; one could write a compiler-target that compiles
          into bytecode for the <a href={"https://en.wikipedia.org/wiki/Java_virtual_machine"}>Java Virtual Machine.</a>
        </p>
      </ProjectSection>
    </ProjectPage>
  );
}