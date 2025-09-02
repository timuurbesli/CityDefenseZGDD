# City Defense Z - English Onboarding Tutorial System

## Overview

Soft onboarding system for City Defense Z. Step-by-step player introduction through a sliding panel from the right side of the screen.

## Tutorial Steps

### Step 1: Camera Movement (WASD)
**Location**: First step after game starts  
**Panel Position**: Panel slides in from the right side  
**Duration**: Until player clicks NEXT button

#### Panel Content:
```
📷 CAMERA CONTROL

Welcome to City Defense Z! 

Let's learn how to control the camera:

🎮 Use WASD keys to move the camera

[Photo Reference: step (1).png - WASD movement]
[GIF: WASD camera movement]

Try moving the camera around!

[NEXT BUTTON]
```

#### Technical Notes:
- Panel slides in with smooth animation from the right
- GIFs auto-loop continuously
- Panel remains open until NEXT button is pressed

---

### Step 2: Camera Rotation (Middle Mouse)
**Location**: Current position  
**Panel Position**: Right panel updates  
**Duration**: Until player clicks NEXT button

#### Panel Content:
```
📷 CAMERA ROTATION

Great! Now let's learn camera rotation:

🖱️ Hold middle mouse button (scroll) to look around

[Photo Reference: step (2).png - Middle mouse rotation]
[GIF: Middle mouse button camera rotation]

Try rotating the camera to see your surroundings!

[NEXT BUTTON]
```

#### Technical Notes:
- Shows middle mouse button camera rotation
- Player learns to look around the environment
- Builds on previous WASD movement knowledge

---

### Step 3: Building Placement
**Location**: Camera focuses on building grid area  
**Panel Position**: Right panel updates  
**Interaction**: Building cards pop up

#### Panel Content:
```
🏗️ BUILDING PLACEMENT

Now let's learn to build your base!

Select a card and place it on the grid:

[Photo Reference: step (3).png]
[GIF: Mouse selecting card and placing on grid]

🏭 Factory (Yellow)
Produces resources. Essential building material.

🔫 Ammunition Depot (Green)  
Produces weapons and ammo. Required for soldiers.

🏠 House (Gray)
Provides population capacity. Needed for workers.

🔬 Laboratory (Blue)
Generates research points. For permanent upgrades.

⚔️ Barracks (Orange)
Produces soldiers. Essential for your defense.

[NEXT BUTTON - CANNOT BE PRESSED WITHOUT PLACING A BUILDING] 
```

#### Technical Notes:
- Camera automatically focuses on building grid
- Building cards pop up with animation
- Player can place any building type
- NEXT button remains inactive until a building is placed

---

### Step 4: Unit Placement
**Location**: Camera focuses on unit placement grid  
**Panel Position**: Right panel updates  
**UI Change**: Units panel opens at bottom left (first time)

#### Panel Content:
```
⚔️ DEPLOY YOUR UNITS

Defense time! Deploy your soldiers.

Use the Units panel at the bottom left:

[Photo Reference: step (4).png]
[GIF: Selecting units from panel and placing them]
[GIF: Buying and placing mines]

1️⃣ Place Soldiers on the grid
2️⃣ Use "Buy" to purchase mines  
3️⃣ Place mines at strategic points

⚠️ All basic soldiers must be deployed!

[NEXT BUTTON - INACTIVE]
```

#### Technical Notes:
- Units panel opens for the first time at this step
- NEXT button remains inactive until all basic soldiers are placed
- Player must deploy all starting soldiers
- Mine purchasing and placement is demonstrated

---

### Step 5: End Day
**Location**: Current position  
**Panel Position**: Right panel updates  
**Interaction**: Focus on "End Day" button

#### Panel Content:
```
🌙 START THE NIGHT

Your preparations are complete! Now start the night.

Click the "End Day" button:

[Photo Reference: step (5).png]
[GIF: Clicking End Day button]

The zombies are coming! Is your defense ready?

[NEXT BUTTON]
```

#### Technical Notes:
- "End Day" button gets highlight/glow effect
- GIF shows clicking the End Day button
- After this step, night battle begins and automatically proceeds to Step 6

---

### Step 6: Night Battle
**Location**: Camera focuses on war grid position  
**Panel Position**: Right panel updates  
**Trigger**: Automatic after night begins  
**Duration**: Throughout 120-second night duration

#### Panel Content:
```
⚔️ NIGHT BATTLE

The zombies have arrived! Battle has begun!

⏰ Survive 120 seconds or kill all zombies!

During night battle:
• Zombies come in waves
• Soldiers fight automatically  
• Don't forget to collect boosts!

✈️ AIR SUPPORT:
Use air support on crowded zombie areas!

[Photo Reference: step (6).png]
[GIF: Airstrike usage - air attack on zombies]

• Maximum 2 air supports per night
• Use on crowded zombie groups
• Deals massive damage!

[NEXT BUTTON - clickable]
```

#### Technical Notes:
- Camera automatically focuses on war grid
- Zombies begin spawning
- NEXT button becomes active after 120 seconds or when all zombies are killed
- Airstrike usage shown with GIF
- Panel stays open throughout the night

