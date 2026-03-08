import type { SubjectData } from "../_components/subject-page";

export const aiFoundations: SubjectData = {
  title: "AI Foundations",
  eyebrow: "Subject · Technology",
  intro:
    "A grounded introduction to how modern AI language models are built, trained, and deployed. Understanding these foundations is prerequisite knowledge for working effectively with any AI system.",
  concepts: [
    {
      title: "How Language Models Work",
      body: "Large language models are transformer-based neural networks trained to predict the next token in a sequence. Through this simple objective applied at enormous scale, they develop rich internal representations of language, reasoning, and world knowledge.",
    },
    {
      title: "Tokens & Context Windows",
      body: "Models process text as tokens — subword units smaller than words. Each model has a context window defining how many tokens it can process at once. Context limits directly affect memory, retrieval strategies, and conversational design.",
    },
    {
      title: "Embeddings",
      body: "Embeddings are dense vector representations of text or other data. Semantically similar content clusters together in embedding space. They are foundational to search, retrieval, classification, and recommendation systems.",
    },
    {
      title: "Inference vs Training",
      body: "Training is the computationally expensive process of adjusting model weights using vast datasets. Inference is the cheaper process of running a trained model to produce outputs. Most application development happens at inference time.",
    },
    {
      title: "Prompting & Evaluation",
      body: "Prompts are the primary interface between users and language models. Effective prompting involves context setting, role definition, instruction clarity, and output formatting. Evaluation measures model quality against defined criteria.",
    },
  ],
  lessons: [
    {
      title: "The Transformer Architecture",
      body: "Introduced in the 2017 paper 'Attention Is All You Need' (Vaswani et al.), the transformer replaced recurrent architectures with self-attention mechanisms. Attention allows the model to relate any token in a sequence to any other token, regardless of distance. This parallelizability enabled training at previously impossible scales.",
      tags: ["Architecture", "Attention", "Deep Learning"],
    },
    {
      title: "Understanding Tokenization",
      body: "Text is split into tokens using algorithms like Byte-Pair Encoding (BPE). A word like 'tokenization' may become two or three tokens. Token count directly affects API costs, memory usage, and what fits in a context window. English averages roughly 0.75 tokens per word.",
      tags: ["Tokenization", "BPE", "Context"],
    },
    {
      title: "Embedding Models and Semantic Search",
      body: "Dedicated embedding models convert text into vectors. Cosine similarity or dot product measures how semantically close two vectors are. These vectors power vector databases and underpin the entire retrieval layer in RAG systems.",
      tags: ["Embeddings", "Semantic Search", "Vectors"],
    },
    {
      title: "Prompt Engineering Principles",
      body: "Effective prompts are specific, structured, and include examples where ambiguity exists. Techniques include zero-shot prompting, few-shot prompting, chain-of-thought reasoning, and system prompt design. Prompts function as lightweight programs that shape model behavior without changing weights.",
      tags: ["Prompting", "Few-shot", "Chain-of-thought"],
    },
    {
      title: "Evaluating Model Outputs",
      body: "Evaluation strategies range from automated metrics (BLEU, ROUGE, perplexity) to human preference scoring to LLM-as-judge frameworks. Production systems typically rely on a combination of unit-level test cases, regression suites, and continuous sampling for quality monitoring.",
      tags: ["Evaluation", "Metrics", "Quality"],
    },
  ],
  notes: `Key distinction: prompting operates at inference time and requires no model retraining. Fine-tuning adjusts model weights and requires labeled data and compute.

Context window is not unlimited memory — it resets between sessions unless managed explicitly with retrieval or summarization.

Embeddings are the connective tissue between language models and structured data stores.`,
  sources: [
    {
      author: "Vaswani et al. — Google Brain, 2017",
      work: "Attention Is All You Need",
      description:
        "The foundational paper introducing the transformer architecture. Introduced multi-head self-attention and established the architecture now used in all major language models.",
    },
    {
      author: "Brown et al. — OpenAI, 2020",
      work: "Language Models are Few-Shot Learners (GPT-3)",
      description:
        "Demonstrated that scaling a language model to 175 billion parameters produced emergent few-shot learning capabilities without task-specific fine-tuning.",
    },
    {
      author: "Wei et al. — Google, 2022",
      work: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
      description:
        "Showed that prompting models to reason step-by-step dramatically improves performance on complex reasoning and arithmetic tasks.",
    },
  ],
};

