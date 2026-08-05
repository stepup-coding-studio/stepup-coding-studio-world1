# Step Up Coding Studio — World 1 Cross-platform QA

Reference devices
- iPad (iOS/Safari): existing approved baseline; must not regress.
- Xiaomi Pad 8 (Android/Chrome): Android reference device.

## Visual comparison
- [ ] Up/down/left/right arrows have the same shape and proportion.
- [ ] Command labels are vertically centered.
- [ ] Command Palette width and spacing match closely.
- [ ] Grid is fully visible and square cells are not stretched.
- [ ] Coding Area is fully visible and scrolls vertically.
- [ ] RUN, Clear, Hint, Undo, and Teacher Mode controls are visible.
- [ ] Landscape layout has no horizontal overflow.

## Touch and interaction
- [ ] Tap each command to add it.
- [ ] Drag each command into Coding Area.
- [ ] Reorder blocks with touch.
- [ ] Delete one block at a time.
- [ ] Undo several times.
- [ ] Scroll Coding Area with one finger.
- [ ] RUN executes the route correctly.

## Audio and progression
- [ ] Music toggle works.
- [ ] Sound-effects toggle works.
- [ ] Success/error sounds work.
- [ ] Mission completion modal appears.
- [ ] Next Mission works.
- [ ] Progress remains correct after returning to Mission Select.

## Acceptance rule
Every Android improvement must be checked again on iPad. Do not accept a change that causes any iPad regression.
