# Kids Activities

A static, single-page site with hundreds of activities for kids: crafts, cooking, science experiments, outdoor adventures, STEM, sensory play, and more. Each activity includes supplies, step-by-step instructions, learning benefits, safety notes, and tips, and can be opened as a printable page.

## Features

- Browse and filter activities by category, age, difficulty, time, mess, cost, indoors/outdoors and calm/active
- Per-activity detail with supplies, steps, learning objectives, and safety notes
- Print-friendly view for any activity
- Shareable links to a single activity (`#activity-<id>`) and to a search (`?q=`)
- Fully static - no backend, no build step

Mess, cost, indoors/outdoors and calm/active come from the activity when it sets `mess`, `cost`, `setting` (`indoor`/`outdoor`) or `energy` (`calm`/`active`), and are estimated from its supplies, title and category otherwise. Set the field explicitly to correct a wrong estimate.

## Structure

- `index.html` - the app (markup, styles, and logic)
- `data/` - activity data

## Running locally

Open `index.html` in a browser, or serve the folder with any static file server:

```bash
npx serve .
```