export const ragSystems: SubjectData = {
  title: "RAG Systems",
  eyebrow: "Subject · Technology",
  intro:
    "Retrieval-Augmented Generation (RAG) extends language models with dynamic, citation-grounded knowledge retrieval. Understanding RAG architecture is essential for building accurate, trustworthy AI systems that cite their sources.",
  concepts: [
    {
      title: "What RAG Is",
      body: "RAG combines a retrieval system with a generative model. Rather than relying solely on knowledge baked into model weights during training, RAG retrieves relevant documents at query time and passes them as context for the model to ground its response.",
    },
    {
      title: "Chunking Strategy",
      body: "Documents must be split into retrievable chunks before indexing. Chunk size, overlap, and boundary logic directly affect retrieval quality. Poor chunking creates fragments that lack sufficient context for accurate generation.",
    },
    {
      title: "Vector Databases",
      body: "Vector databases (Pinecone, Weaviate, Qdrant, pgvector) store and index embedding vectors for approximate nearest-neighbor search. They are the retrieval layer that makes semantic search at scale practical.",
    },
    {
      title: "Reranking",
      body: "After initial retrieval, a reranker rescores candidate passages for relevance. Reranking significantly improves precision by reordering cheap-to-retrieve candidates using a more accurate relevance model.",
    },
    {
      title: "Citation & Grounding",
      body: "Well-designed RAG systems preserve source metadata through the retrieval pipeline and surface it in final outputs. This enables citation of original authors and enables users to verify claims — a core principle of responsible knowledge redistribution.",
    },
  ],
  lessons: [
    {
      title: "The RAG Pipeline",
      body: "A standard RAG pipeline: (1) ingest and chunk documents, (2) embed chunks and store in a vector database, (3) embed the user query, (4) retrieve top-k similar chunks, (5) pass retrieved chunks + query to the LLM, (6) generate a grounded response. Each step introduces design choices that affect end-to-end quality.",
      tags: ["Pipeline", "Architecture"],
    },
    {
      title: "Embedding and Indexing",
      body: "Documents are embedded at ingest time using an embedding model. The choice of embedding model affects the semantic space and retrieval quality. Domain-specific embedding models often outperform general-purpose ones for specialized corpora.",
      tags: ["Embeddings", "Indexing", "Semantic Search"],
    },
    {
      title: "Chunking Strategies Compared",
      body: "Fixed-size chunking is simple but context-blind. Sentence-aware chunking respects linguistic boundaries. Semantic chunking groups related ideas by embedding similarity. Hierarchical chunking preserves document structure for multi-granularity retrieval.",
      tags: ["Chunking", "Document Processing"],
    },
    {
      title: "Hybrid Search",
      body: "Combining dense vector search (semantic similarity) with sparse BM25 keyword search (lexical matching) produces hybrid retrieval that handles both semantic queries and exact-match requirements. Reciprocal Rank Fusion (RRF) is a common merging strategy.",
      tags: ["Hybrid Search", "BM25", "RRF"],
    },
    {
      title: "Enterprise RAG Patterns",
      body: "Production RAG systems add: access control (per-user document filtering), caching (frequent query result reuse), observability (query logging, retrieval metrics), and evaluation pipelines to measure faithfulness, relevance, and groundedness.",
      tags: ["Enterprise", "Production", "Evaluation"],
    },
  ],
  notes: `RAG quality is bounded by retrieval quality. A perfect LLM cannot compensate for poor retrieval.

Chunk size tuning is empirical — benchmark against real queries from your domain.

Always preserve source metadata (title, author, URL) through the entire pipeline. Attribution is not optional.`,
  sources: [
    {
      author: "Lewis et al. — Facebook AI Research, 2020",
      work: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
      description:
        "The paper that formally introduced RAG as an architecture, combining dense passage retrieval with sequence-to-sequence generation. Foundational reading for anyone building retrieval-grounded systems.",
    },
    {
      author: "Es et al., 2023",
      work: "RAGAS: Automated Evaluation of Retrieval Augmented Generation",
      description:
        "Introduced metrics for RAG evaluation: context precision, context recall, faithfulness, and answer relevance. A practical framework for measuring RAG pipeline quality.",
    },
    {
      author: "Gao et al., 2023",
      work: "Retrieval-Augmented Generation for Large Language Models: A Survey",
      description:
        "Comprehensive survey covering RAG evolution from naive to advanced paradigms, chunking strategies, retrieval methods, augmentation approaches, and generation techniques.",
    },
  ],
};

export const agenticWorkflows: SubjectData = {
  title: "Agentic Workflows",
  eyebrow: "Subject · Technology",
  intro:
    "Agentic AI systems go beyond single-turn question answering. They plan, use tools, execute multi-step tasks, and adapt based on intermediate results. This subject covers the architecture and design patterns that make autonomous AI workflows reliable.",
  concepts: [
    {
      title: "What is an AI Agent",
      body: "An agent is an AI system that perceives its environment, makes decisions, and takes actions toward a goal. In software contexts, this means an LLM that can invoke tools, process results, and continue reasoning across multiple steps.",
    },
    {
      title: "Tool Use",
      body: "Tools extend what an agent can do: web search, code execution, database queries, API calls, file I/O. The model selects tools, generates inputs, receives outputs, and integrates results into subsequent reasoning steps.",
    },
    {
      title: "Multi-step Reasoning",
      body: "Complex tasks require decomposing a goal into subtasks, executing each, and updating the plan based on results. Patterns like ReAct (Reasoning + Acting) and Plan-and-Execute structure this process explicitly.",
    },
    {
      title: "Orchestration",
      body: "Orchestration frameworks (LangGraph, LlamaIndex Workflows, AutoGen) manage agent state, tool routing, memory, and multi-agent coordination. The orchestrator defines the graph of possible actions and manages transitions.",
    },
    {
      title: "Human in the Loop",
      body: "Fully autonomous agents introduce risk. Human-in-the-loop designs add checkpoints where humans approve, correct, or redirect agent behavior — especially important for consequential or irreversible actions.",
    },
  ],
  lessons: [
    {
      title: "The ReAct Pattern",
      body: "ReAct (Yao et al., 2022) interleaves Reasoning and Acting: the model generates a thought, selects an action, observes the result, and reasons again. This trace is interpretable and makes agent behavior auditable — important for debugging and trust.",
      tags: ["ReAct", "Reasoning", "Pattern"],
    },
    {
      title: "Tool Definition and Selection",
      body: "Tools are defined with a name, description, and JSON schema for inputs. The model selects tools based on the description matching the task. Clear, specific tool descriptions improve selection accuracy. Ambiguous descriptions lead to wrong tool calls.",
      tags: ["Tools", "Function Calling", "JSON Schema"],
    },
    {
      title: "Memory in Agentic Systems",
      body: "Agents use multiple memory types: in-context (conversation history), external (vector store of past experiences), episodic (structured logs of past actions), and procedural (codified workflows). Memory architecture defines how much context an agent retains across sessions.",
      tags: ["Memory", "Context", "State"],
    },
    {
      title: "Multi-Agent Systems",
      body: "Complex tasks benefit from specialized agents collaborating: a planner agent decomposes goals, executor agents carry out subtasks, a critic agent evaluates outputs. Coordination protocols prevent redundant work and resolve conflicts between agents.",
      tags: ["Multi-agent", "Coordination", "Specialization"],
    },
    {
      title: "Designing for Reliability",
      body: "Agents fail in predictable ways: tool call errors, infinite loops, context overflow, hallucinated tool arguments. Reliable systems include retry logic, max-step limits, structured output validation, and fallback behaviors. Test adversarially before production deployment.",
      tags: ["Reliability", "Error Handling", "Production"],
    },
  ],
  notes: `Agentic systems fail differently than chatbots — errors compound across steps.

Always define a maximum step count. Without limits, agents can loop indefinitely.

Human review checkpoints are not a limitation — they are a feature for high-stakes workflows.`,
  sources: [
    {
      author: "Yao et al. — Princeton & Google, 2022",
      work: "ReAct: Synergizing Reasoning and Acting in Language Models",
      description:
        "Introduced the ReAct pattern, showing that interleaving reasoning traces with action steps improves both task performance and interpretability compared to reasoning-only or action-only approaches.",
    },
    {
      author: "Anthropic, 2024",
      work: "Building Effective Agents",
      description:
        "Practical guide covering agentic design patterns: augmented LLMs, prompt chaining, routing, parallelization, orchestration, and evaluation approaches for production agent systems.",
    },
    {
      author: "LangChain Team, 2023",
      work: "LangGraph: Multi-Agent Workflows",
      description:
        "Documentation and design philosophy behind LangGraph, a stateful graph-based framework for building controllable multi-agent systems with explicit state management and human-in-the-loop support.",
    },
  ],
};

