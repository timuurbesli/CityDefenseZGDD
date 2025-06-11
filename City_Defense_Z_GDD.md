# Game Design Document – City Defense Z

## Overview
City Defense Z is a rogue-lite, wave-based zombie defense game. Players build and merge structures, place and evolve soldiers, and interact with dynamic threats while upgrading a persistent base across multiple runs.

At its core, City Defense Z is a strategy-defense game built around a card-based building placement system. Each in-game day, players are offered random building cards (e.g., Factory, Ammunition, Barracks) which they place on white grid tiles on the map.

When three buildings of the same type are placed horizontally or vertically adjacent, they automatically merge and evolve into a higher-level structure (Merge & Upgrade mechanic).

As the game progresses, enemy waves become stronger, and players must optimize their economy and defenses to survive.

## Core Gameplay Loop
- **Start a run**: Place buildings, defend against waves of zombies
- **Merge mechanics**: Upgrade soldiers by aligning 3 of the same type
- **Boost interaction**: Collect falling boosts to empower defenses
- **Dynamic threats**: React to zombie holes and changing wave directions
- **Run ends**: Player either dies or survives the final wave
- **Meta Progression**: Return to base, unlock permanent upgrades, and prepare for the next run

## Game Mechanics

### Resource and Production System
There are two types of currencies: run-currency and permanent. Permanent currencies persist between runs, while run-currencies reset when each run ends.

| Resource Type | Usage | Description | Type |
|---------------|-------|-------------|------|
| Resource | Card purchasing & placement | Earned at the end of each day. Spent to purchase and place new building cards. | Run-Currency |
| Ammunition | Unit & defense production | Prepared during the day, used at night against enemies. Consumed in active systems like unit creation, trap placement, and airstrikes. | Run-Currency |
| Research Point | Permanent upgrades through BASE | Produced with "laboratory" buildings, unlocks permanent upgrades through the "Main Base" | Permanent |
| Food | Supplies the food need of the population | Supplies the food needed for soldiers and base. If insufficient, "HUNGER" debuff will be applied. | Run-Currency |
| Population | Limits the maximum soldier count | Can be increased by creating & merging "house" buildings. | Run-Currency |

### Building Types
There are static and collectable buildings. Collectable buildings have their own production time, which may vary depending on the building type and level.

| Building Name | Description | Type | Grid Zone |
|---------------|-------------|------|-----------|
| House | Provides population | Static | Main Grid Zone |
| Barracks | Trains soldiers each day | Collectable | Main Grid Zone |
| Factory | Produces "Resource" | Collectable | Main Grid Zone |
| Laboratory | Produces "Research Point" | Collectable | Main Grid Zone |
| Ammunition | Produces "Ammunition" | Collectable | Main Grid Zone |
| Farm | Produces crops in nearby grids that are collectable | Collectable | Farm Grid Zone |

### Base Meta Progression
Players can unlock a permanent upgrade skill tree through the main base. These persistent upgrades require "Research Points" and allow players to customize their upgrade path over time.

Persistent upgrades consist of different main upgrade groups, each with its own sub-upgrades:

#### Main Persistent Upgrade Groups
1. **Building Cards Default Level Increase**
   - Up to 5 upgrades

2. **Trained Soldier's Default Level Increase**
   - Up to 5 upgrades

3. **Placable Wall's Upgrade**
   - Level 1: Increases maximum placable wall capacity by 20
   - Level 2: Increases maximum placable wall capacity by 20 and increases HP
   - Level 3: Wall capacity +20
   - Level 4: Electrifies walls, shocking zombies that attack the walls

4. **Farm Upgrade**
   - Level 1: Increases farm crop harvest by 75%
   - Level 2: Crops grow faster (1 day earlier)
   - Level 3: Farm will grow extra 2 grids of crop
   - Level 4: Increases farm crop harvest by 100%
   - Level 5: Crops grow faster (1 day earlier)

5. **Laboratory Upgrade**
   - Level 1: Increases research point generation by 50%
   - Level 2: Research points gathering finishes faster (1 day earlier)
   - Level 3: Increases research point generation by 100%

6. **Expedition Upgrade**
   - Level 1: Increases the survival rate of NPCs on expeditions by +20%
   - Level 2: Increases expedition rewards by 50%
   - Level 3: Expeditions finish faster (1 day earlier)

7. **NPC Upgrade**
   - Level 1: Amplifies the main buff effect of NPCs by 50%
   - Level 2: Amplifies the main buff effect of NPCs by 75%
   - Level 3: Amplifies the main buff effect of NPCs by 100%

8. **REVIVE UPGRADE** (Most expensive upgrade)
   - Level 1: When you lose, end the night by making standing zombies burn alive, then respawn base with 30% HP (usable 1 time per run)
   - Level 2: Makes revive upgrade usable 2 times per run
   - Level 3: Makes revive upgrade usable 3 times per run

9. **Weapons Upgrade**
   - Level 1: Increases the fire rate of soldiers (soldiers attack faster)
   - Level 2: Decreases the reload time of soldiers by 50%
   - Level 3: Increases the damage dealt by soldiers by 50%

10. **Airstrike Upgrade**
    - Level 1: Airstrikes are 50% cheaper
    - Level 2: Unlocks 3-bomb launcher plane attack
    - Level 3: Increases the radius of airstrikes by 50%

11. **Reroll Cards Upgrade**
    - Level 1: Adds REROLL function on day cycle when building
    - Level 2: Adds +1 reroll count
    - Level 3: Adds +1 reroll count
    - Level 4: Adds +1 reroll count

### Boost & Combat Interaction System
Zombies drop time-limited boosts that disappear in 5 seconds if not collected:

