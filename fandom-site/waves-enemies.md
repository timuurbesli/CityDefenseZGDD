# Waves and Enemies

The '''Waves and Enemies''' system in City Defense Z creates escalating challenges through diverse zombie types, powerful boss encounters, and progressive difficulty scaling. Success requires understanding enemy behaviors, adapting defensive strategies, and preparing for climactic boss battles that test your full tactical capabilities.

== Enemy Philosophy ==

City Defense Z's enemy system rewards '''tactical knowledge''' and '''adaptive strategy''':
* '''Progressive Challenge''': Enemy strength and variety increase with each day
* '''Tactical Diversity''': Different zombie types require different counter-strategies
* '''Adaptive Defense''': Mixed enemy compositions demand varied defensive approaches
* '''Climactic Encounters''': Boss battles require full defensive coordination

----

== Basic Zombie Types ==

The core enemy roster features '''3 distinct zombie types''', each presenting unique tactical challenges that require specific defensive responses.

=== Normal Zombie ===
'''The standard threat - balanced and predictable'''

==== Visual Variants ====
<gallery mode="nolines" heights="400px" widths="350px">
File:NormalZombie_Variant1.png|Normal Zombie - Variant 1
File:NormalZombie_Variant2.png|Normal Zombie - Variant 2
File:NormalZombie_Variant3.png|Normal Zombie - Variant 3
File:NormalZombie_Variant4.png|Normal Zombie - Variant 4
File:NormalZombie_Variant5.png|Normal Zombie - Variant 5
File:NormalZombie_Variant6.png|Normal Zombie - Variant 6
</gallery>

==== Zombie Specifications ====
{| class="wikitable"
! Attribute !! Value !! Tactical Impact
|-
| '''Visual Design''' || 5+ unique models || Diverse texture pool for variety
|-
| '''Speed''' || Standard || Balanced movement rate
|-
| '''Durability''' || Baseline || Moderate health pool
|-
| '''Special Abilities''' || None || No unique mechanics
|-
| '''Wave Composition''' || ~70% of total || Primary threat volume
|}

==== Counter Strategy ====
* '''Standard Response''': Basic Soldiers and defensive structures handle effectively
* '''Resource Efficiency''': Cost-effective to eliminate with standard military units
* '''Formation Training''': Ideal for testing basic defensive setups
* '''Scaling Consideration''': Forms the baseline for all other enemy comparisons

----

=== Runner Zombie ===
'''Enhanced speed specialist - first to engage'''
[[File:RunnerZombie_Icon.png|right|300px|Runner Zombie]]
==== Zombie Specifications ====
{| class="wikitable"
! Attribute !! Value !! Tactical Impact
|-
| '''Visual Design''' || Same texture pool as Normal || Running animation differentiates
|-
| '''Speed''' || '''High''' || Significantly faster movement
|-
| '''Durability''' || Standard || Same health as Normal Zombies
|-
| '''Special Abilities''' || '''Running Animation''' || Reaches frontline first
|-
| '''Wave Composition''' || ~20% of total || Fast assault element
|}

==== Tactical Behavior ====
* '''First Contact''': Always engages defensive lines before other zombie types
* '''Priority Target''': Draws initial fire from defensive positions
* '''Animation System''': Distinct running animation makes them visually identifiable

==== Counter Strategy ====
* '''Rapid Response Units''': <span style="color:orange">'''[[Combat Units#Machine Gun (Bixi)|Machine Gun (Bixi)]]'''</span> excels against fast targets
* '''Chokepoint Control''': Use <span style="color:gray">'''[[Combat Units#Defense Walls|Defense Walls]]'''</span> to force engagement
* '''Early Detection''': <span style="color:red">'''[[Combat Units#Landmines|Landmines]]'''</span> provide area denial
* '''Priority Targeting''': Focus fire on runners to prevent early breakthrough

----

=== Exploding Zombie ===
'''High durability tank with devastating death explosion'''
[[File:ExplodingZombie_Icon.png|right|300px|Exploding Zombie]]
==== Zombie Specifications ====
{| class="wikitable"
! Attribute !! Value !! Tactical Impact
|-
| '''Visual Design''' || '''Unique texture''' || Distinct appearance from other types
|-
| '''Model Size''' || '''Larger''' || Bigger physical presence
|-
| '''Speed''' || Standard || Same movement as Normal Zombies
|-
| '''Durability''' || '''High HP''' || Significant health pool
|-
| '''Death Ability''' || '''Explosion VFX''' || AoE damage with visual effects on death
|-
| '''Wave Composition''' || ~10% of total || Elite threat element
|}

==== Tactical Behavior ====
* '''Tank Role''': Absorbs significant damage before elimination
* '''Death Threat''': Explosion damages nearby units and structures
* '''Visual Impact''': Explosion VFX provides clear feedback on elimination

==== Counter Strategy ====
* '''Long-Range Elimination''': <span style="color:blue">'''[[Combat Units#Mortar|Mortar]]'''</span> and <span style="color:purple">'''[[Combat Units#Rocket Launcher|Rocket Launcher]]'''</span> ideal
* '''Unit Spacing''': Avoid clustering soldiers near expected explosion zones
* '''<span style="color:navy">'''[[Combat Units#Airstrikes|Airstrikes]]'''</span>''': Eliminate from safe distance
* '''Wall Positioning''': Use barriers to control explosion impact zones

----

== Boss Zombie Types ==

The ultimate challenges feature '''3 distinct boss types''', each requiring specialized strategies and full defensive coordination to defeat.

=== Level 1 Boss: Stonefist ===
'''Dual-threat rock thrower with devastating melee capability'''
[[File:StonefistBoss_Icon.png|right|300px|Stonefist Boss]]
==== Boss Specifications ====
{| class="wikitable"
! Attribute !! Value !! Boss Threat
|-
| '''Boss Level''' || 1 || Entry-level boss encounter
|-
| '''Primary Ability''' || '''Rock Throwing''' || Long-range boulder attacks
|-
| '''Secondary Ability''' || '''Melee Strikes''' || Devastating close-combat damage
|-
| '''Health Pool''' || Massive || Requires sustained assault
|-
| '''Tactical Threat''' || Dual-range combat || Threatens both close and distant units
|}

==== Counter Strategy ====
* '''Dual-Range Defense''': Combine long-range <span style="color:blue">'''[[Combat Units#Heavy Weapons|heavy weapons]]'''</span> with close-combat <span style="color:orange">'''[[Combat Units#Basic Soldiers|soldiers]]'''</span>
* '''Positioning Flexibility''': Maintain units at multiple ranges to avoid total vulnerability
* '''Sustained Damage''': Focus continuous fire from multiple sources
* '''Wall Protection''': Use <span style="color:gray">'''[[Combat Units#Defense Walls|barriers]]'''</span> to protect against rock throws

----

=== Level 2 Boss: Banger ===
'''Melee combat with toxic death explosion'''
[[File:BangerBoss_Icon.png|right|300px|Banger Boss]]
==== Boss Specifications ====
{| class="wikitable"
! Attribute !! Value !! Boss Threat
|-
| '''Boss Level''' || 2 || Mid-tier boss encounter
|-
| '''Primary Ability''' || '''Melee Combat''' || Devastating close-range attacks
|-
| '''Death Ability''' || '''Toxic Explosion''' || Massive AoE damage on defeat
|-
| '''Health Pool''' || Enormous || Extended battle duration
|-
| '''Tactical Threat''' || Post-death area denial || Threatens entire defensive zone on death
|}

==== Counter Strategy ====
* '''Long-Range Elimination''': <span style="color:purple">'''[[Combat Units#Rocket Launcher|Rocket Launchers]]'''</span> and <span style="color:blue">'''[[Combat Units#Mortar|Mortars]]'''</span> essential
* '''Unit Evacuation''': Prepare to clear area before boss death
* '''<span style="color:navy">'''[[Combat Units#Airstrikes|Airstrike]]'''</span> Coordination''': Eliminate from maximum safe distance
* '''Defensive Sacrifice''': Accept loss of forward positions to ensure survival

----

=== Level 3 Boss: Toxicz ===
'''Long-range toxic specialist with projectile mastery'''
[[File:ToxiczBoss_Icon.png|right|300px|Toxicz Boss]]
==== Boss Specifications ====
{| class="wikitable"
! Attribute !! Value !! Boss Threat
|-
| '''Boss Level''' || 3 || Maximum-tier boss encounter
|-
| '''Primary Ability''' || '''Long-Range Toxic Projectiles''' || Devastating ranged attacks
|-
| '''Secondary Ability''' || '''Area Denial''' || Toxic zones restrict movement
|-
| '''Health Pool''' || Colossal || Ultimate endurance challenge
|-
| '''Tactical Threat''' || Battlefield control || Dominates entire combat area
|}

==== Counter Strategy ====
* '''Mobile Response''': Constant unit repositioning required
* '''Armor Investment''': <span style="color:darkorange">'''[[Meta Progression (Research System)#9. Weapons Upgrade|Maximum weapons upgrades]]'''</span> essential
* '''<span style="color:green">'''[[Combat Units#Outpost Towers|Tower Networks]]'''</span>''': Multiple firing positions for sustained damage
* '''Emergency Systems''': <span style="color:darkred">'''[[Meta Progression (Research System)#8. REVIVE UPGRADE|Revive capabilities]]'''</span> as final insurance

----

== Wave Mechanics ==

=== Progressive Difficulty System ===
'''Escalating challenge through day progression'''

==== Daily Scaling ====
{| class="wikitable"
! Day Range !! Enemy Composition !! Tactical Requirements
|-
| '''Days 1-7''' || Normal + Runner Zombies || Basic defensive setups sufficient
|-
| '''Days 8-15''' || Add Exploding Zombies || Diversified defensive strategies required
|-
| '''Days 16-25''' || All zombie types + Level 1-2 Bosses || Upgraded defenses and research investments
|-
| '''Days 25+''' || Maximum zombie density + Level 3 Bosses || Maximum defensive coordination required
|}

==== Wave Composition Example ====
'''Typical Late-Game Wave (100 zombies):'''
* '''70 Normal Zombies''' - Primary threat volume using diverse texture pool
* '''20 Runner Zombies''' - Fast assault element with running animations
* '''10 Exploding Zombies''' - Elite tank units with unique appearance and VFX

==== Wave Composition ====
* '''Mixed Formations''': Later waves combine multiple zombie types simultaneously
* '''Tactical Adaptation''': Single-strategy defenses become ineffective
* '''Boss Integration''': Bosses appear with supporting zombie formations
* '''Crescendo Battles''': Final waves test complete defensive mastery

----

== Pathfinding & Combat System ==

=== Zombie Movement Mechanics ===
'''Simple but effective AI behavior'''

==== Movement Patterns ====
* '''Direct Approach''': Zombies move straight toward base via shortest path
* '''Simple AI''': No complex routing or gap-seeking behavior
* '''Wall Interaction''': Attack walls blocking direct path rather than seeking alternatives
* '''Predictable Pathing''': Allows for strategic defensive positioning

==== Strategic Implications ====
* '''Funnel Creation''': <span style="color:gray">'''[[Combat Units#Defense Walls|Walls]]'''</span> reliably channel enemies into kill zones
* '''Chokepoint Control''': Predictable movement enables effective area denial
* '''Defensive Positioning''': Simple AI rewards strategic unit placement
* '''Wall Breaking''': Enemies focus on barriers rather than avoiding them

----

=== Wall System Mechanics ===
'''Defensive barriers with tactical limitations'''

==== Wall Properties ====
{| class="wikitable"
! Wall Type !! Durability !! Strategic Function !! Limitations
|-
| '''Defense Walls''' || Variable HP || Temporary barriers || Cannot be repaired during battle
|-
| '''<span style="color:gray">'''[[Combat Units#Placeable Walls (Research System)|Placeable Walls]]'''</span>''' || Enhanced HP || Permanent barriers || Limited total capacity
|-
| '''Main Base Wall''' || 100% → 0% || Ultimate defense || Destruction = immediate game failure
|}

==== Wall Strategy ====
* '''Temporary Protection''': Walls provide limited-time defensive advantage
* '''Strategic Placement''': Position to channel enemies into optimal engagement zones
* '''Daily Reset''': Destroyed walls rebuild automatically at day start
* '''Critical Defense''': Main base wall destruction ends the run immediately

----

=== Combat Resolution System ===
'''Automatic engagement with strategic positioning importance'''

==== Combat Mechanics ====
* '''Automatic Engagement''': Units attack zombies within range automatically
* '''Damage Calculation''': Based on unit types, levels, and <span style="color:darkorange">'''[[Meta Progression (Research System)#9. Weapons Upgrade|upgrade bonuses]]'''</span>
* '''Range Mechanics''': Different units have different engagement ranges
* '''Strategic Positioning''': Placement decisions critically affect defensive efficiency

==== Tactical Considerations ====
* '''Unit Placement''': Position units for optimal coverage and mutual support
* '''Range Optimization''': Maximize engagement distance while maintaining coverage
* '''Upgrade Integration''': <span style="color:darkblue">'''[[Meta Progression (Research System)|Research upgrades]]'''</span> significantly enhance combat effectiveness
* '''Formation Coordination''': Combined unit types provide superior defensive capability

----

== Enemy Counter-Strategy Guide ==

=== Basic Zombie Counters ===
{| class="wikitable"
! Enemy Type !! Primary Counter !! Secondary Counter !! Emergency Response
|-
| '''Normal Zombie''' || Basic Soldiers || Any defensive structure || Standard protocols
|-
| '''Runner Zombie''' || Machine Gun (Bixi) || Landmines + Walls || Rapid response units
|-
| '''Exploding Zombie''' || Long-range weapons || Airstrikes || Unit evacuation
|}

=== Boss Counter-Strategy Summary ===
{| class="wikitable"
! Boss Type !! Core Strategy !! Essential Units !! Research Priority
|-
| '''Stonefist''' || Dual-range defense || Mixed combat units || Balanced upgrades
|-
| '''Banger''' || Long-range elimination || Rocket Launcher + Mortar || Airstrike upgrades
|-
| '''Toxicz''' || Mobile response || Tower networks + mobility || Maximum upgrades + Revive
|}

----

== Wave Preparation Strategies ==

=== Early Wave Preparation (Days 1-7) ===
* '''Basic Military''': Focus on <span style="color:orange">'''[[Combat Units#Basic Soldiers|soldier production]]'''</span>
* '''Wall Networks''': Establish basic <span style="color:gray">'''[[Combat Units#Defense Walls|barrier systems]]'''</span>
* '''Economic Foundation''': Build <span style="color:gold">'''[[Resources & Economy Guide|resource generation]]'''</span>

=== Mid Wave Preparation (Days 8-15) ===
* '''Anti-Exploding Strategy''': Add <span style="color:red">'''[[Combat Units#Heavy Weapons|long-range weapons]]'''</span>
* '''Research Investment''': Begin <span style="color:darkblue">'''[[Meta Progression (Research System)|military upgrades]]'''</span>
* '''Enhanced Defenses''': Upgrade to <span style="color:green">'''[[Combat Units#Outpost Towers|tower systems]]'''</span>
* '''Unit Spacing''': Avoid clustering near potential explosion zones

=== Late Wave Preparation (Days 16+) ===
* '''Elite Forces''': <span style="color:orange">'''[[Combat Units#Soldier Evolution System|Enhanced/Elite soldiers]]'''</span>
* '''Maximum Upgrades''': Complete critical <span style="color:darkorange">'''[[Meta Progression (Research System)#9. Weapons Upgrade|weapons research]]'''</span>
* '''Emergency Systems''': <span style="color:navy">'''[[Combat Units#Airstrikes|Airstrikes]]'''</span> and <span style="color:darkred">'''[[Meta Progression (Research System)#8. REVIVE UPGRADE|revive capabilities]]'''</span>
* '''Boss Preparation''': Coordinate all defensive systems for boss encounters

----

== Related Systems ==

* '''<span style="color:red">'''[[Combat Units]]'''</span>''' - Complete guide to all defensive units and tactical deployment
* '''<span style="color:green">'''[[Resources & Economy Guide#Ammunition (Military Currency)|Military Economy]]'''</span>''' - Resource management for combat operations
* '''<span style="color:darkorange">'''[[Meta Progression (Research System)#9. Weapons Upgrade|Combat Upgrades]]'''</span>''' - Permanent enhancements for enemy encounters
* '''<span style="color:darkblue">'''[[Meta Progression (Research System)#Strategic Considerations|Strategic Planning]]'''</span>''' - Long-term preparation for escalating threats

----

''Know your enemy, adapt your strategy, and survive the escalating darkness.''

[[Category:Combat]]
[[Category:Enemies]]
[[Category:Strategy]]
[[Category:Game Systems]] 