export const uiLibraries: SubjectData = {
  title: "UI Libraries",
  eyebrow: "Subject · Technology",
  intro:
    "Modern UI development relies on component libraries, design systems, and interaction frameworks that enforce consistency and accelerate delivery. This subject surveys the ecosystem and the principles behind choosing and using UI tools effectively.",
  concepts: [
    {
      title: "Component Libraries",
      body: "Pre-built, composable UI components (buttons, inputs, dialogs, tables) that implement accessibility, keyboard navigation, and design patterns. Examples include shadcn/ui, Radix UI, Headless UI, and Mantine.",
    },
    {
      title: "Design Systems",
      body: "A design system is a shared language between designers and developers — tokens (color, spacing, typography), components, patterns, and documentation. It ensures visual and behavioral consistency across a product.",
    },
    {
      title: "Modern UI Frameworks",
      body: "React remains dominant. Solid, Svelte, Qwik, and Astro offer alternative rendering models optimized for performance and DX. Understanding the tradeoffs informs framework selection for each project context.",
    },
    {
      title: "Animation & Interaction",
      body: "Motion design communicates meaning: transitions signal state changes, physics-based animations feel natural, micro-interactions reward user actions. Libraries like Framer Motion, Motion One, and GSAP implement these in code.",
    },
    {
      title: "Accessibility",
      body: "Accessible UI is not optional. WCAG 2.1 AA compliance covers keyboard navigation, ARIA roles, color contrast, and screen reader support. Libraries built on Radix UI primitives handle accessibility semantics by default.",
    },
  ],
  lessons: [
    {
      title: "Headless Components vs Styled Libraries",
      body: "Headless libraries (Radix, Headless UI) provide behavior and accessibility without visual styling — maximum flexibility, but requires design effort. Styled libraries (Chakra, Mantine) provide both. shadcn/ui bridges these by providing copy-paste components built on Radix with Tailwind styling.",
      tags: ["Headless", "Radix", "shadcn"],
    },
    {
      title: "Design Tokens",
      body: "Tokens are named values for design decisions: --color-primary, --spacing-4, --font-size-base. Tailwind CSS v4 uses CSS custom properties as its token system. Tokens enable theming, dark mode, and brand consistency across large codebases.",
      tags: ["Tokens", "Theming", "Tailwind"],
    },
    {
      title: "Component Composition Patterns",
      body: "Good component APIs favor composition over configuration. Slot patterns and render props enable extensibility without prop explosion. The compound component pattern (Dialog.Root, Dialog.Trigger, Dialog.Content) is more flexible than monolithic prop-driven APIs.",
      tags: ["Composition", "API Design", "Slots"],
    },
    {
      title: "Animation in Production UIs",
      body: "Framer Motion's AnimatePresence handles mount/unmount transitions that CSS cannot. The layout prop automatically animates size and position changes. For performance-critical animations, CSS transforms and opacity changes are GPU-composited and preferred over animating layout properties.",
      tags: ["Framer Motion", "Animation", "Performance"],
    },
    {
      title: "Storybook and Component Documentation",
      body: "Storybook isolates components for development, testing, and documentation. Stories define component states. Integrations with Chromatic enable visual regression testing. A well-maintained Storybook is the source of truth for a design system.",
      tags: ["Storybook", "Documentation", "Testing"],
    },
  ],
  notes: `Prefer libraries that give you the source code (shadcn model) over black-box packages — you can read, modify, and audit what you ship.

Design tokens are the foundation of maintainable theming. Establish them early.

Accessibility is easier to build in from the start than to retrofit later.`,
  sources: [
    {
      author: "Radix UI Team — WorkOS",
      work: "Radix UI Primitives Documentation",
      description:
        "Reference documentation for Radix UI's unstyled, accessible component primitives. Covers the rationale for headless components and the accessibility patterns implemented.",
    },
    {
      author: "shadcn",
      work: "shadcn/ui — Beautifully designed components",
      description:
        "Copy-paste component library built on Radix UI and Tailwind CSS. Not a package dependency — components are owned by the consuming project, enabling full customization.",
    },
    {
      author: "W3C",
      work: "Web Content Accessibility Guidelines (WCAG) 2.1",
      description:
        "The international standard for web accessibility. Organized around four principles: perceivable, operable, understandable, and robust. Level AA compliance is the widely accepted production standard.",
    },
  ],
};

