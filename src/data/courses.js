export const courses = [
  // THEORY
  {
    id: 'discrete',
    name: 'Discrete Mathematics',
    zone: 'theory',
    pos: [0, 0, -6],
    learned: [
      'Set & relation thinking',
      'Graph-based reasoning',
      'Formal logic and proofs',
    ],
    value:
      'Built the mental foundation for algorithms, DBMS relations, and system modeling.',
    description: 'Trained my mind to think in structures and relations for algorithms, databases, and modeling.',
    models: ['Set algebra', 'Graph traversal', 'Predicate logic'],
    connects: 'Discrete → DSA → DBMS',
    status: 'completed',
    hint: 'Trained my mind to think in structures and relations',
  },
  {
    id: 'toc',
    name: 'Theory of Computation',
    zone: 'theory',
    pos: [2, 0, -6],
    learned: [
      'Automata models',
      'Formal grammars',
      'Limits of computation',
    ],
    value:
      'Enabled me to understand what computers can and cannot compute.',
    description: 'Built intuition for formal models, languages, and the limits of computation.',
    models: ['Finite automata', 'CFGs', 'Decidability boundaries'],
    connects: 'TOC → Compilers → Systems',
    status: 'completed',
    hint: 'Trained my mind to reason about computation itself',
  },

  // SYSTEMS
  {
    id: 'dld',
    name: 'Digital Logic Design',
    zone: 'systems',
    pos: [-6, 0, 0],
    learned: [
      'Logic gates',
      'FSMs',
      'Hardware abstraction',
    ],
    value:
      'Helped me understand computation at the hardware logic level.',
    description: 'Reinforced how low-level logic composes into systems and machines.',
    models: ['Boolean algebra', 'FSM design', 'Circuit abstraction'],
    connects: 'DLD → CA → Systems',
    status: 'completed',
    hint: 'Trained my mind to think in hardware states',
  },
  {
    id: 'ca',
    name: 'Computer Architecture',
    zone: 'systems',
    pos: [-6, 0, 2],
    learned: [
      'Instruction cycles',
      'Pipelining',
      'Memory hierarchy',
    ],
    value:
      'Taught me how software interacts with physical hardware.',
    description: 'Connected low-level hardware to high-level performance thinking.',
    models: ['Pipeline hazards', 'Cache locality', 'CPU datapath'],
    connects: 'CA → OS → Performance',
    status: 'completed',
    hint: 'Trained my mind to think close to the machine',
  },

  // PROGRAMMING
  {
    id: 'spl',
    name: 'Structured Programming (C)',
    zone: 'programming',
    pos: [6, 0, 0],
    learned: [
      'Pointers & memory',
      'Procedural design',
      'File handling',
    ],
    value:
      'Built my understanding of low-level program execution.',
    description: 'Built a strong understanding of memory and program control flow.',
    models: ['Stack vs heap', 'Pointer arithmetic', 'File I/O'],
    connects: 'C → Systems → Performance',
    status: 'completed',
    hint: 'Trained my mind to respect memory and structure',
  },
  {
    id: 'oop',
    name: 'Object-Oriented Programming',
    zone: 'programming',
    pos: [6, 0, 2],
    learned: [
      'Abstraction',
      'Encapsulation',
      'Polymorphism',
    ],
    value:
      'Enabled scalable and maintainable software design.',
    description: 'Trained me to structure large software systems cleanly.',
    models: ['SOLID principles', 'Design patterns', 'Class hierarchies'],
    connects: 'OOP → Architecture → Enterprise',
    status: 'completed',
    hint: 'Trained my mind to model real systems',
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    zone: 'programming',
    pos: [6, 0, 4],
    learned: [
      'Time complexity',
      'Trees & graphs',
      'Optimization thinking',
    ],
    value:
      'Shaped my algorithmic problem-solving ability.',
    description: 'Sharpened my skill to analyze performance and craft efficient logic.',
    models: ['Big-O analysis', 'Graph traversal', 'Greedy techniques'],
    connects: 'DSA → DBMS → Backend',
    status: 'completed',
    hint: 'Trained my mind to optimize and reason',
  },

  // DATA (RUNNING)
  {
    id: 'dbms',
    name: 'Database Management Systems',
    zone: 'data',
    pos: [0, -1.5, 6],
    learned: ['SQL', 'Normalization', 'Relational algebra'],
    value:
      'Actively learning how data is structured, queried, and optimized.',
    description: 'Deepening my understanding of data modeling, querying, and performance.',
    models: ['Normalization', 'Indexing', 'Query planning'],
    connects: 'Discrete → DBMS → Systems',
    status: 'running',
    hint: 'Knowledge actively evolving',
  },
  {
    id: 'sad',
    name: 'System Analysis & Design',
    zone: 'data',
    pos: [2, -1.5, 6],
    learned: ['SDLC', 'DFD', 'ER modeling'],
    value:
      'Developing system-level thinking and requirement analysis.',
    description: 'Bridging business requirements with robust system design.',
    models: ['ER modeling', 'DFD flows', 'Stakeholder mapping'],
    connects: 'SAD → Architecture → Engineering',
    status: 'running',
    hint: 'Knowledge actively evolving',
  },
];

export const runningCourses = courses.filter((course) => course.status === 'running');
