# City Defense Z - Level System Design & Config Curve

## Overview
A comprehensive wave-based progression system for City Defense Z that scales difficulty dynamically while maintaining player agency and strategic depth. The system supports infinite gameplay with configurable difficulty spikes and tactical zombie formations.

---

## Core System Architecture

### 1. Day-Based Progression System

#### Day Structure
```csharp
[System.Serializable]
public class DayConfig
{
    public int dayNumber;
    public float nightDuration = 60f;           // Base night duration in seconds
    public WaveConfig[] waves;                  // Multiple waves per night possible
    public DifficultyModifiers modifiers;       // Day-specific difficulty adjustments
    public bool isBossDay;                      // Special boss encounter day
    public FormationStrategy[] formations;      // Available formation strategies
}
```

#### Wave Configuration
```csharp
[System.Serializable]
public class WaveConfig
{
    public string waveName;
    public float spawnDelay = 0f;               // Delay before this wave starts
    public int totalZombies = 100;             // Total zombies in this wave
    public ZombieComposition composition;       // Zombie type percentages
    public FormationStrategy formation;         // How zombies spawn/move
    public BossConfig boss;                     // Optional boss for this wave
}
```

---

## 2. Zombie Type Progression System

### Unlock Timeline
```csharp
[System.Serializable]
public class ZombieUnlockConfig
{
    [Header("Zombie Type Unlocks")]
    public int normalZombieUnlockDay = 1;       // Always available
    public int runnerZombieUnlockDay = 5;       // Unlocks at day 5
    public int explodingZombieUnlockDay = 10;   // Unlocks at day 10
    
    [Header("Boss Unlocks")]
    public int bigExplodingBossDay = 7;         // First boss type
    public int rockThrowerBossDay = 15;         // Second boss type  
    public int toxicSpitterBossDay = 25;        // Final boss type
}
```

### Zombie Composition System
```csharp
[System.Serializable]
public class ZombieComposition
{
    [Range(0, 100)] public float normalZombiePercent = 80f;
    [Range(0, 100)] public float runnerZombiePercent = 10f;
    [Range(0, 100)] public float explodingZombiePercent = 10f;
    
    // Validation: Total should equal 100%
    public bool IsValid => Mathf.Approximately(
        normalZombiePercent + runnerZombiePercent + explodingZombiePercent, 100f);
}
```

---

## 3. Formation Strategy System

### Formation Types
```csharp
public enum FormationType
{
    // Easy Formations (Bad for zombies, good for player)
    RunnersFirst,           // Runners charge first, normals follow (runners die fast)
    RandomScattered,        // Random spawn timing, no coordination
    
    // Medium Formations
    UniformAdvance,         // All types spawn together, advance uniformly
    WaveByWave,            // Spawn in distinct waves by type
    
    // Hard Formations (Good for zombies, challenging for player)
    HumanShield,           // Normals first, runners behind using them as shields
    PincerMovement,        // Split spawning from multiple directions
    ExploderShield,        // Exploders in front, others behind (dangerous)
    BossEscort             // Boss spawns with protective formation around it
}
```

### Formation Implementation
```csharp
[System.Serializable]
public class FormationStrategy
{
    public FormationType formationType;
    public float difficultyRating;          // 1.0 = baseline, 1.5 = 50% harder
    public SpawnPattern[] spawnPatterns;    // How different zombie types spawn
    public float formationDelay = 2f;       // Time between formation phases
}

[System.Serializable]
public class SpawnPattern
{
    public ZombieType zombieType;
    public float spawnDelay;                // When this type starts spawning
    public float spawnDuration;             // How long to spawn this type
    public AnimationCurve spawnRate;        // Spawn rate over time
    public Vector2[] spawnPositions;        // Relative spawn positions
}
```

---

## 4. Difficulty Scaling System

### Progressive Difficulty Curve
```csharp
[System.Serializable]
public class DifficultyModifiers
{
    [Header("Zombie Stats")]
    public float healthMultiplier = 1f;         // Zombie HP scaling
    public float speedMultiplier = 1f;          // Zombie speed scaling
    public float damageMultiplier = 1f;         // Zombie damage scaling
    
    [Header("Wave Properties")]
    public float zombieCountMultiplier = 1f;    // Total zombie count scaling
    public float spawnRateMultiplier = 1f;      // How fast zombies spawn
    public float nightDurationMultiplier = 1f;  // Night length scaling
    
    [Header("Special Mechanics")]
    public float bossChance = 0f;               // Chance for random boss spawn
    public int maxSimultaneousWaves = 1;        // Multiple waves at once
    public bool enableFormationMixing = false;  // Mix different formations
}
```