export const creativeDirection: SubjectData = {
  title: "Creative Direction",
  eyebrow: "Subject · Design",
  intro:
    "Creative direction is the discipline of shaping how ideas, products, and brands are expressed visually and tonally. It sits at the intersection of strategy, aesthetics, and communication.",
  concepts: [
    {
      title: "Visual Hierarchy",
      body: "Visual hierarchy guides the eye through content in an intentional order. Scale, weight, color, and spacing establish which elements demand attention first. A clear hierarchy reduces cognitive load and communicates priority.",
    },
    {
      title: "Typography Systems",
      body: "Type is voice made visible. A typographic system defines scales, weights, line heights, and letter spacing for each level of content: display, headline, body, caption. Consistency in type communicates brand maturity.",
    },
    {
      title: "Color Theory",
      body: "Color carries meaning, evokes emotion, and defines brand identity. Effective color systems are built from a small, principled palette: primary, semantic (success, warning, error), and neutral scales. Dark mode requires a deliberate parallel system.",
    },
    {
      title: "Brand Systems",
      body: "A brand system is a coherent set of visual and verbal rules that define how a product or organization presents itself. It covers tone of voice, logo usage, color, type, imagery style, and interaction patterns.",
    },
    {
      title: "Motion & Rhythm",
      body: "Motion is a dimension of design, not decoration. Duration, easing, and choreography communicate personality. Transitions should feel earned — too much animation creates noise; too little feels static and unresponsive.",
    },
  ],
  lessons: [
    {
      title: "The Grid and Spatial Systems",
      body: "Grids impose order on composition. A baseline grid aligns type and elements to a vertical rhythm. Column grids structure horizontal layout. Spacing scales (4px base grid) ensure consistent density. The eye perceives alignment and regularity as quality.",
      tags: ["Grid", "Layout", "Spacing"],
    },
    {
      title: "Designing in Dark Mode",
      body: "Dark mode is not a color inversion. Background surfaces use a range of dark grays (not pure black) to communicate depth. Text contrast must meet WCAG AA at minimum. Shadows become less useful — elevation is communicated through surface lightness differences.",
      tags: ["Dark Mode", "Color", "Contrast"],
    },
    {
      title: "Editorial Design Principles",
      body: "Editorial design — from magazine and book tradition — establishes patterns now standard in digital products: white space as breathing room, pull quotes for emphasis, consistent column structure, and reading rhythm. Digital dashboards benefit from the same discipline.",
      tags: ["Editorial", "Layout", "Readability"],
    },
    {
      title: "Crafting Brand Voice",
      body: "Brand voice is how an organization sounds in writing. It encompasses tone (formal vs. conversational), vocabulary, sentence structure, and the persona implied by word choice. Consistency in voice builds trust and recognition.",
      tags: ["Copywriting", "Brand", "Voice"],
    },
    {
      title: "Art Direction for AI Products",
      body: "AI product design has distinct challenges: communicating uncertainty, showing source attribution, managing streaming output aesthetics, and balancing capability with user trust. The visual language should feel intelligent but not intimidating.",
      tags: ["AI Design", "UX", "Trust"],
    },
  ],
  notes: `Restraint is a design decision. The absence of elements is as deliberate as their presence.

Dark mode should be designed first if it is the primary mode — retrofitting dark mode onto a light-first design produces poor results.

Brand voice and visual identity should reinforce each other. Misalignment creates cognitive dissonance.`,
  sources: [
    {
      author: "Jan Tschichold",
      work: "The New Typography (1928)",
      description:
        "Foundational text of modernist typography that established principles of clarity, hierarchy, and functional design. Still relevant to contemporary digital type systems.",
    },
    {
      author: "Edward Tufte",
      work: "The Visual Display of Quantitative Information",
      description:
        "The definitive work on data visualization. Introduced the concept of data-ink ratio and chartjunk. Argues for maximum information density with minimum visual noise.",
    },
    {
      author: "Ellen Lupton",
      work: "Thinking with Type",
      description:
        "Accessible and comprehensive guide to typographic principles for designers. Covers letter, text, and grid — the three scales at which type operates.",
    },
  ],
};

export const ideWorkflow: SubjectData = {
  title: "IDE Workflow",
  eyebrow: "Subject · Technology",
  intro:
    "A well-configured development environment is a force multiplier. This subject covers the tools, configurations, and habits that compound over time to produce dramatically faster and more accurate software development.",
  concepts: [
    {
      title: "Development Environments",
      body: "A development environment is the complete configuration of editor, runtime, tools, and extensions that a developer works within. Consistency between local, CI, and production environments reduces 'works on my machine' failures.",
    },
    {
      title: "Git Workflow",
      body: "Git is not just version control — it is a collaboration protocol. Branch strategies (trunk-based, Git Flow, GitHub Flow), commit conventions (Conventional Commits), and PR practices define how teams integrate work and maintain a readable project history.",
    },
    {
      title: "CLI Tooling",
      body: "The command line is faster than any GUI for many operations. Modern CLI tools: zsh with plugins, fzf for fuzzy finding, ripgrep for search, jq for JSON, gh for GitHub, and task runners (just, make) for project automation.",
    },
    {
      title: "Debugging",
      body: "Debugging is hypothesis testing. Effective debugging means forming a specific hypothesis, finding the fastest way to test it, and iterating. Breakpoints, structured logging, network inspectors, and profilers are tools for accelerating this loop.",
    },
    {
      title: "Deployment",
      body: "Deployment is the process of moving code from a development environment to users. Modern deployment targets: Vercel, Railway, Fly.io, AWS, and Cloudflare Workers. CI/CD pipelines automate testing and deployment gating.",
    },
  ],
  lessons: [
    {
      title: "VS Code and the Extension Ecosystem",
      body: "VS Code is the dominant editor for web development. Key capabilities: LSP-powered IntelliSense, integrated terminal, Git lens, debugging adapter protocol (DAP), and a rich extension marketplace. Profiles and settings sync enable consistent environments across machines.",
      tags: ["VS Code", "Editor", "Extensions"],
    },
    {
      title: "Effective Git Practices",
      body: "Atomic commits (one logical change per commit) produce readable history. Conventional Commits (feat:, fix:, refactor:) enable automated changelog generation. Rebase over merge for linear history. Use git bisect to binary-search for regressions.",
      tags: ["Git", "Commits", "History"],
    },
    {
      title: "Shell Configuration and Productivity",
      body: "Shell customization compounds over years: aliases for frequent commands, functions for multi-step operations, and key bindings for navigation. zoxide (smarter cd), bat (better cat), and delta (better git diff) are modern replacements for foundational tools.",
      tags: ["Shell", "Productivity", "CLI"],
    },
    {
      title: "Using AI in the IDE",
      body: "AI coding assistants (GitHub Copilot, Cursor, Claude Code) augment rather than replace developer judgment. Effective use involves writing precise comments, small well-scoped prompts, and critically reviewing all generated code before accepting. AI acceleration is highest for boilerplate and lowest for novel logic.",
      tags: ["AI", "Copilot", "Claude Code"],
    },
    {
      title: "CI/CD Pipeline Design",
      body: "A basic pipeline: lint → type-check → unit test → integration test → build → deploy. Stages run in parallel where possible. Failing fast on type errors prevents waste downstream. Environment variables are managed via secrets, never committed to source control.",
      tags: ["CI/CD", "Pipeline", "GitHub Actions"],
    },
  ],
  notes: `Invest in your editor configuration early. The compounding returns from keyboard shortcuts and snippets are significant over years.

Commit messages are communication to your future self and teammates. Write them accordingly.

Reproducible environments (Docker, Nix, devcontainers) eliminate onboarding friction.`,
  sources: [
    {
      author: "Scott Chacon & Ben Straub",
      work: "Pro Git (2nd Edition)",
      description:
        "The comprehensive reference for Git. Available free online at git-scm.com. Covers everything from basic commands to internals, rebasing strategies, and submodules.",
    },
    {
      author: "conventionalcommits.org",
      work: "Conventional Commits Specification",
      description:
        "A lightweight convention for writing structured commit messages. Enables automated versioning, changelog generation, and clear communication of change type and scope.",
    },
    {
      author: "Sindre Sorhus et al.",
      work: "Awesome CLI Apps",
      description:
        "Curated list of modern command-line tools that improve on Unix classics. Reference for discovering replacements for standard tools with better UX and performance.",
    },
  ],
};

