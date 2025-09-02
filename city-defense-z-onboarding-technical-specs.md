# City Defense Z - Onboarding Technical Implementation Specifications

## System Architecture

### OnboardingManager Class
```csharp
public class OnboardingManager : MonoBehaviour
{
    [Header("Onboarding Settings")]
    public OnboardingStep[] steps;
    public OnboardingPanel panelPrefab;
    public float panelSlideSpeed = 1.0f;
    
    private int currentStep = 0;
    private OnboardingPanel activePanel;
    private bool onboardingActive = false;
    
    // Events
    public static event System.Action<int> OnStepChanged;
    public static event System.Action OnOnboardingCompleted;
}
```

### OnboardingStep ScriptableObject
```csharp
[CreateAssetMenu(fileName = "OnboardingStep", menuName = "City Defense Z/Onboarding Step")]
public class OnboardingStep : ScriptableObject
{
    [Header("Step Configuration")]
    public string stepId;
    public OnboardingStepType stepType;
    public LocalizedString title;
    public LocalizedString description;
    public Sprite[] gifs; // GIF frames as sprites
    public float gifFrameRate = 10f;
    
    [Header("Camera Control")]
    public Transform cameraTarget;
    public float cameraTransitionDuration = 1.0f;
    
    [Header("UI Highlights")]
    public string[] uiElementsToHighlight;
    public Color highlightColor = Color.yellow;
    
    [Header("Completion Conditions")]
    public OnboardingCondition[] completionConditions;
    public bool nextButtonEnabled = true;
}
```

### OnboardingPanel UI System
```csharp
public class OnboardingPanel : MonoBehaviour
{
    [Header("UI Components")]
    public TextMeshProUGUI titleText;
    public TextMeshProUGUI descriptionText;
    public Image gifDisplay;
    public Button nextButton;
    public Button closeButton;
    public CanvasGroup canvasGroup;
    
    [Header("Animation")]
    public RectTransform panelRect;
    public float slideInPosition = 0f;
    public float slideOutPosition = 500f;
    
    private Coroutine gifAnimationCoroutine;
    private OnboardingStep currentStep;
}
```

## Step-by-Step Implementation

### Step 1: Camera Controls
```csharp
public class CameraControlStep : OnboardingStep
{
    protected override void OnStepEnter()
    {
        // Show WASD and middle mouse input visualization
        InputVisualizationManager.ShowWASDKeys(true);
        InputVisualizationManager.ShowMiddleMouseButton(true);
        
        // Track player input for completion
        InputManager.OnWASDPressed += CheckCameraMovement;
        InputManager.OnMiddleMouseHeld += CheckCameraRotation;
    }
    
    private bool wasdUsed = false;
    private bool middleMouseUsed = false;
    
    private void CheckCameraMovement()
    {
        wasdUsed = true;
        CheckCompletion();
    }
    
    private void CheckCameraRotation()
    {
        middleMouseUsed = true;
        CheckCompletion();
    }
    
    private void CheckCompletion()
    {
        if (wasdUsed && middleMouseUsed)
        {
            // Enable next button or auto-proceed
            OnboardingManager.Instance.EnableNextButton();
        }
    }
}
```

### Step 2: Building Placement
```csharp
public class BuildingPlacementStep : OnboardingStep
{
    protected override void OnStepEnter()
    {
        // Focus camera on building grid
        CameraController.Instance.FocusOnTarget(buildingGridCenter, 1.0f);
        
        // Show building cards
        BuildingCardManager.Instance.ShowCards(true);
        BuildingCardManager.Instance.OnBuildingPlaced += OnBuildingPlaced;
        
        // Highlight building cards
        UIHighlightManager.HighlightElements("BuildingCards", highlightColor);
    }
    
    private void OnBuildingPlaced(BuildingType type, Vector3 position)
    {
        // Any building placement completes this step
        OnboardingManager.Instance.EnableNextButton();
    }
}
```

