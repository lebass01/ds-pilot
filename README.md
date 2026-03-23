[README.md](https://github.com/user-attachments/files/26196168/README.md)
# ds-pilot

RMG Design System pilot repo. Used for testing component code, Storybook, and Figma Code Connect before graduating to the production design system.

---

## Structure

```
ds-pilot/
├── src/
│   ├── index.ts                          # Barrel export — all components
│   └── components/
│       └── BtnNeutral/
│           ├── BtnNeutral.tsx            # React component
│           ├── BtnNeutral.css            # Styles (token-aligned with Figma)
│           ├── BtnNeutral.figma.tsx      # Code Connect mapping
│           └── BtnNeutral.stories.tsx    # Storybook stories
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── package.json
└── tsconfig.json
```

New components follow the same pattern — add a folder under `src/components/`.

---

## Setup

```bash
npm install
```

---

## Storybook

```bash
npm run storybook
```

Opens at `http://localhost:6006`. Stories live under **RMG / Buttons**.

---

## Figma Code Connect

### 1. Authenticate

```bash
npx figma connect auth
```

### 2. Dry run (validate before pushing)

```bash
npm run figma:dry-run
```

### 3. Publish

```bash
npm run figma:publish
```

### 4. Unpublish

```bash
npm run figma:unpublish
```

---

## Components

| Component | Figma node | Status |
|---|---|---|
| BtnNeutral | [14452:7638](https://www.figma.com/design/wFIIgmTnL2W6tJK9ExyISz/01-Foundations?node-id=14452-7638) | ✅ Ready |
| BtnBrand | — | ⏳ Pending |
| BtnUtility | — | ⏳ Pending |

---

## Notes

- Figma file: **01-Foundations** (`wFIIgmTnL2W6tJK9ExyISz`)
- Font: **Gilroy Semibold** — ensure this is available in your environment
- CSS values are approximated from the Figma token layer — swap in token pipeline output once available