export const frontendSystems: SubjectData = {
  title: "Frontend Systems",
  eyebrow: "Subject · Technology",
  intro:
    "Frontend systems thinking goes beyond writing components. It covers the architecture decisions, performance engineering, and tooling choices that determine how well a product scales across teams, traffic, and time.",
  concepts: [
    {
      title: "Rendering Patterns",
      body: "Static Site Generation (SSG), Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), and Client-Side Rendering (CSR) each have tradeoffs in performance, freshness, and complexity. Next.js, Astro, and Remix make these decisions composable.",
    },
    {
      title: "State Management",
      body: "State exists at multiple levels: local (useState), shared component tree (Context, Jotai, Zustand), server state (TanStack Query, SWR), and URL state. Choosing the right scope for each piece of state reduces bugs and improves performance.",
    },
    {
      title: "Performance Engineering",
      body: "Core Web Vitals (LCP, CLS, INP) measure what users experience. Performance is affected by bundle size, render blocking resources, image optimization, caching strategy, and network waterfall. Profiling before optimizing is essential.",
    },
    {
      title: "Build Tooling",
      body: "Vite has largely replaced Webpack for new projects. Turbopack is being adopted in Next.js. esbuild provides ultra-fast TypeScript and JSX transformation. Understanding bundlers enables configuration for optimal code splitting and tree shaking.",
    },
    {
      title: "TypeScript at Scale",
      body: "TypeScript eliminates classes of runtime errors through static analysis. At scale, strict mode, path aliases, shared type packages, and project references maintain type safety across monorepos and large codebases.",
    },
  ],
  lessons: [
    {
      title: "Next.js App Router Architecture",
      body: "The App Router introduced React Server Components, layouts, loading and error boundaries, and server actions. RSCs reduce client JavaScript by running rendering on the server. Understanding the server/client boundary is the central skill for App Router development.",
      tags: ["Next.js", "RSC", "App Router"],
    },
    {
      title: "Code Splitting and Lazy Loading",
      body: "Bundle splitting ensures users only download code for the route they visit. next/dynamic and React's lazy() enable component-level splitting. Third-party scripts should be loaded with strategy hints. Route-level splitting is automatic in modern frameworks.",
      tags: ["Performance", "Bundle", "Splitting"],
    },
    {
      title: "Image and Font Optimization",
      body: "Images are typically the largest page assets. next/image provides automatic WebP/AVIF conversion, responsive sizing, and lazy loading. next/font self-hosts Google Fonts to eliminate render-blocking third-party requests and prevent layout shift.",
      tags: ["Images", "Fonts", "Performance"],
    },
    {
      title: "Monorepo Structure",
      body: "Large frontend systems are organized as monorepos using Turborepo, Nx, or pnpm workspaces. Shared packages (UI library, utilities, types) are published internally. Turborepo's build cache prevents redundant work across affected packages.",
      tags: ["Monorepo", "Turborepo", "Architecture"],
    },
    {
      title: "Testing Strategy",
      body: "A balanced frontend test suite: unit tests for pure functions and hooks (Vitest), component tests for UI behavior (Testing Library), and end-to-end tests for critical user flows (Playwright). E2E tests are slow and brittle — reserve them for high-value paths.",
      tags: ["Testing", "Vitest", "Playwright"],
    },
  ],
  notes: `Prefer server rendering for content that does not need interactivity — it is faster, more SEO-friendly, and reduces client JS.

State management choice is an architectural decision. Standardize early; migrating later is expensive.

Performance budgets make trade-offs explicit. Set thresholds for bundle size and Core Web Vitals in CI.`,
  sources: [
    {
      author: "Vercel / Next.js Team",
      work: "Next.js Documentation — App Router",
      description:
        "Official documentation for the Next.js App Router, covering React Server Components, data fetching patterns, caching, and deployment. The canonical reference for modern Next.js development.",
    },
    {
      author: "Alex Russell et al.",
      work: "Web Performance Fundamentals (web.dev)",
      description:
        "Google's web.dev resource on Core Web Vitals, performance measurement, and optimization techniques. Covers LCP, CLS, INP and actionable guidance for each.",
    },
    {
      author: "TanStack",
      work: "TanStack Query Documentation",
      description:
        "Reference for server state management in React applications. Covers fetching, caching, synchronization, and background updates — replacing ad-hoc fetch logic with a principled layer.",
    },
  ],
};