### Step 3: Unit Placement
```csharp
public class UnitPlacementStep : OnboardingStep
{
    [Header("Unit Requirements")]
    public int requiredBasicSoldiers = 3;
    private int placedSoldiers = 0;
    
    protected override void OnStepEnter()
    {
        // Focus camera on unit grid
        CameraController.Instance.FocusOnTarget(unitGridCenter, 1.0f);
        
        // Show units panel for first time
        UnitsPanel.Instance.SetVisible(true);
        UnitsPanel.Instance.OnUnitPlaced += OnUnitPlaced;
        
        // Disable next button initially
        OnboardingManager.Instance.SetNextButtonEnabled(false);
        
        // Highlight units panel
        UIHighlightManager.HighlightElements("UnitsPanel", highlightColor);
    }
    
    private void OnUnitPlaced(UnitType type, Vector3 position)
    {
        if (type == UnitType.BasicSoldier)
        {
            placedSoldiers++;
            
            if (placedSoldiers >= requiredBasicSoldiers)
            {
                OnboardingManager.Instance.SetNextButtonEnabled(true);
                UIHighlightManager.RemoveHighlight("UnitsPanel");
            }
        }
    }
}
```

### Step 4: End Day Tutorial
```csharp
public class EndDayStep : OnboardingStep
{
    protected override void OnStepEnter()
    {
        // Highlight End Day button
        UIHighlightManager.HighlightElements("EndDayButton", highlightColor);
        
        // Track End Day button click
        GameManager.Instance.OnDayEnded += OnDayEnded;
    }
    
    private void OnDayEnded()
    {
        // Auto-proceed to night combat step
        OnboardingManager.Instance.CompleteCurrentStep();
    }
}
```

### Step 5: Night Combat Tutorial
```csharp
public class NightCombatStep : OnboardingStep
{
    [Header("Night Combat Settings")]
    public float nightDuration = 120f;
    public int maxAirstrikes = 2;
    
    private int airstrikesUsed = 0;
    
    protected override void OnStepEnter()
    {
        // Focus camera on war grid
        CameraController.Instance.FocusOnTarget(warGridCenter, 1.0f);
        
        // Start zombie spawning
        ZombieSpawner.Instance.StartNightWave();
        
        // Track airstrike usage for tutorial feedback
        AirstrikeManager.Instance.OnAirstrikeUsed += OnAirstrikeUsed;
        
        // Enable next button immediately - user can skip anytime
        OnboardingManager.Instance.SetNextButtonEnabled(true);
        
        // Show night duration info in panel
        OnboardingPanel.Instance.ShowNightDuration(nightDuration);
    }
    
    private void OnAirstrikeUsed(Vector3 position)
    {
        airstrikesUsed++;
        
        // Show airstrike feedback in tutorial
        OnboardingPanel.Instance.ShowAirstrikeUsed(airstrikesUsed, maxAirstrikes);
    }
    
    protected override void OnStepExit()
    {
        // Clean up event listeners
        AirstrikeManager.Instance.OnAirstrikeUsed -= OnAirstrikeUsed;
    }
}
```

### Step 6: Resource Collection Tutorial
```csharp
public class ResourceCollectionStep : OnboardingStep
{
    private bool resourceCollected = false;
    
    protected override void OnStepEnter()
    {
        // Focus camera on a placed building
        Building targetBuilding = FindPlacedBuilding();
        if (targetBuilding != null)
        {
            CameraController.Instance.FocusOnTarget(targetBuilding.transform, 1.0f);
            
            // Ensure building has resources to collect
            targetBuilding.ForceGenerateResource();
            
            // Highlight the building
            UIHighlightManager.HighlightBuilding(targetBuilding, highlightColor);
            
            // Track resource collection
            targetBuilding.OnResourceCollected += OnResourceCollected;
        }
        
        // Disable next button initially
        OnboardingManager.Instance.SetNextButtonEnabled(false);
    }
    
    private void OnResourceCollected(ResourceType type, int amount)
    {
        resourceCollected = true;
        OnboardingManager.Instance.SetNextButtonEnabled(true);
        
        // Remove highlight
        UIHighlightManager.RemoveAllHighlights();
        
        // Show collection feedback
        OnboardingPanel.Instance.ShowResourceCollected(type, amount);
    }
    
    private Building FindPlacedBuilding()
    {
        // Find any building that was placed during tutorial
        return BuildingManager.Instance.GetPlacedBuildings().FirstOrDefault();
    }
}
```