### Difficulty Curve Presets
```csharp
[CreateAssetMenu(fileName = "DifficultyPreset", menuName = "City Defense Z/Difficulty Preset")]
public class DifficultyPreset : ScriptableObject
{
    [Header("Curve Configuration")]
    public AnimationCurve healthCurve;          // Health scaling over days
    public AnimationCurve speedCurve;           // Speed scaling over days
    public AnimationCurve zombieCountCurve;     // Count scaling over days
    public AnimationCurve formationComplexity;  // Formation difficulty over days
    
    [Header("Difficulty Spikes")]
    public DifficultySpike[] difficultySpikes;  // Special difficulty increases
}

[System.Serializable]
public class DifficultySpike
{
    public int triggerDay;                      // When spike occurs
    public float intensityMultiplier = 2f;      // How much harder
    public int duration = 1;                    // How many days it lasts
    public string spikeName = "Difficulty Spike"; // For debugging/UI
}
```

---

## 5. Boss Encounter System

### Boss Day Configuration
```csharp
[System.Serializable]
public class BossConfig
{
    public BossType bossType;
    public int bossCount = 1;                   // Multiple bosses possible
    public float bossHealthMultiplier = 1f;     // Boss HP scaling
    public ZombieComposition escort;            // Supporting zombies
    public FormationType escortFormation;       // How escort protects boss
    public float spawnDelay = 30f;              // Delay before boss spawns
}

public enum BossType
{
    None,
    BigExplodingZombie,     // High HP, massive death explosion
    RockThrowerZombie,      // Ranged attacks, high damage
    ToxicSpitterZombie      // Area denial, toxic damage over time
}
```

### Boss Schedule System
```csharp
[System.Serializable]
public class BossSchedule
{
    [Header("Guaranteed Boss Days")]
    public int[] guaranteedBossDays = {7, 15, 25, 40, 60}; // Fixed boss encounters
    
    [Header("Random Boss Chances")]
    public AnimationCurve randomBossChance;     // Chance increases over time
    public int minDaysBetweenBosses = 5;        // Prevent boss spam
    
    [Header("Boss Progression")]
    public BossProgression[] bossProgressions;   // Which bosses unlock when
}

[System.Serializable]
public class BossProgression
{
    public BossType bossType;
    public int unlockDay;
    public float baseWeight = 1f;               // Selection probability weight
    public AnimationCurve weightOverTime;       // Weight changes over days
}
```

---

## 6. Configuration Examples

### Early Game (Days 1-10)
```yaml
Day 1-4:
  - Zombies: 100% Normal (50-80 total)
  - Formation: RandomScattered (easy)
  - Duration: 60 seconds
  - No bosses

Day 5-7:
  - Zombies: 85% Normal, 15% Runner (80-120 total)
  - Formation: RunnersFirst (easy) or UniformAdvance (medium)
  - Duration: 75 seconds
  - Boss Day 7: BigExplodingZombie with Normal escort

Day 8-10:
  - Zombies: 80% Normal, 20% Runner (100-150 total)
  - Formation: UniformAdvance or HumanShield (medium-hard)
  - Duration: 90 seconds
  - Difficulty Spike Day 10: +50% zombie count
```

### Mid Game (Days 11-25)
```yaml
Day 11-15:
  - Zombies: 70% Normal, 20% Runner, 10% Exploding (150-200 total)
  - Formation: HumanShield, PincerMovement (hard)
  - Duration: 90-120 seconds
  - Boss Day 15: RockThrowerZombie with mixed escort

Day 16-25:
  - Zombies: 60% Normal, 25% Runner, 15% Exploding (200-300 total)
  - Formation: ExploderShield, BossEscort (very hard)
  - Duration: 120-150 seconds
  - Multiple waves possible
  - Boss Day 25: ToxicSpitterZombie with complex formation
```

### Late Game (Days 26+)
```yaml
Day 26+:
  - Zombies: 50% Normal, 30% Runner, 20% Exploding (300+ total)
  - Formation: All formations, mixed strategies
  - Duration: 150+ seconds
  - Multiple simultaneous waves
  - Random boss chance increases over time
  - All difficulty multipliers scale continuously
```

---

## 7. Unity Implementation Structure