export const automationSystems: SubjectData = {
  title: "Automation Systems",
  eyebrow: "Subject · Technology",
  intro:
    "Automation compounds time. Every manual process converted to a reliable automated system returns that time repeatedly. This subject covers the spectrum from simple scripts to complex multi-service workflow automation.",
  concepts: [
    {
      title: "Workflow Automation",
      body: "Workflow automation connects triggers to actions across services. Platforms like n8n, Zapier, and Make enable no-code/low-code automation. Code-first tools like Temporal handle complex stateful workflows with full auditability.",
    },
    {
      title: "API Integration",
      body: "Modern software surfaces are APIs. REST, GraphQL, and webhooks are the three primary integration surfaces. Authentication (OAuth2, API keys, JWTs) and rate limiting are universal concerns across all integrations.",
    },
    {
      title: "Scripting",
      body: "Shell scripts handle file manipulation, environment setup, and command chaining. Python dominates for data manipulation and API automation. TypeScript with Bun or Node.js handles web-adjacent automation with full type safety.",
    },
    {
      title: "CI/CD as Automation",
      body: "Continuous Integration and Continuous Deployment are automation systems for the software delivery pipeline. GitHub Actions, GitLab CI, and CircleCI define pipelines as code, triggered by code events. They automate testing, building, and deploying software.",
    },
    {
      title: "Scheduled Tasks",
      body: "Cron jobs, scheduled GitHub Actions, and cloud scheduler services handle time-based automation: reports, data syncs, cleanup jobs, and periodic notifications. Reliability and observability matter most for scheduled workloads.",
    },
  ],
  lessons: [
    {
      title: "Designing Reliable Automations",
      body: "Reliable automations are idempotent (safe to run multiple times), handle failures gracefully (retry logic, dead letter queues), and are observable (logging, alerting). The most dangerous automation is a silent failure — design for visibility from the start.",
      tags: ["Reliability", "Idempotency", "Error Handling"],
    },
    {
      title: "Webhook Architecture",
      body: "Webhooks push events from external services to your system. Design: expose an HTTPS endpoint, validate signatures (HMAC-SHA256), respond quickly (queue for async processing), and handle retries (services resend on non-2xx). Tools like Svix and Hookdeck manage webhook reliability.",
      tags: ["Webhooks", "Events", "Architecture"],
    },
    {
      title: "GitHub Actions Deep Dive",
      body: "GitHub Actions workflows are YAML-defined event-triggered pipelines. Reusable workflows, composite actions, and matrix strategies eliminate duplication. Secrets management, environments, and deployment protection rules enable safe production deployments.",
      tags: ["GitHub Actions", "CI/CD", "YAML"],
    },
    {
      title: "AI-Augmented Automation",
      body: "LLMs enable a new class of automation: document classification, content extraction, email triage, report generation, and natural language to structured data conversion. Agentic systems extend this to multi-step tasks that would previously require human judgment.",
      tags: ["AI", "LLM", "Document Processing"],
    },
    {
      title: "Data Pipeline Fundamentals",
      body: "ETL (Extract, Transform, Load) pipelines move data between systems. Tools: dbt for SQL transformation, Airbyte for extraction, and Apache Airflow or Prefect for orchestration. Incremental processing handles large datasets efficiently.",
      tags: ["ETL", "Data Pipeline", "dbt"],
    },
  ],
  notes: `Every manual repetitive task is a candidate for automation. The question is not whether to automate, but when the investment pays off.

Observability is not optional for production automations. Silent failures compound into data inconsistencies.

Test automation pipelines the same way you test application code.`,
  sources: [
    {
      author: "GitHub",
      work: "GitHub Actions Documentation",
      description:
        "Official GitHub documentation for Actions. Covers workflow syntax, events, actions marketplace, secrets management, and deployment environments.",
    },
    {
      author: "n8n Team",
      work: "n8n Documentation",
      description:
        "Reference for n8n, the open-source workflow automation platform. Self-hostable, code-friendly alternative to Zapier with 350+ integrations.",
    },
    {
      author: "Maxime Beauchemin — Airbnb",
      work: "The Rise of the Data Engineer",
      description:
        "Foundational essay describing the emergence of data engineering as a discipline, the anatomy of data pipelines, and the role of automation in modern data infrastructure.",
    },
  ],
};

export const knowledgeDesign: SubjectData = {
  title: "Knowledge Design",
  eyebrow: "Subject · Epistemology",
  intro:
    "Knowledge design is the craft of organizing, structuring, and presenting information in ways that aid understanding, retention, and application. It draws from cognitive science, information architecture, and pedagogy.",
  concepts: [
    {
      title: "Information Architecture",
      body: "Information architecture defines how content is organized, labeled, and navigated. Good IA matches the user's mental model — their existing understanding of how things relate. Card sorting and tree testing are methods for discovering and validating IA.",
    },
    {
      title: "Mental Models",
      body: "A mental model is an internal representation of how something works. Learning is the process of building and refining mental models. Effective teaching provides accurate scaffolding — starting with useful simplifications before introducing nuance.",
    },
    {
      title: "Learning Design",
      body: "Instructional design principles: spaced repetition improves long-term retention, interleaving different topics improves discrimination, retrieval practice (testing yourself) outperforms passive re-reading, and elaborative interrogation (asking why?) deepens understanding.",
    },
    {
      title: "Personal Knowledge Management",
      body: "PKM systems (Obsidian, Notion, Logseq) help individuals capture, connect, and resurface ideas. The Zettelkasten method emphasizes atomic notes linked by concept rather than hierarchical filing — enabling emergent connections across domains.",
    },
    {
      title: "The Feynman Technique",
      body: "To understand something deeply, explain it in simple language as if teaching someone without background. Where the explanation breaks down reveals the gaps in your own understanding. Refinement of the explanation deepens the mental model.",
    },
  ],
  lessons: [
    {
      title: "Designing for Cognitive Load",
      body: "Cognitive load theory (Sweller, 1988) identifies intrinsic load (complexity of the material), extraneous load (imposed by poor design), and germane load (effort that builds understanding). Good knowledge design minimizes extraneous load and optimizes germane load.",
      tags: ["Cognitive Load", "Learning", "Design"],
    },
    {
      title: "Progressive Disclosure",
      body: "Present the essential concept first, then layer in complexity. Chunking breaks information into digestible units. Worked examples provide concrete instantiation before abstract generalization. The goal is building on what the learner already understands.",
      tags: ["Pedagogy", "Chunking", "Examples"],
    },
    {
      title: "Note-taking for Understanding",
      body: "The Cornell Note System separates capture, synthesis, and summary. The Zettelkasten treats each idea as a discrete, linkable node. The PARA method (Projects, Areas, Resources, Archive) organizes by actionability. Each system reflects a different theory of how knowledge should flow.",
      tags: ["Notes", "PKM", "Systems"],
    },
    {
      title: "Curating vs Consuming",
      body: "Passive information consumption without synthesis creates the illusion of learning. Active curation — summarizing in your own words, connecting to existing knowledge, noting disagreements — produces lasting understanding. Avantesavante is built on this distinction.",
      tags: ["Curation", "Synthesis", "Active Learning"],
    },
    {
      title: "Source Attribution and Epistemic Honesty",
      body: "Citing sources is not bureaucracy — it is epistemic respect. Attribution enables readers to verify claims, explore primary sources, and correctly assign credit. The practice of redistribution with attribution is itself a pedagogical act: it models intellectual honesty.",
      tags: ["Attribution", "Citation", "Integrity"],
    },
  ],
  notes: `Understanding is demonstrated by the ability to generate new examples, not by the ability to recall definitions.

The best note-taking system is the one you actually use and return to.

Curation is a skill: deciding what to include, exclude, and emphasize is where the intellectual work happens.`,
  sources: [
    {
      author: "John Sweller",
      work: "Cognitive Load Theory (1988)",
      description:
        "Foundational theory explaining how working memory limitations affect learning. Introduced the distinction between intrinsic, extraneous, and germane cognitive load — still the basis of evidence-based instructional design.",
    },
    {
      author: "Niklas Luhmann",
      work: "Communicating with Slip Boxes",
      description:
        "The essay in which Luhmann describes the Zettelkasten system he used to write 70+ books and papers. Each note is atomic, uniquely identified, and linked to related notes — designed to generate emergent connections over decades.",
    },
    {
      author: "Peter Brown, Henry Roediger, Mark McDaniel",
      work: "Make It Stick: The Science of Successful Learning",
      description:
        "Synthesizes decades of cognitive science research on learning. Key findings: retrieval practice, spaced repetition, and interleaving are far more effective than the intuitive strategies most people use.",
    },
  ],
};