### Step 7: Farm Management Tutorial
```csharp
public class FarmManagementStep : OnboardingStep
{
    private bool foodCollected = false;
    private int cropsToCollect = 3;
    private int cropsCollected = 0;
    
    protected override void OnStepEnter()
    {
        // Focus camera on farm area
        CameraController.Instance.FocusOnTarget(farmAreaCenter, 1.0f);
        
        // Ensure crops are available
        FarmManager.Instance.SpawnCropsForTutorial(cropsToCollect);
        
        // Highlight farm area
        UIHighlightManager.HighlightElements("FarmArea", highlightColor);
        
        // Track crop collection
        FarmManager.Instance.OnCropCollected += OnCropCollected;
        
        // Show hunger debuff warning
        HungerSystem.Instance.ShowHungerWarning(true);
        
        // Disable next button initially
        OnboardingManager.Instance.SetNextButtonEnabled(false);
    }
    
    private void OnCropCollected(Vector3 position, int foodAmount)
    {
        cropsCollected++;
        
        // Update tutorial progress
        OnboardingPanel.Instance.UpdateCropProgress(cropsCollected, cropsToCollect);
        
        if (cropsCollected >= cropsToCollect)
        {
            foodCollected = true;
            OnboardingManager.Instance.SetNextButtonEnabled(true);
            
            // Remove highlights
            UIHighlightManager.RemoveHighlight("FarmArea");
            
            // Hide hunger warning
            HungerSystem.Instance.ShowHungerWarning(false);
            
            // Show completion message
            OnboardingPanel.Instance.ShowFarmTutorialComplete();
        }
    }
}
```

### Step 8: Meta Upgrades (Game Over Triggered)
```csharp
public class MetaUpgradesStep : OnboardingStep
{
    private static bool hasSeenGameOver = false;
    
    public static void TriggerOnGameOver()
    {
        if (!hasSeenGameOver)
        {
            hasSeenGameOver = true;
            OnboardingManager.Instance.StartSpecialStep("MetaUpgrades");
        }
    }
    
    protected override void OnStepEnter()
    {
        // Highlight meta upgrades button on game over screen
        UIHighlightManager.HighlightElements("MetaUpgradesButton", highlightColor);
        
        // Track button click
        MetaUpgradeScreen.OnScreenOpened += OnMetaUpgradeScreenOpened;
    }
    
    private void OnMetaUpgradeScreenOpened()
    {
        OnboardingManager.Instance.CompleteCurrentStep();
    }
}
```

### Step 9: Permanent Upgrades (Main Menu)
```csharp
public class PermanentUpgradesStep : OnboardingStep
{
    private static bool hasSeenMainMenu = false;
    
    public static void TriggerOnMainMenuReturn()
    {
        if (!hasSeenMainMenu)
        {
            hasSeenMainMenu = true;
            OnboardingManager.Instance.StartSpecialStep("PermanentUpgrades");
        }
    }
    
    protected override void OnStepEnter()
    {
        // Highlight permanent upgrades button in save slots
        UIHighlightManager.HighlightElements("PermanentUpgradesButton", highlightColor);
        
        // This is the final step, so completion closes onboarding
        OnboardingManager.Instance.SetFinalStep(true);
    }
}
```

## GIF Animation System