#### Boost Types:
- **Damage Boost (30s)**: +50% soldier damage
- **Fire Rate Boost (20s)**: +35% attack speed
- **Shield Boost (10s)**: Absorbs 50% damage
- **Resource Boost**: Collected resources provide +50% more for the next 6 collections

Boosts can be stored and used strategically (e.g., during boss waves). These boosters will be aimed at soldiers and have a certain AoE radius, similar to Clash of Clans (healing potion, damage potion). Players must aim them at soldier grids.

### Zombie Hole System (Dynamic Threats)
- Random cracks appear mid-combat, creating spawn pits
- These constantly spawn zombies if not closed
- Players must tap the hole 5 times in quick succession to seal it
- For zombie hole destruction animation, a missile can be launched with planes after 5 taps
- Each tap provides visual/audio feedback; failing to complete all taps in time resets the sequence
- Adds real-time threat awareness and map management

### Living Base with NPCs
Players discover and rescue NPCs during runs. On specific days (e.g., day 5), two NPCs will approach the base. Players can only choose one via a UI popup that shows their expedition stats and main buff skills.

#### NPC Types:
- **Scientist**: +30% research point speed, but poor at expeditions
- **Military Expert**: Boosts soldier stats
- **Farmer**: Boosts farm production
- **Guerilla**: Excels at expeditions with high survival rate and better chance to find loot

NPCs physically appear in the base, walking and interacting. Each NPC has unique dialogues when clicked (6 different dialogues per NPC, randomly triggered). Voice lines will be added with sound effects.

Example Farmer NPC dialogues:
1. "Hello captain, everything is good at the farm"
2. "Farm farm farm... everyday I farm, that's what I do"

### Expeditions (NPC)
NPCs can be sent on expeditions of three different types:
- Small expedition
- Medium expedition
- Large expedition

Initially, medium and large expeditions are locked. They can be unlocked permanently through the main base by spending research points.

Players may send one or more NPCs on an expedition simultaneously. Sending more NPCs increases survival rate but doesn't change the reward, creating a risk/reward decision. Players can send NPCs on separate solo expeditions to claim multiple rewards, but risk losing NPCs who may not survive.

Sending an NPC on an expedition consumes FOOD and a small amount of ammunition, as NPCs will use these resources during the expedition.

#### Expedition Type Details:
- **Small expedition**: Low reward, high chance of survival, lasts 2 days
- **Medium expedition**: Medium reward, medium chance of survival, lasts 4 days
- **Large expedition**: High reward, medium chance of survival, lasts 5 days

#### Expedition Rewards:
Expeditions can provide in-game resources: food, resource, ammunition, and research points. Players can track how many days remain until NPCs return.

### 3-Day Offerings
After every 3 days, the game provides 3 different reward options. Players must choose one to proceed. Rewards are randomly generated and may include: Ammunition, Resource, Research Point, or Food.

## Zombie Types

### Basic Zombies
- **Level 1 Zombie (Normal Zombie)**
  - Different speed and durability levels
  - Various appearance variants for model diversity

- **Level 2 Zombie (Runner Zombie)**
  - Faster movement speed

- **Level 3 Zombie (Exploding Zombie)**
  - High durability and capable of area-effect attacks
  - Explodes when defeated, damaging nearby targets
  - Very slow movement speed

- **Level 4 Zombie (Ranged Zombie)**
  - Attacks from a distance

- **Level 5 Zombie**
  - Advanced zombie type

### Boss Zombies
Boss zombies have larger models, greater HP and damage, and some may have AOE attacks.

- **Level 1 Boss Zombie (Stonefist)**
  - Can pick up a large rock from the ground and throw it at enemies
  - Can attack enemies at close range with hand and kick strikes

- **Level 2 Boss Zombie (Deathtouch)**
  - Has a sword-like arm that it swings, followed by tentacle-like whip attacks

- **Level 3 Boss Zombie (Banger)**
  - Strikes with hands if an enemy is nearby
  - Creates a large explosion upon death, releasing toxic gas
  - Soldiers in the vicinity are affected by the explosion and then poisoned

- **Level 4 Boss Zombie (Toxicz)**
  - Can open its mouth and shoot at long distances

## Maps
There will be 4 different maps. Initially, only the first map is playable, with others unlocking based on achievements:
- Second map unlocks after surviving 50 days on the first map
- Third map unlocks after surviving 75 days on the second map

Each map has its own story introduction, providing narrative reasons for defending the base.

### Map Story Examples:
- **Map 1 Intro**: "Hey captain, we had to quickly establish a base here due to circumstances. We need to repair our planes to leave, but it will take 50 days."
  - After 50 days: "Hey captain, the plane is ready. We can leave whenever you want." (Options: finish or continue infinitely)

- **Final Map Intro** (Lab or Hospital): "Hey captain, we finally found the vaccine against the zombies, but it will take 100 days to produce it. Can we survive that long?"

The story will be conveyed via walkie-talkie by NPCs, with each map having its own narrative.

## Ally Soldier Types

| Name | Description | Is Mergeable |
|------|-------------|--------------|
| Soldier | Basic troop, trains from barracks. Mergeable with 3 soldiers into 1. | Yes |
| Mortar | Specialized artillery unit | No |
| Machine Gun (Bixi) | High fire rate unit | No |
| Rocket Launcher | Heavy damage unit | No |

## Placable Defense Objects

| Name | Description | Grid Size | Is Mergeable | Resource Price |
|------|-------------|-----------|--------------|----------------|
| Landmines | Explodes when zombies walk over it, killing nearby zombies, then expires. | 1x1 | No | Ammunition |
| Outpost (Defense Tower) | Can be placed into grids, attacks nearby zombies, can be destroyed by zombies. | 3x3 | Yes | Ammunition |
| Defense Wall | Can be placed into grids. | 1x1 | No | Ammunition | 