export const caseStudies: SubjectData = {
  title: "Case Studies",
  eyebrow: "Subject · Applied Learning",
  intro:
    "Case studies ground abstract principles in specific, real-world examples. This section analyzes notable implementations across the Avantesavante curriculum, examining what worked, what did not, and why.",
  concepts: [
    {
      title: "How to Read a Case Study",
      body: "Effective case study analysis extracts generalizable principles, not just narrative. Ask: what problem was being solved? What constraints existed? What tradeoffs were made? What would you do differently with hindsight?",
    },
    {
      title: "Systems Thinking",
      body: "Complex outcomes emerge from interacting systems, not single causes. Case studies train the ability to see second-order effects, feedback loops, and interdependencies rather than isolated actions.",
    },
    {
      title: "Failure Analysis",
      body: "Post-mortems and failure analyses are the most educational case studies. They reveal how multiple factors combine to produce unexpected outcomes. The goal is not blame but understanding the conditions that allowed the failure to occur.",
    },
    {
      title: "Pattern Recognition",
      body: "Across many case studies, patterns emerge: common failure modes, recurring organizational dynamics, architectural tradeoffs that appear in different contexts. Pattern recognition is the output of cumulative study.",
    },
    {
      title: "Applying Lessons",
      body: "The transfer problem in learning is applying knowledge from one context to another. Deliberate practice connecting case study lessons to current challenges builds the transfer skill. Abstract the principle before applying it.",
    },
  ],
  lessons: [
    {
      title: "Case Study: GitHub Copilot Adoption",
      body: "GitHub Copilot demonstrated that AI code completion shifts developer time from syntax recall to higher-order design and review. Organizations that adopted it saw productivity gains primarily in boilerplate and repetitive patterns. The lesson: AI augments judgment, it does not replace it.",
      tags: ["AI", "Developer Tools", "Adoption"],
    },
    {
      title: "Case Study: Notion's Editor Architecture",
      body: "Notion's block-based document editor required a custom data model (blocks, not rich text) to support the flexibility they needed. This early architectural decision shaped every subsequent feature. The lesson: domain modeling decisions made early compound into constraints or capabilities.",
      tags: ["Architecture", "Product", "Data Model"],
    },
    {
      title: "Case Study: Tailwind CSS Adoption Curve",
      body: "Tailwind CSS faced strong initial resistance from developers who considered utility classes an antipattern. Adoption accelerated as teams discovered that constraints on naming removed a category of decision-making. The lesson: productivity tools are often counterintuitive before they become habitual.",
      tags: ["CSS", "Design Systems", "Adoption"],
    },
    {
      title: "Case Study: Discord's Real-time Architecture",
      body: "Discord scaled WebSocket connections to millions of concurrent users by partitioning state across services and using Elixir/Erlang for concurrency. The lesson: technology selection should match the problem's fundamental nature — Erlang's actor model is a natural fit for massive concurrent connections.",
      tags: ["Architecture", "Scalability", "Real-time"],
    },
    {
      title: "Case Study: Wikipedia as a Knowledge System",
      body: "Wikipedia's value comes not from novel content but from redistribution, synthesis, and citational discipline. It is the largest human-curated retrieval system in history, with mandatory source attribution. The Avantesavante model is explicitly informed by Wikipedia's principles of open curation.",
      tags: ["Knowledge Design", "Attribution", "Curation"],
    },
  ],
  notes: `The goal of case study analysis is not admiration of outcomes but extraction of transferable principle.

Survivor bias distorts case study learning — seek out failure cases as actively as success cases.

The most useful question after any case study: where does this pattern appear in your own current work?`,
  sources: [
    {
      author: "Jeff Bezos — Amazon",
      work: "Amazon Working Backwards Memo Culture",
      description:
        "Amazon's internal practice of writing press releases and FAQs before building products. A case study in how process design shapes product thinking and reduces the cost of bad ideas.",
    },
    {
      author: "Michael Lewis",
      work: "The Undoing Project",
      description:
        "Narrative account of the research partnership between Daniel Kahneman and Amos Tversky. A case study in how two individuals with complementary cognitive styles produced insights that reshaped economics and behavioral science.",
    },
    {
      author: "Gene Kim, Kevin Behr, George Spafford",
      work: "The Phoenix Project",
      description:
        "A novel illustrating DevOps principles through a fictional IT department in crisis. An accessible case study format demonstrating how process, systems thinking, and culture interact in technology organizations.",
    },
  ],
};