### GIFAnimator Component
```csharp
public class GIFAnimator : MonoBehaviour
{
    [Header("GIF Settings")]
    public Sprite[] frames;
    public float frameRate = 10f;
    public bool loop = true;
    public bool playOnStart = true;
    
    private Image targetImage;
    private int currentFrame = 0;
    private float frameTimer = 0f;
    
    private void Start()
    {
        targetImage = GetComponent<Image>();
        if (playOnStart) Play();
    }
    
    public void Play()
    {
        enabled = true;
        currentFrame = 0;
        frameTimer = 0f;
    }
    
    private void Update()
    {
        frameTimer += Time.deltaTime;
        
        if (frameTimer >= 1f / frameRate)
        {
            frameTimer = 0f;
            currentFrame = (currentFrame + 1) % frames.Length;
            
            if (currentFrame == 0 && !loop)
            {
                enabled = false;
                return;
            }
            
            targetImage.sprite = frames[currentFrame];
        }
    }
}
```

## UI Highlighting System

### UIHighlightManager
```csharp
public class UIHighlightManager : MonoBehaviour
{
    [Header("Highlight Settings")]
    public Material highlightMaterial;
    public float pulseSpeed = 2f;
    public AnimationCurve pulseCurve;
    
    private Dictionary<string, HighlightGroup> activeHighlights;
    
    public void HighlightElements(string groupId, Color color)
    {
        GameObject[] elements = GameObject.FindGameObjectsWithTag(groupId);
        
        HighlightGroup group = new HighlightGroup();
        group.elements = new List<HighlightedElement>();
        
        foreach (GameObject element in elements)
        {
            HighlightedElement highlighted = new HighlightedElement();
            highlighted.gameObject = element;
            highlighted.originalMaterial = element.GetComponent<Image>()?.material;
            
            // Apply highlight effect
            ApplyHighlightEffect(element, color);
            
            group.elements.Add(highlighted);
        }
        
        activeHighlights[groupId] = group;
    }
    
    public void RemoveHighlight(string groupId)
    {
        if (activeHighlights.ContainsKey(groupId))
        {
            HighlightGroup group = activeHighlights[groupId];
            
            foreach (HighlightedElement element in group.elements)
            {
                RemoveHighlightEffect(element);
            }
            
            activeHighlights.Remove(groupId);
        }
    }
}
```

## Localization Integration

### Turkish Localization Keys
```json
{
  "onboarding": {
    "step1": {
      "title": "📷 KAMERA KONTROLU",
      "description": "City Defense Z'ye hoş geldin!\n\nKamerayı kontrol etmeyi öğrenelim:\n\n🎮 WASD tuşları ile kamerayı hareket ettir\n🖱️ Orta fare tuşunu (scroll) basılı tutarak etrafına bak\n\nKamerayı hareket ettirmeyi dene!"
    },
    "step2": {
      "title": "🏗️ BİNA YERLEŞTİRME",
      "description": "Şimdi base'ini inşa etmeyi öğren!\n\nKartlardan birini seç ve grid'e yerleştir:",
      "buildings": {
        "factory": "🏭 Fabrika (Sarı)\nKaynak üretir. Temel inşaat malzemesi.",
        "ammunition": "🔫 Mühimmat Deposu (Yeşil)\nSilah ve mermi üretir. Askerler için gerekli.",
        "house": "🏠 Ev (Gri)\nNüfus kapasitesi sağlar. İşçiler için gerekli.",
        "laboratory": "🔬 Laboratuvar (Mavi)\nAraştırma puanı üretir. Kalıcı yükseltmeler için.",
        "barracks": "⚔️ Kışla (Turuncu)\nAsker üretir. Savunman için gerekli."
      }
    }
  }
}
```

## Save System Integration

### OnboardingProgress
```csharp
[System.Serializable]
public class OnboardingProgress
{
    public bool isCompleted = false;
    public int currentStep = 0;
    public bool hasSeenGameOver = false;
    public bool hasSeenMainMenuUpgrades = false;
    public List<string> completedSteps = new List<string>();
}
```

## Performance Considerations

### Memory Management
- GIF frames loaded on-demand
- Panel pooling for reuse
- Highlight effects use object pooling
- Coroutines properly cleaned up

### Optimization
- UI elements cached for highlighting
- Animation updates only when visible
- Localization strings cached
- Step conditions evaluated efficiently

This technical specification provides a complete implementation framework for the Turkish onboarding system in City Defense Z.