---

### Step 7: Resource Collection
**Location**: Camera focuses on placed building in building grid  
**Panel Position**: Right panel updates  
**Interaction**: Resource collection from building required

#### Panel Content:
```
💰 RESOURCE COLLECTION

Night is over! Now collect your resources.

Learn how to collect resources from buildings:

[Photo Reference: step (7).png]
[GIF: Clicking on building to collect resources]

• Buildings continuously produce resources
• Click on the building when resource icon appears
• Don't forget to collect your resources!

⚠️ You must collect resources from one building!

[NEXT BUTTON - INACTIVE]
```

#### Technical Notes:
- Camera focuses on a placed building
- Player must click on building to collect resources
- NEXT button remains inactive until resources are collected
- Resource collection animation is highlighted

---

### Step 8: Farm Management
**Location**: Camera focuses on farm area  
**Panel Position**: Right panel updates  
**Interaction**: Crop collection required

#### Panel Content:
```
🌾 FARM MANAGEMENT

Almost done! Learn about the farm area.

Food resources are very important:

[Photo Reference: step (8).png]
[GIF: Clicking on crops to collect food]

• Click on crops to collect food
• Without food, you get HUNGER debuff!
• HUNGER reduces your soldiers' damage

⚠️ Your combat ability will be affected, be careful!

You must collect food from crops:

[NEXT BUTTON - INACTIVE]
```

#### Technical Notes:
- Camera focuses on farm area
- Player must click on crops to collect food
- NEXT button remains inactive until food is collected
- Importance of HUNGER debuff is emphasized

---

### Step 9: Meta Progression - After Game Over
**Trigger**: First time Game Over screen is seen  
**Location**: On Game Over screen  
**Panel Position**: Right panel opens

#### Panel Content:
```
📈 META UPGRADES

Don't worry! Death is part of learning.

Click "Continue to Meta Upgrades" button:

[Photo Reference: step (9).png]
[GIF: Clicking meta upgrades button]

Spend your research points here:

🔬 Permanent upgrades
🏗️ Stronger buildings
⚔️ Better soldiers
🎯 New abilities

Get stronger with each death!

[NEXT BUTTON]
```

#### Technical Notes:
- Only triggers on first Game Over
- "Continue to Meta Upgrades" button gets highlight
- Emphasizes importance of meta upgrade system

---

### Step 10: Main Menu - Permanent Upgrades
**Trigger**: After returning to main menu  
**Location**: On save slots screen  
**Panel Position**: Right panel opens

#### Panel Content:
```
🔧 PERMANENT UPGRADES

One more bonus tip!

See the "Permanent Upgrades" button next to save slots:

[Photo Reference: step (10).png]
[GIF: Showing permanent upgrades button]

You can access permanent upgrades from here too:

• In-game meta upgrades
• Main menu permanent upgrades
• Both are the same system!

You're ready now! Good luck, commander!

[CLOSE BUTTON]
```

#### Technical Notes:
- Triggers on return to main menu
- Points to permanent upgrades button
- Completes onboarding as final step

---

## Technical Features

### Panel System
- **Position**: Slide animation from right side of screen
- **Width**: 30-35% of screen width
- **Background**: Semi-transparent overlay
- **Animation**: Smooth slide-in/slide-out

### Photo Integration
- **Format**: PNG reference images for each step
- **Size**: Recommended 300x200 pixels
- **Quality**: Resolution matching game UI
- **Content**: Specific interactions for each step
- **Files**: step (1).png through step (10).png

### GIF Integration
- **Format**: Looped GIF animations
- **Size**: Recommended 300x200 pixels
- **Quality**: Resolution matching game UI
- **Content**: Specific interactions for each step

### Button States
- **NEXT**: Default active, conditional in some steps
- **CLOSE**: Only in final step
- **Highlight**: Glow effect on important UI elements

### Conditional Logic
- **Step 3**: NEXT inactive until building is placed
- **Step 4**: NEXT inactive until all basic soldiers are deployed
- **Step 7**: NEXT inactive until resources are collected
- **Step 8**: NEXT inactive until food is collected
- **Step 9**: Only triggers on first Game Over
- **Step 10**: Triggers once on main menu return

### Localization Support
- All text with localization keys
- Support for special characters
- Marketing terms can remain in English (e.g., "HOOK")

---

## Implementation Notes

### Player Experience
- **Seamless**: Teaching while gameplay continues
- **Optional**: Skip option available at each step
- **Visual**: GIF-heavy teaching instead of text-heavy
- **Progressive**: Each step builds on previous knowledge

### Performance
- GIFs loaded with lazy loading
- Panel rendered only when needed
- GPU accelerated animations
- Photo references loaded on demand

### Test Scenarios
- New player experience testing
- Correct triggering of each step
- Proper highlighting of UI elements
- GIF and photo display functionality
- Skip and progression flow testing

### Accessibility
- Clear visual indicators
- Readable text sizes
- High contrast elements
- Keyboard navigation support

This comprehensive 10-step onboarding system will help players easily learn City Defense Z and master its core mechanics through visual guidance and hands-on practice.
