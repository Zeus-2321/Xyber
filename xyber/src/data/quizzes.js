export const quizzes = {
  core: {
    title: "Core Architecture & Fundamentals",
    questions: [
      {
        question: "What is the primary design goal of Xyber Protocol?",
        options: [
          "Increasing transaction throughput",
          "Providing proof-based security guarantees",
          "Reducing gas fees",
          "Improving UI/UX for wallets"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol primarily replaces which security assumption in Web3 systems?",
        options: [
          "Network latency",
          "Trusted intermediaries",
          "Token incentives",
          "Governance voting"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol enforces security using:",
        options: [
          "Reputation scores",
          "Centralized audits",
          "Cryptographic proofs",
          "Social consensus"
        ],
        answer: 2
      },
      {
        question: "Which layer does Xyber Protocol mainly operate on?",
        options: [
          "UI layer",
          "Consensus layer",
          "Verification & security layer",
          "Storage layer"
        ],
        answer: 2
      },
      {
        question: "Xyber Protocol is best described as:",
        options: [
          "A Layer 2 blockchain",
          "A security middleware protocol",
          "A smart contract wallet",
          "A DAO governance system"
        ],
        answer: 1
      },
      {
        question: "What core security principle does Xyber Protocol follow?",
        options: [
          "Trust but verify",
          "Verify without trust",
          "Assume honesty",
          "Off-chain verification"
        ],
        answer: 1
      },
      {
        question: "What kind of attacks does Xyber Protocol primarily mitigate?",
        options: [
          "UI phishing",
          "Logic and trust-based exploits",
          "Network congestion",
          "Validator downtime"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol enables verification of:",
        options: [
          "Token prices",
          "Claims and actions",
          "User identities only",
          "Network performance"
        ],
        answer: 1
      },
      {
        question: "Which property is guaranteed by cryptographic proofs?",
        options: [
          "Performance",
          "Immutability",
          "Mathematical correctness",
          "Governance fairness"
        ],
        answer: 2
      },
      {
        question: "Xyber Protocol reduces reliance on:",
        options: [
          "Gas optimization",
          "Trusted third parties",
          "Validators",
          "Block producers"
        ],
        answer: 1
      },
      {
        question: "What happens when a proof fails verification?",
        options: [
          "It is retried automatically",
          "It is accepted with warnings",
          "The action is rejected",
          "It is stored for governance"
        ],
        answer: 2
      },
      {
        question: "Xyber Protocol security is best described as:",
        options: [
          "Reactive",
          "Probabilistic",
          "Deterministic",
          "Reputation-based"
        ],
        answer: 2
      },
      {
        question: "Which blockchain property is leveraged most by Xyber Protocol?",
        options: [
          "Finality",
          "Transparency",
          "Immutability",
          "Decentralized verification"
        ],
        answer: 3
      },
      {
        question: "Xyber Protocol minimizes which type of failure?",
        options: [
          "Hardware failures",
          "Human trust failures",
          "Network failures",
          "Storage failures"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol security assumptions are based on:",
        options: [
          "Social trust",
          "Mathematical proofs",
          "Economic incentives",
          "Governance voting"
        ],
        answer: 1
      }
    ]
  },

  proofs: {
    title: "Proof Framework & Verification Logic",
    questions: [
      {
        question: "The Proof Framework in Xyber Protocol is used to:",
        options: [
          "Generate random numbers",
          "Validate security conditions",
          "Reduce gas costs",
          "Speed up consensus"
        ],
        answer: 1
      },
      {
        question: "Proof-based systems are superior because they are:",
        options: [
          "Faster",
          "Cheaper",
          "Trust-minimized",
          "Easier to implement"
        ],
        answer: 2
      },
      {
        question: "Which property ensures proofs cannot be forged?",
        options: [
          "Decentralization",
          "Cryptographic hardness",
          "Governance",
          "Token economics"
        ],
        answer: 1
      },
      {
        question: "Proof verification in Xyber Protocol is:",
        options: [
          "Manual",
          "Off-chain only",
          "Deterministic and verifiable",
          "Reputation-based"
        ],
        answer: 2
      },
      {
        question: "The Proof Framework helps eliminate:",
        options: [
          "Validators",
          "Assumptions about honesty",
          "Smart contracts",
          "Oracles"
        ],
        answer: 1
      },
      {
        question: "Proofs in Xyber Protocol are primarily used to verify:",
        options: [
          "UI logic",
          "Contract logic and claims",
          "Network latency",
          "Token balances"
        ],
        answer: 1
      },
      {
        question: "Which security model does Xyber Protocol follow?",
        options: [
          "Optimistic security",
          "Permissioned security",
          "Zero-trust security",
          "Federated security"
        ],
        answer: 2
      },
      {
        question: "Proof verification ensures what outcome?",
        options: [
          "Faster blocks",
          "Correct execution guarantees",
          "Lower fees",
          "Better governance"
        ],
        answer: 1
      },
      {
        question: "Proof-based validation reduces attack surfaces by:",
        options: [
          "Increasing computation",
          "Eliminating subjective decisions",
          "Adding more validators",
          "Increasing redundancy"
        ],
        answer: 1
      },
      {
        question: "What is the main cost of proof systems?",
        options: [
          "Trust assumptions",
          "Computation overhead",
          "Governance complexity",
          "Centralization"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol proofs are designed to be:",
        options: [
          "Human-readable",
          "Deterministic and reproducible",
          "Governance-controlled",
          "Randomized"
        ],
        answer: 1
      },
      {
        question: "Proof Framework verification is ideally:",
        options: [
          "Subjective",
          "Discretionary",
          "Binary (valid/invalid)",
          "Reputation-based"
        ],
        answer: 2
      },
      {
        question: "Proof failure indicates:",
        options: [
          "Network congestion",
          "Invalid assumptions",
          "Valid execution",
          "Governance conflict"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol security scales because:",
        options: [
          "It adds more validators",
          "Proofs scale better than trust",
          "Governance adapts",
          "Token incentives grow"
        ],
        answer: 1
      },
      {
        question: "Proof-based security aligns best with which Web3 value?",
        options: [
          "Speculation",
          "Permissionlessness",
          "Central control",
          "Speed"
        ],
        answer: 1
      }
    ]
  },

  usecases: {
    title: "Use Cases, Integrations & Attack Resistance",
    questions: [
      {
        question: "Xyber Protocol is most useful for which applications?",
        options: [
          "Social media dApps",
          "High-risk smart contracts",
          "Gaming graphics",
          "Data storage"
        ],
        answer: 1
      },
      {
        question: "In DeFi, Xyber Protocol helps prevent:",
        options: [
          "UI bugs",
          "Logical exploits",
          "Token inflation",
          "Liquidity mining"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol improves trust by:",
        options: [
          "Increasing audits",
          "Removing trust requirements",
          "Adding moderators",
          "Increasing governance power"
        ],
        answer: 1
      },
      {
        question: "Which threat model does Xyber Protocol defend against best?",
        options: [
          "Honest-but-curious actors",
          "Malicious actors with valid access",
          "Network outages",
          "UI spoofing"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol integrates best with:",
        options: [
          "Centralized systems",
          "Smart contract platforms",
          "Web2 APIs",
          "Closed databases"
        ],
        answer: 1
      },
      {
        question: "Proof-based verification is especially valuable for:",
        options: [
          "Static websites",
          "Cross-contract interactions",
          "UI testing",
          "Frontend caching"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol strengthens which blockchain property?",
        options: [
          "Speed",
          "Decentralized trust",
          "Token velocity",
          "Inflation control"
        ],
        answer: 1
      },
      {
        question: "Which category of bugs is hardest to detect without proofs?",
        options: [
          "Syntax errors",
          "Logical trust assumptions",
          "UI alignment",
          "Network delays"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol allows systems to be:",
        options: [
          "Trust-dependent",
          "Trust-minimized",
          "Trust-enforced",
          "Trust-centralized"
        ],
        answer: 1
      },
      {
        question: "Proof-based security reduces risk from:",
        options: [
          "Honest developers",
          "Human error assumptions",
          "Hardware failures",
          "Validator outages"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol is chain-agnostic because:",
        options: [
          "It uses tokens",
          "Proof logic is abstracted",
          "Governance adapts",
          "Validators migrate"
        ],
        answer: 1
      },
      {
        question: "Which property is essential for integrating Xyber Protocol?",
        options: [
          "UI compatibility",
          "Smart contract execution",
          "Token liquidity",
          "High TPS"
        ],
        answer: 1
      },
      {
        question: "Xyber Protocol helps enforce:",
        options: [
          "Social rules",
          "Economic incentives",
          "Security invariants",
          "UI constraints"
        ],
        answer: 2
      },
      {
        question: "Proof frameworks reduce reliance on:",
        options: [
          "Code reviews",
          "Manual audits alone",
          "Validators",
          "Consensus mechanisms"
        ],
        answer: 1
      },
      {
        question: "The strongest advantage of Xyber Protocol is:",
        options: [
          "Performance optimization",
          "Mathematical security guarantees",
          "Governance flexibility",
          "UI simplicity"
        ],
        answer: 1
      }
    ]
  }
};
