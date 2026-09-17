# Knowledge Base Agent

This is the knowledge base agent that I used to build the [Knowledge](../knowledge/overview/overview.md) section.

## What you can do without any code

- **Add a page** duplicate `Section 1` → rename the file → it shows up in the left menu.
- **Fix a blank menu** every menu gets its own landing page automatically, so clicks never land on a 404.
- **Live version** write, save, refresh `http://localhost:8080` — the preview updates instantly.

## How it works


```mermaid
flowchart LR
  A[Start blank<br/>empty folder] --> B[Set up the site<br/>menus + pages]
  B --> C[Write your docs<br/>plain Markdown]
  C --> D[Check & publish<br/>verified + live]
  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style C fill:#fff3e0
  style D fill:#fce4ec
```


## Flowchart


```mermaid
flowchart TD
  subgraph S1[1 · SCAFFOLD]
    A[Blank repo <br/>Node v24 npm 11 + VS Code] --> B[Install VuePress 2<br/>theme + bundler + Vue]
    B --> C[Add scripts<br/>docs:dev → 8080 HMR<br/>docs:build → dist]
  end
  subgraph S2[2 · CONFIGURE CORE]
    C --> D[Set up navigation<br/>6 top menu items]
    D --> E[Set up sidebars per section<br/>Section 1/2 placeholders]
  end
  subgraph S3[3 · ADD DIAGRAMS]
    E --> F[Enable live diagrams<br/>+ dark mode sync]
    F --> G[Pin diagram engine<br/>so it always draws]
  end
  subgraph S4[4 · WRITE DOCS]
    G --> H[Write pages in Markdown]
    H --> I[Add tables, images, screenshots]
  end
  subgraph S5[5 · CONNECT MENUS]
    I --> J[Give every menu a landing page<br/>fixes blank clicks]
    J --> K[Fix any dead links<br/>Section 1/2 pattern]
  end
  subgraph S6[6 · CHECK EVERYTHING]
    K --> L[Clear cache → preview<br/>→ build 23 pages]
    L --> M{Everything shows?}
    M -- no --> J
    M -- yes --> N[All menus + diagrams live]
  end
```
