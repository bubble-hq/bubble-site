# Plan v2: Add Primo to Team Section

## Brief
הצטרף חבר צוות חדש — **Primo**, מנהל מוצר. צריך להוסיף אותו לסקשן Team באתר.

## Scope
קובץ אחד: `src/components/Team.jsx`

## Changes

### 1. Add `PrimoIcon` SVG component
אייקון בסגנון **מטרה / target** (🎯) — עיגול חיצוני עם crosshair פנימי, או לחלופין אייקון של clipboard/document עם checkmark שמסמל plan & QA.

**המלצה:** אייקון של **clipboard עם סימן V** — מייצג plan, specs, QA. מתאים יותר מ-target (שכבר תפוס ע"י Dax).

```jsx
function PrimoIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Clipboard */}
      <rect x="14" y="8" width="36" height="48" rx="4" stroke="currentColor" strokeWidth="2" />
      <rect x="22" y="4" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      {/* Check mark - animated */}
      <motion.path
        d="M24 34 L30 40 L42 26"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  );
}
```

### 2. Add Primo to `teamMembers` array
הוסף כאיבר **שלישי** (לפני Mailo) — הסדר: Dax, Ray, **Primo**, Mailo.

```js
{
  name: "Primo",
  role: "Product Manager",
  icon: PrimoIcon,
  color: "from-amber-400 to-orange-400",
  glowColor: "rgba(251,191,36,0.15)",
  bio: "The planner. Primo takes a raw idea and turns it into a clear, buildable spec. Defines features, flows, and edge cases so Ray knows exactly what to build. Then does QA to make sure the result matches the plan.",
  traits: ["Product Specs", "UX Flows", "QA & Review", "Feature Design"],
  quote: "If the plan is sharp, the build is smooth.",
}
```

### 3. Update section copy
- Header subtitle: `"Three agents, zero ego."` → `"Four agents, zero ego."`

### 4. Grid layout
הגריד כרגע `md:grid-cols-3`. עם 4 כרטיסים:
- **אופציה א׳ (מומלצת):** `md:grid-cols-2 lg:grid-cols-4` — שורה אחת ב-desktop, שתי שורות בטאבלט.
- **אופציה ב׳:** להשאיר `md:grid-cols-3` — שלושה למעלה ואחד למטה (פחות סימטרי).

**החלטה:** אופציה א׳.

## Out of Scope
- שינוי תוכן/עיצוב של כרטיסים קיימים
- שינוי סקשנים אחרים
- Dax role update (כרגע כתוב "PM + DevOps" — הפרדנו את ה-PM לפרימו, אז צריך לעדכן ל-**"Team Lead + DevOps"**. מוסיף לסקופ.)

## Also: Update Dax role
ב-`teamMembers[0].role`: שנה `"PM + DevOps"` → `"Team Lead + DevOps"` — כי ה-PM עכשיו זה Primo.

## File: `src/components/Team.jsx`
סה"כ שינויים:
1. הוסף `PrimoIcon` component (אחרי `MailoIcon`)
2. הוסף Primo ל-array (מיקום שלישי, index 2)
3. שנה role של Dax
4. שנה subtitle text
5. שנה grid classes

## QA Checklist
- [ ] 4 כרטיסים מוצגים בשורה אחת ב-desktop
- [ ] 2x2 בטאבלט, מוערם במובייל
- [ ] אנימציית האייקון של Primo עובדת
- [ ] הצבע של Primo (amber/orange) לא מתנגש עם האחרים (blue, purple, green ✓)
- [ ] ה-bio ו-traits מתאימים לתפקיד
- [ ] Dax role מעודכן