export const bioenergetics: SubjectData = {
  title: "Bioenergetics & Water Science",
  eyebrow: "Interdisciplinary Subject · Biology & Biophysics",
  intro:
    "This module surveys emerging and foundational research into the energetic properties of water, cellular electrical systems, and mitochondrial function. All content is educational in nature and references the original researchers responsible for each idea. No medical claims are made.",
  concepts: [
    {
      title: "Gerald H. Pollack — EZ Water",
      body: "Dr. Pollack's research at the University of Washington identified a fourth phase of water — structured, gel-like water that forms near hydrophilic surfaces. This Exclusion Zone (EZ) water excludes solutes, carries a negative charge, and may play a role in biological energy systems.",
    },
    {
      title: "Clarence Cone — Transmembrane Potential",
      body: "Clarence Cone's research examined the voltage difference across cell membranes (transmembrane potential) and its relationship to cell state. He proposed that changes in resting membrane potential correlate with cellular differentiation and proliferation.",
    },
    {
      title: "Dr Abdullah Olgun — Deuterium & ATP Synthase",
      body: "Dr Olgun's work explores how deuterium — the heavy isotope of hydrogen — may affect ATP synthase, the molecular motor that produces ATP in mitochondria. Higher deuterium concentrations may slow the nanomotor; deuterium-depleted water has been studied for its potential metabolic effects.",
    },
    {
      title: "Thomas Seyfried — Mitochondrial Metabolism",
      body: "Professor Seyfried at Boston College has published extensively on the metabolic theory of disease, arguing that mitochondrial dysfunction — rather than nuclear genetic mutation alone — is a primary driver of certain disease processes. His work draws on Otto Warburg's original observations.",
    },
    {
      title: "Viktor Schauberger — Water Movement",
      body: "Austrian naturalist Viktor Schauberger (1885–1958) observed that natural water moves in spiral vortex patterns rather than straight lines. He proposed that this movement energizes water and that engineering systems should work with rather than against natural flow patterns.",
    },
  ],
  lessons: [
    {
      title: "The Fourth Phase of Water (Pollack)",
      body: "Gerald Pollack's research, detailed in 'The Fourth Phase of Water' (2013), describes structured water layers that form adjacent to hydrophilic surfaces. EZ water is denser, more viscous, and carries a negative charge relative to bulk water. The energy to build these zones appears to come in part from electromagnetic radiation, including infrared light. Pollack hypothesizes that EZ water is pervasive in biological tissue and may contribute to cellular organization and energy dynamics. Original research: University of Washington Pollack Laboratory.",
      tags: ["Pollack", "EZ Water", "Structured Water", "Biophysics"],
    },
    {
      title: "Transmembrane Potential and Cell State (Cone)",
      body: "Clarence Cone's mid-twentieth century research investigated the electrical properties of cell membranes. He documented correlations between resting transmembrane potential (RTP) and cell behavior: highly negative RTPs are associated with differentiated, quiescent cells while depolarized potentials are associated with proliferative states. This line of inquiry has influenced contemporary bioelectricity research, including work by Michael Levin at Tufts University on developmental bioelectricity.",
      tags: ["Bioelectricity", "Membrane Potential", "Cell Biology"],
    },
    {
      title: "Deuterium, Mitochondria, and ATP Synthase (Olgun)",
      body: "ATP synthase is a rotary molecular motor embedded in the inner mitochondrial membrane. It produces ATP by exploiting a proton gradient. Dr Olgun's research examines how deuterium (²H), which is heavier than protium (¹H), may affect the mechanics of this rotor. Deuterium depletion protocols and deuterium-depleted water (DDW) have been studied in exploratory clinical research. The hypothesis is that reducing deuterium load may improve mitochondrial rotor efficiency. This remains an active area of investigation.",
      tags: ["Deuterium", "ATP Synthase", "Mitochondria", "Olgun"],
    },
    {
      title: "Mitochondrial Dysfunction and Metabolic Theory (Seyfried)",
      body: "Thomas Seyfried's work builds on Otto Warburg's 1924 observation that cancer cells preferentially metabolize glucose through glycolysis even in the presence of oxygen (the Warburg effect). Seyfried argues in 'Cancer as a Metabolic Disease' (2012) that this reflects underlying mitochondrial insufficiency. His metabolic research explores how dietary interventions that shift fuel substrate away from glucose affect this metabolic state. The work is published in peer-reviewed literature and is cited as a complementary lens alongside genetic models of disease.",
      tags: ["Seyfried", "Warburg Effect", "Metabolic Disease", "Mitochondria"],
    },
    {
      title: "Viktor Schauberger — Vortex Dynamics and Living Water",
      body: "Viktor Schauberger observed salmon swimming effortlessly against powerful currents by riding spiral vortex patterns within the flow. He formalized observations about how implosion (inward spiraling) differs energetically from explosion (outward expansion). His ideas have influenced biomimetic water engineering and discussions about the energetic structuring of water through movement. Schauberger's work was largely empirical and observational; subsequent researchers have formalized elements of it in fluid dynamics terms.",
      tags: ["Schauberger", "Vortex", "Biomimetics", "Water"],
    },
    {
      title: "Molecular Hydrogen — Biological Signaling",
      body: "Molecular hydrogen (H₂) is the smallest and most abundant molecule in the universe. Research since the landmark Ohsawa et al. paper (2007, Nature Medicine) has investigated H₂ as a selective antioxidant and potential signaling molecule in biological systems. The hypothesis is that H₂ selectively neutralizes particularly reactive oxidant species without disrupting beneficial oxidative processes. Over 1,000 peer-reviewed studies have been published on H₂ biology across numerous research groups globally. This is an emerging field and findings should be evaluated against the primary literature.",
      tags: ["Molecular Hydrogen", "Antioxidant", "Signaling", "Ohsawa"],
    },
  ],
  notes: `All content in this section is educational and describes research directions and hypotheses.

No medical claims are made. Readers interested in therapeutic applications should consult qualified health professionals and primary research literature.

The researchers cited here have produced peer-reviewed publications. We encourage readers to access primary sources directly.`,
  sources: [
    {
      author: "Gerald H. Pollack — University of Washington",
      work: "The Fourth Phase of Water: Beyond Solid, Liquid, and Vapor (2013)",
      description:
        "Pollack's book-length treatment of EZ water research. Describes experimental findings, theoretical framework, and biological implications of structured water zones near hydrophilic surfaces.",
    },
    {
      author: "Thomas Seyfried — Boston College",
      work: "Cancer as a Metabolic Disease: On the Origin, Management, and Prevention of Cancer (2012)",
      description:
        "Comprehensive scientific argument for the metabolic theory of cancer. Draws on Warburg's original work, mitochondrial biology, and experimental evidence for metabolic interventions.",
    },
    {
      author: "Ohsawa et al. — Nippon Medical School, 2007",
      work: "Hydrogen acts as a therapeutic antioxidant by selectively reducing cytotoxic oxygen radicals (Nature Medicine)",
      description:
        "The landmark 2007 paper that initiated modern molecular hydrogen biology research. Demonstrated selective neutralization of hydroxyl radicals by H₂ in a rat model of ischemia-reperfusion injury.",
    },
    {
      author: "Viktor Schauberger — compiled by Callum Coats",
      work: "The Water Wizard: The Extraordinary Properties of Natural Water",
      description:
        "Compiled writings and observations of Viktor Schauberger on water movement, vortex dynamics, and natural energy principles. Callum Coats translated and contextualized Schauberger's work from the original German.",
    },
  ],
};