### Core Manager Classes
```csharp
// Main controller
public class LevelManager : MonoBehaviour
{
    public LevelSystemConfig config;
    public DifficultyPreset difficultyPreset;
    
    private int currentDay = 1;
    private WaveSpawner waveSpawner;
    private FormationController formationController;
    
    public void StartNight() { /* Implementation */ }
    public void EndNight() { /* Implementation */ }
    public DayConfig GetDayConfig(int day) { /* Implementation */ }
}

// Wave spawning logic
public class WaveSpawner : MonoBehaviour
{
    public void SpawnWave(WaveConfig config, DifficultyModifiers modifiers) { /* Implementation */ }
    public void SpawnZombie(ZombieType type, Vector3 position, DifficultyModifiers modifiers) { /* Implementation */ }
}

// Formation execution
public class FormationController : MonoBehaviour
{
    public void ExecuteFormation(FormationStrategy strategy, WaveConfig wave) { /* Implementation */ }
    public IEnumerator SpawnWithPattern(SpawnPattern pattern) { /* Implementation */ }
}
```

### Scriptable Object Configuration
```csharp
[CreateAssetMenu(fileName = "LevelSystemConfig", menuName = "City Defense Z/Level System Config")]
public class LevelSystemConfig : ScriptableObject
{
    [Header("Global Settings")]
    public ZombieUnlockConfig unlockConfig;
    public BossSchedule bossSchedule;
    
    [Header("Day Configurations")]
    public DayConfig[] predefinedDays;          // Days 1-50 pre-configured
    public DayConfig infiniteTemplate;          // Template for days 50+
    
    [Header("Formation Library")]
    public FormationStrategy[] availableFormations;
    
    [Header("Difficulty Scaling")]
    public DifficultyPreset[] difficultyPresets; // Easy, Normal, Hard, Nightmare
}
```

---

## 8. Advanced Features

### Dynamic Difficulty Adjustment
```csharp
public class DynamicDifficulty : MonoBehaviour
{
    private float playerPerformanceScore;
    
    public void AdjustDifficulty(float playerWinRate, float averageSurvivalTime)
    {
        // Increase difficulty if player is doing too well
        // Decrease if player is struggling
        // Maintain challenge without frustration
    }
}
```

### Formation AI System
```csharp
public class FormationAI : MonoBehaviour
{
    public FormationType SelectOptimalFormation(PlayerDefenseAnalysis defense)
    {
        // Analyze player's defensive setup
        // Choose formation that exploits weaknesses
        // Add unpredictability to keep gameplay fresh
    }
}
```

### Analytics Integration
```csharp
public class LevelAnalytics : MonoBehaviour
{
    public void TrackWavePerformance(int day, float survivalTime, bool victory)
    {
        // Track player performance per day
        // Identify difficulty spikes that are too harsh
        // Balance formations based on player success rates
    }
}
```

---

## 9. Balancing Considerations

### Player Progression Curve
- **Days 1-10**: Learning phase, introduce mechanics gradually
- **Days 11-25**: Skill development, require strategic thinking
- **Days 26-50**: Mastery testing, full complexity
- **Days 50+**: Infinite scaling, ultimate challenge

### Formation Difficulty Balance
- **Easy Formations**: 0.8x difficulty multiplier
- **Medium Formations**: 1.0x difficulty multiplier  
- **Hard Formations**: 1.3x difficulty multiplier
- **Very Hard Formations**: 1.6x difficulty multiplier

### Boss Encounter Spacing
- Guarantee major boss fights at key milestones
- Prevent boss fatigue with minimum spacing
- Scale boss difficulty with player progression
- Provide clear telegraphing for boss encounters

---

## 10. Testing & Iteration Framework

### Automated Testing
```csharp
public class LevelSystemTester : MonoBehaviour
{
    public void SimulateDay(int day, PlayerSkillLevel skill)
    {
        // Simulate player performance at different skill levels
        // Validate difficulty curve feels appropriate
        // Identify days that are too easy/hard
    }
}
```

### Configuration Validation
```csharp
public class ConfigValidator : MonoBehaviour
{
    public bool ValidateConfiguration(LevelSystemConfig config)
    {
        // Ensure zombie percentages sum to 100%
        // Verify boss unlock days are logical
        // Check formation difficulty progression
        // Validate animation curves are reasonable
    }
}
```

---

This system provides:
- **Infinite scalability** with meaningful progression
- **Tactical depth** through formation strategies
- **Player agency** in determining game length
- **Configurable difficulty spikes** for key moments
- **Balanced boss encounters** at strategic intervals
- **Flexible zombie composition** that evolves over time
- **Strategic formation variety** that challenges different defensive approaches

The modular design allows easy tweaking and balancing through Unity's Inspector, while the scriptable object architecture enables designers to create and test different difficulty curves without code changes.